/*
 * Слова из букв: Мир Кроссвордов — standalone HTML5 engine
 * VK Mini Apps edition, compatible with static GitHub Pages hosting.
 * VK Storage sync works without a custom server; in-app purchases and public leaderboards require a separate integration.
 * No third-party assets / third-party game engine required.
 */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const STORE = 'mir_krossvordov_save_v3';
  const CHAPTERS = [
    {name:'Волшебный лес',tag:'ГЛАВА I · ВОЛШЕБНЫЙ ЛЕС',icon:'🌳',sub:'Тайны солнечной поляны'},
    {name:'Альпийское озеро',tag:'ГЛАВА II · АЛЬПИЙСКОЕ ОЗЕРО',icon:'🏔️',sub:'Бирюзовая гладь и вершины'},
    {name:'Закатный замок',tag:'ГЛАВА III · ЗАКАТНЫЙ ЗАМОК',icon:'🏰',sub:'Башни в золоте заката'},
    {name:'Цветущая сакура',tag:'ГЛАВА IV · ЦВЕТУЩАЯ САКУРА',icon:'🌸',sub:'Розовые лепестки весны'},
    {name:'Золотая пустыня',tag:'ГЛАВА V · ЗОЛОТАЯ ПУСТЫНЯ',icon:'🏜️',sub:'Оазисы, миражи и караваны'},
    {name:'Северное сияние',tag:'ГЛАВА VI · СЕВЕРНОЕ СИЯНИЕ',icon:'🌌',sub:'Танцующие огни полярной ночи'},
    {name:'Тропический остров',tag:'ГЛАВА VII · ТРОПИЧЕСКИЙ ОСТРОВ',icon:'🏝️',sub:'Пальмы, лагуна и тёплый бриз'},
    {name:'Античная Греция',tag:'ГЛАВА VIII · АНТИЧНАЯ ГРЕЦИЯ',icon:'🏛️',sub:'Храмы и легенды героев'},
    {name:'Ночной Токио',tag:'ГЛАВА IX · НОЧНОЙ ТОКИО',icon:'🌃',sub:'Огни города будущего'},
    {name:'Лавандовые поля',tag:'ГЛАВА X · ЛАВАНДОВЫЕ ПОЛЯ',icon:'🪻',sub:'Ароматы летнего вечера'},
    {name:'Горный водопад',tag:'ГЛАВА XI · ГОРНЫЙ ВОДОПАД',icon:'💦',sub:'Кристальная вода среди скал'},
    {name:'Изумрудная долина',tag:'ГЛАВА XII · ИЗУМРУДНАЯ ДОЛИНА',icon:'🍀',sub:'Зелёные тропы древнего леса'},
    {name:'Осенний парк',tag:'ГЛАВА XIII · ОСЕННИЙ ПАРК',icon:'🍁',sub:'Золотые листья на ветру'},
    {name:'Лунная бухта',tag:'ГЛАВА XIV · ЛУННАЯ БУХТА',icon:'🌙',sub:'Море серебряных отражений'},
    {name:'Небесный сад',tag:'ГЛАВА XV · НЕБЕСНЫЙ САД',icon:'☁️',sub:'Цветы среди облаков'}
  ];
  const DEFAULT = () => ({
    version:4, coins:250, levelUnlocked:1, lastLevel:1, completed:[],
    found:{}, revealed:{}, bonusFound:{}, chestProgress:0, chestOpened:0,
    dailyDate:'', spinAngle:0, noAds:false, muted:false, musicMuted:false, score:0,
    doubledRewards:[],
    updatedAt:0
  });
  const validWord = s => /^[А-ЯЁ]+$/u.test(s);
  const normalizeSave = data => {
    const source = data && typeof data === 'object' ? data : {};
    const result = {...DEFAULT(), ...source};
    result.coins = Math.max(0, Math.min(1e9, Number(result.coins) || 0));
    result.levelUnlocked = Math.max(1, Math.min(151, Number(result.levelUnlocked) || 1));
    result.lastLevel = Math.max(1, Math.min(150, Number(result.lastLevel) || 1));
    result.score = Math.max(0, Number(result.score) || 0);
    result.updatedAt = Math.max(0, Math.floor(Number(result.updatedAt) || 0));
    result.chestProgress = Math.max(0, Math.min(4, Number(result.chestProgress) || 0));
    for (const k of ['found','revealed','bonusFound']) {
      if (!result[k] || Array.isArray(result[k]) || typeof result[k] !== 'object') result[k] = {};
      for (const [key, value] of Object.entries(result[k])) if (!Array.isArray(value)) delete result[k][key];
    }
    for (const k of ['completed','doubledRewards']) if (!Array.isArray(result[k])) result[k] = [];
    return result;
  };
  function readLocal(){
    try {return normalizeSave(JSON.parse(localStorage.getItem(STORE)));}
    catch {return DEFAULT();}
  }
  let state = readLocal();
  let screen = 'menu', history = [], current = LEVELS[0];
  let targetMode = false, lockedWin = false, busySpin = false;
  let pendingWinReward = 0, pendingWinFirst = false;
  let vk = null, vkInitializing = false;
  let cloudReady = false, cloudSlot = -1, cloudWriteBusy = false, cloudTimer = 0;
  let cloudDirty = false, cloudSavingAllowed = false;
  let adOpen = false;
  let vkViewPaused = false;
  let toastTimer = 0, winnerTimer = 0, sceneW = 0, sceneH = 0;
  const selection = {active:false, pointerId:null, indexes:[], point:null};
  const confetti = [], coins = [], sparks = [];
  const audio = {context:null,unlocked:false,ambientTimer:null,step:0,blocked:false,chapter:1,previousChapter:0,fadeSteps:0};
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  function updateWallet(){
    $('coinsCount').textContent = state.coins.toLocaleString('ru-RU');
    $('shopCoins').textContent = state.coins.toLocaleString('ru-RU');
    $('myScore').textContent = state.score.toLocaleString('ru-RU');
    updateBoosters();
  }
  function updateBoosters(){
    for(const [id,cost] of [['targetBtn',75],['hintBtn',50]]){
      const button=$(id);if(!button)continue;
      const label=button.querySelector('.cost-label');
      const free=state.coins<cost;
      label.textContent=free?'🎬 Бесплатно':'✦ '+cost;
      button.classList.toggle('boost-by-ad',free);
      button.title=(id==='targetBtn'?'Прицел:':'Молния:')+(free?' открыть за видео':' '+cost+' монет');
    }
  }
  /* Local-first progress. Remote VK Storage uploads are debounced and atomic.
   * VK Storage allows at most 4096 bytes per value, so level flags are packed
   * into three compact values. Two alternating slots prevent interrupted writes
   * from destroying the previous committed save. */
  const CLOUD_PREFIX = 'mk_crossword_v1_';
  const CLOUD_PARTS = 3;
  const CLOUD_BYTE_LIMIT = 4096;
  const CLOUD_DELAY_MS = 1800;
  const cloudKey = (slot, suffix) => CLOUD_PREFIX + slot + '_' + suffix;
  const byteLength = value => new TextEncoder().encode(value).length;

  function bitPack(selected, options){
    const set = new Set(selected || []);
    const bytes = new Uint8Array(Math.ceil(options.length / 8));
    for(let i=0;i<options.length;i++) if(set.has(options[i])) bytes[i>>3] |= 1 << (i&7);
    let end=bytes.length;
    while(end>0 && bytes[end-1]===0)end--;
    if(!end)return '';
    let binary='';for(let i=0;i<end;i++)binary+=String.fromCharCode(bytes[i]);
    return btoa(binary);
  }
  function bitUnpack(encoded, options){
    if(typeof encoded!=='string')throw Error('Invalid cloud bitset');
    const binary=encoded?atob(encoded):'';
    if(binary.length>Math.ceil(options.length/8))throw Error('Cloud bitset too long');
    const restored=[];
    for(let i=0;i<options.length;i++){
      const byte=i>>3;
      if(byte<binary.length && (binary.charCodeAt(byte)&(1<<(i&7))))restored.push(options[i]);
    }
    return restored;
  }
  const levelIds=Array.from({length:150},(_,i)=>i+1);
  const boardCellKeys=level=>{
    const unique=new Set();
    for(const word of level.words) for(const key of slots(word))unique.add(key);
    return [...unique].sort((a,b)=>{
      const [ax,ay]=a.split(',').map(Number),[bx,by]=b.split(',').map(Number);
      return ay-by || ax-bx;
    });
  };
  const cloudHash=value=>{
    // FNV-1a over UTF-16 code units; all packed payload is ASCII.
    let h=2166136261;
    for(let i=0;i<value.length;i++) {h^=value.charCodeAt(i);h=Math.imul(h,16777619);}
    return (h>>>0).toString(36);
  };

  function packCloudSave(save){
    const base=normalizeSave(save);
    const groups=[];
    for(let part=0;part<CLOUD_PARTS;part++){
      const records=[];
      for(let i=part*50;i<(part+1)*50;i++){
        const level=LEVELS[i],id=String(level.id);
        const found=bitPack(base.found[id],level.words.map(w=>w.word));
        const revealed=bitPack(base.revealed[id],boardCellKeys(level));
        const bonus=bitPack(base.bonusFound[id],level.bonusWords);
        if(found||revealed||bonus)records.push([level.id,found,revealed,bonus]);
      }
      const text=JSON.stringify(records);
      if(byteLength(text)>CLOUD_BYTE_LIMIT)throw Error('VK Storage part exceeds 4096 bytes');
      groups.push(text);
    }
    const core=[base.coins,base.levelUnlocked,base.lastLevel,
      bitPack(base.completed,levelIds),base.chestProgress,base.chestOpened,
      base.dailyDate,base.spinAngle,base.noAds?1:0,base.muted?1:0,
      base.musicMuted?1:0,base.score,bitPack(base.doubledRewards,levelIds)];
    const meta={v:1,t:base.updatedAt,c:core,n:CLOUD_PARTS,
      h:cloudHash(JSON.stringify(core)+'|'+groups.join('|'))};
    const manifest=JSON.stringify(meta);
    if(byteLength(manifest)>CLOUD_BYTE_LIMIT)throw Error('VK Storage manifest too large');
    return {meta,manifest,groups};
  }
  function unpackCloudSave(meta,groups){
    if(!meta||meta.v!==1||!Number.isFinite(meta.t)||!Array.isArray(meta.c)||
      meta.c.length!==13||meta.n!==CLOUD_PARTS||groups.length!==CLOUD_PARTS)
      throw Error('Unknown VK Storage save format');
    if(groups.some(g=>typeof g!=='string'||byteLength(g)>CLOUD_BYTE_LIMIT))
      throw Error('Invalid VK Storage save part');
    if(meta.h!==cloudHash(JSON.stringify(meta.c)+'|'+groups.join('|')))
      throw Error('VK Storage save checksum mismatch');
    const c=meta.c;
    const loaded=normalizeSave({updatedAt:meta.t,coins:c[0],levelUnlocked:c[1],
      lastLevel:c[2],completed:bitUnpack(c[3],levelIds),
      chestProgress:c[4],chestOpened:c[5],dailyDate:c[6],spinAngle:c[7],
      noAds:!!c[8],muted:!!c[9],musicMuted:!!c[10],score:c[11],
      doubledRewards:bitUnpack(c[12],levelIds)});
    groups.forEach((text,groupIndex)=>{
      const records=JSON.parse(text);
      if(!Array.isArray(records)||records.length>50)throw Error('VK Storage group corrupt');
      for(const record of records){
        if(!Array.isArray(record)||record.length!==4)throw Error('VK Storage row corrupt');
        const [id,found,revealed,bonus]=record;
        if(!Number.isInteger(id)||id<=groupIndex*50||id>(groupIndex+1)*50)
          throw Error('VK Storage invalid level');
        const level=LEVELS[id-1],key=String(id);
        const f=bitUnpack(found,level.words.map(w=>w.word));
        const r=bitUnpack(revealed,boardCellKeys(level));
        const b=bitUnpack(bonus,level.bonusWords);
        if(f.length)loaded.found[key]=f;
        if(r.length)loaded.revealed[key]=r;
        if(b.length)loaded.bonusFound[key]=b;
      }
    });
    return loaded;
  }

  function cloudValues(response){
    if(!response||!Array.isArray(response.keys))throw Error('VK Storage read failed');
    const result={};
    for(const entry of response.keys)if(entry&&typeof entry.key==='string')
      result[entry.key]=entry.value??'';
    return result;
  }
  async function fetchCloudSave(){
    const metaKeys=[cloudKey(0,'meta'),cloudKey(1,'meta')];
    const raw=cloudValues(await vk.send('VKWebAppStorageGet',{keys:metaKeys}));
    const candidates=[];
    let corrupt=false;
    for(let slot=0;slot<2;slot++){
      const value=raw[cloudKey(slot,'meta')];
      if(!value)continue;
      try{
        const manifest=JSON.parse(value);
        if(manifest.v!==1||!Number.isFinite(manifest.t))throw Error('Invalid manifest');
        candidates.push({slot,manifest});
      }catch{corrupt=true;}
    }
    candidates.sort((a,b)=>b.manifest.t-a.manifest.t);
    for(const candidate of candidates){
      try{
        const keys=Array.from({length:CLOUD_PARTS},(_,i)=>cloudKey(candidate.slot,i));
        const map=cloudValues(await vk.send('VKWebAppStorageGet',{keys}));
        const groups=keys.map(key=>map[key]);
        if(groups.some(item=>typeof item!=='string'||!item.length))throw Error('Incomplete save');
        const save=unpackCloudSave(candidate.manifest,groups);
        return {save,slot:candidate.slot};
      }catch{corrupt=true;}
    }
    if(corrupt)throw Error('VK Storage data unavailable or incomplete');
    return {save:null,slot:-1};
  }
  function applyCloudSave(loaded){
    if(!loaded || loaded.updatedAt<=state.updatedAt)return false;
    state=normalizeSave(loaded);
    try{localStorage.setItem(STORE,JSON.stringify(state));}catch{}
    current=LEVELS[state.lastLevel-1]||LEVELS[0];
    buildLetters();renderAudioButtons();updateWallet();
    renderMap();renderDaily();
    if(screen==='game'){
      $('levelTitle').textContent=current.title;
      $('chapterLabel').textContent=CHAPTERS[current.chapter-1].tag;
      $('levelBadge').innerHTML=`${current.id}<span>/150</span>`;
      renderBoard();requestAnimationFrame(()=>{layoutWheel();resizeBoard();});
    }
    if(screen==='chest')renderChest();
    if(screen==='leaderboard')refreshLeaderboard();
    setChapter(screen==='game'?current.chapter:Math.ceil(state.lastLevel/10));
    return true;
  }
  function scheduleCloudSave(){
    if(!vk||!cloudReady||!cloudSavingAllowed)return;
    cloudDirty=true;
    clearTimeout(cloudTimer);
    cloudTimer=setTimeout(flushCloudSave,CLOUD_DELAY_MS);
  }
  async function flushCloudSave(){
    if(!vk||!cloudReady||!cloudSavingAllowed||cloudWriteBusy||!cloudDirty)return;
    cloudDirty=false;
    cloudWriteBusy=true;
    let snapshot;
    try{
      snapshot=packCloudSave(state);
      const nextSlot=cloudSlot===0?1:0;
      // Write all data first. The manifest acts as the atomic commit marker.
      for(let i=0;i<CLOUD_PARTS;i++){
        const response=await vk.send('VKWebAppStorageSet',
          {key:cloudKey(nextSlot,i),value:snapshot.groups[i]});
        if(response?.result===false)throw Error('VK Storage part write failed');
      }
      const response=await vk.send('VKWebAppStorageSet',
        {key:cloudKey(nextSlot,'meta'),value:snapshot.manifest});
      if(response?.result===false)throw Error('VK Storage commit failed');
      cloudSlot=nextSlot;
    }catch{
      // Keep local progress. Retry after the next user save or VK restore.
      cloudDirty=true;
      cloudSavingAllowed=false;
    }finally{
      cloudWriteBusy=false;
      if(cloudSavingAllowed&&(cloudDirty||state.updatedAt>snapshot?.meta.t))scheduleCloudSave();
      if(screen==='leaderboard')refreshLeaderboard();
    }
  }
  async function initializeCloudSave(){
    try{
      const cloud=await fetchCloudSave();
      cloudSlot=cloud.slot;
      if(cloud.save){
        if(!applyCloudSave(cloud.save) && state.updatedAt>cloud.save.updatedAt)
          cloudDirty=true;
      }else if(state.updatedAt>0) cloudDirty=true;
      cloudReady=true;cloudSavingAllowed=true;
      if(cloudDirty)scheduleCloudSave();
    }catch{
      // Do not overwrite an inaccessible remote save. A later restore retries.
      cloudReady=false;cloudSavingAllowed=false;
    }
    if(screen==='leaderboard')refreshLeaderboard();
  }
  function persist(){
    state.updatedAt=Math.max(Date.now(),state.updatedAt+1);
    try{localStorage.setItem(STORE,JSON.stringify(state));}
    catch{/* Private mode or quota: gameplay still runs. */}
    updateWallet();
    scheduleCloudSave();
  }
  function toast(message){
    const el=screen==='game' ? $('gameFeedback') : $('toast');
    $('gameFeedback').classList.remove('show');$('toast').classList.remove('show');
    el.textContent=message;
    void el.offsetWidth;el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer=setTimeout(()=>el.classList.remove('show'),2600);
  }
  function addCoins(n){state.coins+=n;persist();updateWallet();}
  function spendCoins(n){if(state.coins<n){toast('Не хватает монет! Загляни в магазин ✦');return false;}state.coins-=n;persist();return true;}
  function dateStamp(){const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');}
  function wordKey(w){return w.word;}
  function cellKey(x,y){return x+','+y;}
  function slots(w){return Array.from(w.word,(_,i)=>cellKey(w.x+(w.direction==='right'?i:0),w.y+(w.direction==='down'?i:0)));}
  function foundWords(){return state.found[current.id] ||= [];}
  function openCells(){return state.revealed[current.id] ||= [];}
  function bonusWordsFound(){return state.bonusFound[current.id] ||= [];}
  function isWordCompleted(word){return foundWords().includes(word.word)||slots(word).every(k=>openCells().includes(k));}
  function wordCount(){return current.words.filter(isWordCompleted).length;}
  // VK Bridge has no GameplayAPI equivalent. Audio pauses on page and ad events.
  function gameplay(_playing){}
  function showScreen(name,{record=true}={}){
    if (!$('screen-'+name)) return;
    if (screen===name) return;
    if (screen==='game'){
      finishSwipe(false);
      targetMode=false;
      $('targetBtn').classList.remove('active-target');
    }
    if (record) history.push(screen);
    screen=name;
    $('toast').classList.remove('show');$('gameFeedback').classList.remove('show');
    $('app').classList.toggle('in-game',name==='game');
    for (const el of document.querySelectorAll('.screen'))el.classList.toggle('active',el.id==='screen-'+name);
    $('backBtn').classList.toggle('hidden',name==='menu');
    if(name==='menu') history=[];
    if(name==='map')renderMap();
    if(name==='shop')updateShop();
    if(name==='wheel')renderDaily();
    if(name==='chest')renderChest();
    if(name==='leaderboard')refreshLeaderboard();
    if(name==='game'){renderBoard();requestAnimationFrame(()=>{layoutWheel();resizeBoard();});}
    gameplay(name==='game');
    if(name==='game' || name==='menu' || name==='map') setChapter(name==='game'?current.chapter:Math.ceil((state.lastLevel)/10));
    else if(name==='win') setChapter(current.chapter);
    else if(name==='wheel' || name==='shop') setChapter(1);
    else if(name==='chest') setChapter(current.chapter);
    if(name==='win')spawnConfetti(96);
  }
  function goBack(){
    if(screen==='game'){showScreen('map');return;}
    if(screen==='map'){showScreen('menu',{record:false});return;}
    const previous=history.pop()||'menu';
    showScreen(previous,{record:false});
  }
  function renderMap(){
    const root=$('mapChapters');root.replaceChildren();
    CHAPTERS.forEach((chapter,index)=>{
      const section=document.createElement('div');section.className='chapter-panel';
      const h=document.createElement('h3');h.textContent=chapter.icon+'  '+chapter.name;
      const p=document.createElement('p');p.textContent=chapter.sub;
      const grid=document.createElement('div');grid.className='map-nodes';
      for(let i=1;i<=10;i++){
        const levelId=index*10+i;
        const isComplete=state.completed.includes(levelId);
        const locked=levelId>state.levelUnlocked;
        const node=document.createElement('button');node.type='button';
        node.className='map-node '+(locked?'locked':isComplete?'complete':'current');
        node.setAttribute('aria-label',locked?`Уровень ${levelId} закрыт. Сначала пройди предыдущий`: `Уровень ${levelId}: ${LEVELS[levelId-1].title}`);
        node.innerHTML=locked?'🔒':isComplete?`${levelId}<span class="small-star">★</span>`:String(levelId);
        node.setAttribute('aria-disabled',String(locked));node.addEventListener('click',()=>startLevel(levelId));
        grid.appendChild(node);
      }
      section.append(h,p,grid);root.appendChild(section);
    });
  }
  function startLevel(id){
    const level=LEVELS[id-1];
    if(!level||id>state.levelUnlocked){toast('Этот уровень пока закрыт 🔒');return;}
    clearTimeout(winnerTimer);lockedWin=false;targetMode=false;
    current=level;state.lastLevel=id;persist();
    $('levelTitle').textContent=level.title;
    $('chapterLabel').textContent=CHAPTERS[level.chapter-1].tag;
    $('levelBadge').innerHTML=`${level.id}<span>/150</span>`;
    buildLetters();
    if(screen==='game'){renderBoard();layoutWheel();resizeBoard();gameplay(true);setChapter(level.chapter);}
    else showScreen('game');
    toast('Уровень '+id+' · '+level.title);
  }
  function renderBoard(){
    const root=$('crossword');root.replaceChildren();
    root.style.setProperty('--cols',current.cols);
    root.style.setProperty('--rows',current.rows);
    const cellLetters=new Map();
    for(const word of current.words){
      [...word.word].forEach((letter,i)=>{
        const key=cellKey(word.x+(word.direction==='right'?i:0),word.y+(word.direction==='down'?i:0));
        cellLetters.set(key,letter);
      });
    }
    for(let y=0;y<current.rows;y++)for(let x=0;x<current.cols;x++){
      const key=cellKey(x,y),ch=cellLetters.get(key);
      const node=document.createElement('button');node.type='button';
      node.className='cell'+(!ch?' empty':'');
      node.dataset.key=key;
      node.setAttribute('role','gridcell');
      if(ch){
        const revealed=openCells().includes(key)||current.words.some(w=>foundWords().includes(w.word)&&slots(w).includes(key));
        node.classList.toggle('revealed',revealed);
        node.textContent=revealed?ch:'';
        node.setAttribute('aria-label',revealed?'Буква '+ch:'Закрытая клетка, столбец '+(x+1)+', строка '+(y+1));
        if(targetMode&&!revealed)node.classList.add('target-mode');
        node.addEventListener('click',()=>onCellTap(x,y));
      }else{node.tabIndex=-1;node.setAttribute('aria-hidden','true');}
      root.appendChild(node);
    }
    updateProgress();resizeBoard();
  }
  function resizeBoard(){
    if(screen!=='game')return;
    const area=document.querySelector('.board-region');
    const w=area.clientWidth-8,h=area.clientHeight-8;
    let size=Math.floor(Math.min(53,(w-3*(current.cols-1))/current.cols,(h-3*(current.rows-1))/current.rows));
    size=Math.max(12,size);
    $('crossword').style.setProperty('--cell',size+'px');
  }
  function updateProgress(){
    const complete=wordCount(),all=current.words.length;
    $('levelProgress').style.width=(100*complete/all)+'%';
    $('progressText').textContent=complete+'/'+all+' слов';
    $('chestProgress').style.setProperty('--fill',(state.chestProgress/5*100)+'%');
  }
  function revealAt(x,y,{animated=true}={}){
    const key=cellKey(x,y);let cell=null,letter=null;
    for(const w of current.words){
      const j=slots(w).indexOf(key);
      if(j>=0){letter=w.word[j];break;}
    }
    if(!letter || openCells().includes(key))return false;
    openCells().push(key);persist();
    cell=[...$('crossword').children].find(c=>c.dataset.key===key);
    if(cell){cell.textContent=letter;cell.classList.add('revealed');cell.classList.remove('target-mode');
      if(animated){cell.classList.remove('reveal-anim');void cell.offsetWidth;cell.classList.add('reveal-anim');}
    }
    sound('reveal');
    // A word can also be completed entirely by hints.
    for(const w of current.words){
      if(!foundWords().includes(w.word) && slots(w).every(k=>openCells().includes(k)))foundWords().push(w.word);
    }
    persist();updateProgress();checkWin();return true;
  }
  function leaveTargetMode(){
    targetMode=false;$('targetBtn').classList.remove('active-target');
    document.querySelectorAll('.cell.target-mode').forEach(el=>el.classList.remove('target-mode'));
  }
  function onCellTap(x,y){
    if(!targetMode||screen!=='game'||lockedWin||adOpen)return;
    const key=cellKey(x,y);
    if(openCells().includes(key)||[...$('crossword').children].find(n=>n.dataset.key===key)?.classList.contains('revealed')){
      toast('Эта клетка уже открыта');return;
    }
    if(state.coins>=75){
      if(!spendCoins(75))return;
      leaveTargetMode();revealAt(x,y);toast('Прицел открыл одну букву!');
    }else{
      const levelId=current.id;
      rewarded(()=>{
        if(current.id!==levelId||screen!=='game')return;
        leaveTargetMode();revealAt(x,y);toast('Буква открыта за просмотр! 🎬');
      });
    }
  }
  function hint(){
    if(screen!=='game'||lockedWin||adOpen)return;
    const unknown=[];
    for(const w of current.words)if(!isWordCompleted(w)){
      w.word.split('').forEach((letter,i)=>{
        const x=w.x+(w.direction==='right'?i:0),y=w.y+(w.direction==='down'?i:0),key=cellKey(x,y);
        if(!openCells().includes(key))unknown.push({x,y});
      });
    }
    if(!unknown.length){toast('Все буквы уже открыты!');return;}
    const chosen=unknown[Math.floor(Math.random()*unknown.length)];
    if(state.coins>=50){
      if(!spendCoins(50))return;
      revealAt(chosen.x,chosen.y);toast('Молния подсветила букву! ϟ');
    }else{
      const levelId=current.id;
      rewarded(()=>{
        if(current.id!==levelId||screen!=='game')return;
        revealAt(chosen.x,chosen.y);toast('Молния подарила подсказку! 🎬');
      });
    }
  }
  function toggleTarget(){
    if(screen!=='game'||lockedWin||adOpen)return;
    targetMode=!targetMode;
    $('targetBtn').classList.toggle('active-target',targetMode);
    document.querySelectorAll('.cell:not(.revealed):not(.empty)').forEach(el=>el.classList.toggle('target-mode',targetMode));
    toast(targetMode?'Нажми на закрытую клетку':'Прицел выключен');
  }
  function acceptWord(word){
    const w=word.toUpperCase();if(!validWord(w) || w.length<2)return;
    const match=current.words.find(item=>item.word===w);
    if(match){
      if(isWordCompleted(match)){toast('Это слово уже открыто ✦');sound('soft');return;}
      foundWords().push(w);
      const targets=slots(match);
      for(let i=0;i<targets.length;i++){
        const key=targets[i];
        if(!openCells().includes(key))openCells().push(key);
        const el=[...$('crossword').children].find(n=>n.dataset.key===key);
        if(el){
          el.textContent=match.word[i];el.classList.add('revealed');
          setTimeout(()=>{if(screen==='game'){el.classList.remove('reveal-anim');void el.offsetWidth;el.classList.add('reveal-anim');}},i*85);
        }
      }
      sound('success');persist();updateProgress();
      $('previewText').textContent=w;
      toast('Верно! ✨ '+w);
      checkWin();
    }else if(current.bonusWords.includes(w)){
      if(bonusWordsFound().includes(w)){toast('Бонус уже найден');sound('soft');return;}
      bonusWordsFound().push(w);state.chestProgress++;
      sound('bonus');
      if(state.chestProgress>=5){
        state.chestProgress=0;state.chestOpened++;state.coins+=75;
        spawnCoins(10);toast('Сундук открыт! +75 монет 🎁');
      }else toast('Бонусное слово! '+state.chestProgress+'/5 до сундука');
      persist();updateProgress();
    }else{
      $('wordPreview').classList.remove('shake');void $('wordPreview').offsetWidth;$('wordPreview').classList.add('shake');
      sound('wrong');toast('Такого слова пока нет');
    }
  }
  function checkWin(){
    if(lockedWin||wordCount()!==current.words.length)return;
    lockedWin=true;
    const id=current.id,first=!state.completed.includes(id);
    const reward=65+Math.min(45,current.words.length*5);
    if(first){
      state.completed.push(id);
      state.levelUnlocked=Math.max(state.levelUnlocked,Math.min(151,id+1));
      state.coins+=reward;
      state.score+=100+current.words.length*20;
    }
    persist();updateProgress();
    $('victoryCoins').textContent=first?'+'+reward:'Уже получено';
    $('nextBtn').textContent=id===150?'ВСЕ МИРЫ ПРОЙДЕНЫ ✦':'СЛЕДУЮЩИЙ УРОВЕНЬ ➜';
    pendingWinFirst=first;pendingWinReward=reward;
    const doubled=state.doubledRewards.includes(id);
    $('doubleBtn').disabled=!first||doubled;
    $('doubleBtn').textContent=first&&!doubled?'🎬 Забрать x2 · ещё +'+reward+' монет':'Бонус за уровень уже получен';
    sound('win');spawnCoins(24);
    $('toast').classList.remove('show');
    setScore();
    winnerTimer=setTimeout(()=>{
      if(screen!=='game'||current.id!==id)return;
      showScreen('win');
      // Fullscreen ads appear only after the player requests the next level.
    },reducedMotion?120:860);
  }

  /* Letter wheel: mouse, touch and stylus use the same Pointer Events path. */
  let letterOrder=[],wheelButtons=[];
  function buildLetters(){
    letterOrder=current.letters.map((letter,id)=>({letter,id}));
    const root=$('lettersWheel');root.replaceChildren();
    wheelButtons=letterOrder.map(item=>{
      const button=document.createElement('span');
      button.className='letter-token';button.textContent=item.letter;button.dataset.letterId=item.id;
      root.appendChild(button);return button;
    });
    layoutWheel();clearSelection();
  }
  function layoutWheel(){
    if(screen!=='game')return;
    const area=$('wheelFrame');
    const maxByWidth=Math.max(162,window.innerWidth-Math.min(window.innerWidth<410?105:153,155));
    const maxByHeight=Math.max(160,window.innerHeight*.325);
    const size=Math.floor(Math.min(286,maxByWidth,maxByHeight));
    area.style.setProperty('--wheel-size',size+'px');
    const n=letterOrder.length;
    const tokenSize=Math.max(31,Math.floor(Math.min(57,size*.22,2*size*.34*Math.sin(Math.PI/n)*.86)));
    area.style.setProperty('--token-size',tokenSize+'px');
    const radius=size*.34;
    wheelButtons.forEach((b,i)=>{
      const theta=-Math.PI/2+i*Math.PI*2/n;
      b.style.left=`calc(50% + ${Math.cos(theta)*radius}px)`;
      b.style.top=`calc(50% + ${Math.sin(theta)*radius}px)`;
    });
    const canvas=$('swipeCanvas'),scale=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.floor(size*scale);canvas.height=Math.floor(size*scale);
    canvas.getContext('2d').setTransform(scale,0,0,scale,0,0);
    renderLine();resizeBoard();
  }
  function shuffle(){
    if(screen!=='game'||selection.active)return;
    for(let i=letterOrder.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[letterOrder[i],letterOrder[j]]=[letterOrder[j],letterOrder[i]];}
    wheelButtons.forEach((button,i)=>button.textContent=letterOrder[i].letter);
    sound('shuffle');layoutWheel();
  }
  function relativePoint(event){const rect=$('wheelFrame').getBoundingClientRect();return{x:event.clientX-rect.left,y:event.clientY-rect.top};}
  function tokenAt(point){
    let best=-1,dist=Infinity;
    wheelButtons.forEach((button,i)=>{
      const r=button.getBoundingClientRect(),f=$('wheelFrame').getBoundingClientRect();
      const x=r.left-f.left+r.width/2,y=r.top-f.top+r.height/2;
      const dd=Math.hypot(point.x-x,point.y-y);
      if(dd<Math.max(r.width*.68,25)&&dd<dist){best=i;dist=dd;}
    });return best;
  }
  function addIndex(index){
    if(index<0)return;
    const selected=selection.indexes;
    if(selected.length>=2&&index===selected.at(-2)){
      selected.pop();sound('soft');updateSelection();return;
    }
    if(selected.includes(index))return;
    selected.push(index);sound('select');updateSelection();
  }
  function updateSelection(){
    const word=selection.indexes.map(i=>letterOrder[i].letter).join('');
    $('previewText').textContent=word||'ПРОВЕДИ ПО БУКВАМ';
    $('wordPreview').classList.toggle('active-word',Boolean(word));
    wheelButtons.forEach((b,i)=>b.classList.toggle('selected',selection.indexes.includes(i)));
    renderLine();
  }
  function renderLine(){
    const canvas=$('swipeCanvas'),ctx=canvas.getContext('2d');
    const dpr=Math.min(window.devicePixelRatio||1,2);
    ctx.clearRect(0,0,canvas.width/dpr,canvas.height/dpr);
    const f=$('wheelFrame').getBoundingClientRect();
    const pos=i=>{const r=wheelButtons[i].getBoundingClientRect();return{x:r.left-f.left+r.width/2,y:r.top-f.top+r.height/2};};
    const points=selection.indexes.map(pos);
    if(!points.length)return;
    if(selection.active&&selection.point)points.push(selection.point);
    ctx.save();ctx.lineJoin='round';ctx.lineCap='round';
    ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));
    ctx.strokeStyle='#d99a32';ctx.lineWidth=14;ctx.shadowColor='#ffea84';ctx.shadowBlur=23;ctx.stroke();
    ctx.strokeStyle='#fff1a1';ctx.lineWidth=8;ctx.shadowBlur=14;ctx.stroke();
    ctx.strokeStyle='#ffffffbb';ctx.lineWidth=2;ctx.shadowBlur=0;ctx.stroke();
    ctx.restore();
  }
  function beginSwipe(event){
    if(screen!=='game'||lockedWin)return;
    if(event.button!==undefined&&event.button!==0)return;
    const index=tokenAt(relativePoint(event));
    if(index<0)return;
    event.preventDefault();
    selection.active=true;selection.pointerId=event.pointerId;
    selection.indexes=[];selection.point=relativePoint(event);
    try{$('wheelFrame').setPointerCapture(event.pointerId);}catch{}
    addIndex(index);
  }
  function moveSwipe(event){
    if(!selection.active||event.pointerId!==selection.pointerId)return;
    event.preventDefault();selection.point=relativePoint(event);
    addIndex(tokenAt(selection.point));renderLine();
  }
  function finishSwipe(submit=true,event=null){
    if(!selection.active)return;
    if(event&&event.pointerId!==selection.pointerId)return;
    if(event)selection.point=relativePoint(event);
    if(event)addIndex(tokenAt(selection.point));
    const word=selection.indexes.map(i=>letterOrder[i].letter).join('');
    selection.active=false;selection.pointerId=null;selection.point=null;
    if(submit&&word.length>1)acceptWord(word);
    const oldWord=word;
    wheelButtons.forEach(b=>b.classList.remove('selected'));
    selection.indexes=[];renderLine();
    setTimeout(()=>{if(!selection.active && $('previewText').textContent===oldWord){$('previewText').textContent='ПРОВЕДИ ПО БУКВАМ';$('wordPreview').classList.remove('active-word');}},650);
  }
  function clearSelection(){selection.active=false;selection.pointerId=null;selection.indexes=[];selection.point=null;wheelButtons.forEach(b=>b.classList.remove('selected'));$('previewText').textContent='ПРОВЕДИ ПО БУКВАМ';$('wordPreview').classList.remove('active-word');renderLine();}

  /* Daily rewards and chest. */
  const DAILY_PRIZES=[25,50,100,150,250,500];
  function syncPrizeRotation(angle,animate=false){
    document.querySelectorAll('.lucky-prize').forEach(label=>{
      label.style.transition=animate?'transform 4.8s cubic-bezier(.08,.62,.11,1)':'none';
      label.style.transform=`translate(-50%,-50%) rotate(${-angle}deg)`;
    });
  }
  function renderDaily(){
    const used=state.dailyDate===dateStamp();
    $('spinBtn').disabled=used||busySpin;
    $('dailyStatus').textContent=used?'Возвращайся завтра за новым подарком ✨':'Твой бесплатный поворот уже ждёт!';
    $('luckyWheel').style.transition='none';
    $('luckyWheel').style.transform=`rotate(${state.spinAngle}deg)`;
    syncPrizeRotation(state.spinAngle,false);
    void $('luckyWheel').offsetWidth;
    $('luckyWheel').style.transition='transform 4.8s cubic-bezier(.08,.62,.11,1)';
  }
  function spinDaily(){
    if(busySpin||state.dailyDate===dateStamp())return;
    busySpin=true;
    const chosen=Math.floor(Math.random()*DAILY_PRIZES.length);
    const award=DAILY_PRIZES[chosen];
    // conic sectors begin at 12 o'clock. The pointer is at 12 o'clock.
    // The center of sector j is 30 + 60*j degrees clockwise.
    const rotation=360*7 + ((330-chosen*60-state.spinAngle%360+360)%360);
    state.spinAngle+=rotation;
    state.dailyDate=dateStamp();state.coins+=award;
    persist();
    $('spinBtn').disabled=true;
    $('luckyWheel').style.transform=`rotate(${state.spinAngle}deg)`;
    syncPrizeRotation(state.spinAngle,true);
    sound('spin');
    setTimeout(()=>{
      busySpin=false;spawnCoins(15);sound('win');
      $('dailyStatus').textContent='Поздравляем! +'+award+' монет ✦';
      toast('Колесо подарило '+award+' монет!');
      // Preserve result text instead of overwriting it with today's status.
      $('luckyWheel').style.transition='none';
      syncPrizeRotation(state.spinAngle,false);
      $('luckyWheel').style.transform=`rotate(${state.spinAngle}deg)`;
      $('spinBtn').disabled=true;
    },reducedMotion?200:4850);
  }
  function renderChest(){
    $('chestCounter').textContent=state.chestProgress+' / 5 бонусных слов';
    $('chestBigFill').style.width=state.chestProgress*20+'%';
    $('bigChest').classList.remove('opening');
    if(state.chestProgress===4){void $('bigChest').offsetWidth;$('bigChest').classList.add('opening');}
  }
  function updateShop(){updateWallet();}

  /* VK Mini Apps: all SDK calls fail safely in a regular browser or GitHub Pages. */
  function pauseForVK(){
    vkViewPaused=true;
    finishSwipe(false);
    suspendAllAudio();
  }
  function resumeForVK(){
    vkViewPaused=false;
    resumeAllAudio();
  }
  function adBegin(){adOpen=true;suspendAllAudio();}
  function adFinish(){adOpen=false;resumeAllAudio();}

  async function syncBanner(){
    // Reserve ad space only after VK confirms that a banner is visible.
    $('app').classList.add('ads-free');
    if(!vk)return;
    if(state.noAds){
      try{await vk.send('VKWebAppHideBannerAd');}catch{}
      return;
    }
    try{
      const available=await vk.send('VKWebAppCheckBannerAd');
      if(available?.result!==true)return;
      let response;
      try{
        response=await vk.send('VKWebAppShowBannerAd', {banner_location:'bottom',layout_type:'resize'});
      }catch{
        response=await vk.send('VKWebAppShowBannerAd', {banner_location:'bottom'});
      }
      if(response?.result===true)$('app').classList.remove('ads-free');
    }catch{
      // The host, placement, advertising inventory or ad-blocker may reject it.
    }
  }

  function launchedInsideVK(bridge){
    try{
      const params=new URLSearchParams(location.search);
      if(params.has('vk_app_id') || params.has('vk_platform'))return true;
      if(/^https:\/\/(?:[a-z0-9-]+\.)?(?:vk\.com|vk\.ru|vkontakte\.ru)(?:\/|$)/i.test(document.referrer))return true;
      return Boolean(bridge.isWebView?.() || bridge.isEmbedded?.());
    }catch{return false;}
  }
  const VKBridgeAdapter = {
    async init(){
      if(vk||vkInitializing)return;
      const bridge=window.vkBridge;
      if(!bridge || typeof bridge.send!=='function'||!launchedInsideVK(bridge))return;
      vkInitializing=true;
      try{
        // Initialize VK Bridge directly in this module.
        await bridge.send('VKWebAppInit');
        vk=bridge;
        // Some VK clients dispatch native lifecycle events without window blur.
        try{
          bridge.subscribe(event=>{
            const type=event?.detail?.type;
            if(type==='VKWebAppViewHide')pauseForVK();
            if(type==='VKWebAppViewRestore'){
              resumeForVK();
              if(!cloudReady)initializeCloudSave();
              else if(cloudDirty){cloudSavingAllowed=true;scheduleCloudSave();}
            }
          });
        }catch{}
        await initializeCloudSave();
        await syncBanner();
      }catch{
        vk=null;cloudReady=false;cloudSavingAllowed=false;
      }finally{
        vkInitializing=false;
      }
    }
  };

  // No payment backend is configured: never grant paid items from a client-only site.
  function purchase(_id){
    toast('Покупки пока не доступны во ВКонтакте. Скоро!');
  }

  async function rewarded(onRewarded){
    if(!vk){
      toast('Видео с наградой доступно только во ВКонтакте');
      return false;
    }
    if(adOpen)return false;
    adBegin();
    try{
      const available=await vk.send('VKWebAppCheckNativeAds',{ad_format:'reward'});
      if(available?.result!==true){
        toast('Пока нет доступного видео. Попробуй позже');
        return false;
      }
      const result=await vk.send('VKWebAppShowNativeAds',{ad_format:'reward'});
      // A completed, successful VK ad is the sole condition for the reward.
      if(result?.result!==true){
        toast('Награда за видео не получена');
        return false;
      }
      try{onRewarded();}
      catch{toast('Не удалось начислить награду');return false;}
      return true;
    }catch{
      toast('Реклама сейчас недоступна во ВКонтакте');
      return false;
    }finally{
      adFinish();
    }
  }

  async function showInterstitial(continuation=()=>{}){
    if(state.noAds||!vk||adOpen){continuation();return;}
    adBegin();
    try{
      const available=await vk.send('VKWebAppCheckNativeAds',{ad_format:'interstitial'});
      if(available?.result===true){
        await vk.send('VKWebAppShowNativeAds',{ad_format:'interstitial'});
      }
    }catch{
      // Unavailable fullscreen ads must never block the next level.
    }finally{
      adFinish();
      continuation();
    }
  }

  function doubleVictoryReward(){
    const id=current.id,extra=pendingWinReward;
    if(screen!=='win'||!pendingWinFirst||state.doubledRewards.includes(id)||adOpen)return;
    rewarded(()=>{
      if(state.doubledRewards.includes(id))return;
      state.doubledRewards.push(id);
      state.coins+=extra;
      persist();spawnCoins(18);sound('win');
      $('doubleBtn').disabled=true;
      $('doubleBtn').textContent='✓ Дополнительные +'+extra+' монет получены';
      $('victoryCoins').textContent='+'+(extra*2);
      toast('Награда удвоена! +'+extra+' монет');
    });
  }

  // VK network leaderboards require a separately configured API/backend.
  function setScore(){ /* Score has already been persisted locally. */ }
  function refreshLeaderboard(){
    updateWallet();
    const root=$('leaderboardRows');root.replaceChildren();
    const own=document.createElement('div');own.className='leaderboard-row';
    const rank=document.createElement('span');rank.textContent='🏅';
    const label=document.createElement('span');label.textContent='Мой рекорд';
    const score=document.createElement('small');score.textContent=state.score.toLocaleString('ru-RU')+' ✦';
    own.append(rank,label,score);root.appendChild(own);
    const note=document.createElement('p');
    const cloudActive=Boolean(vk && cloudReady);
    note.textContent=cloudActive
      ? 'Твой личный рекорд и прогресс надёжно сохраняются в облаке.'
      : 'Прогресс сохранён на этом устройстве.';
    $('cloudSaveCaption').textContent=cloudActive
      ? 'Достижения и рекорды синхронизируются через облако'
      : 'Локальный прогресс · облачная синхронизация профиля';
    root.appendChild(note);
  }

  /* Original synthesized audio using Web Audio API. No audio downloads. */
  /* Lightweight original ambient soundtrack. Notes use only native oscillators. */
  function renderAudioButtons(){
    $('musicBtn').textContent=state.musicMuted?'🎵̸':'🎵';
    $('soundBtn').textContent=state.muted?'🔇':'🔊';
    $('musicBtn').setAttribute('aria-pressed',String(!state.musicMuted));
    $('soundBtn').setAttribute('aria-pressed',String(!state.muted));
    $('musicBtn').classList.toggle('audio-off',state.musicMuted);
    $('soundBtn').classList.toggle('audio-off',state.muted);
  }
  function unlockAudio(){
    if(audio.unlocked)return;
    try{
      audio.context ||= new (window.AudioContext||window.webkitAudioContext)();
      audio.unlocked=true;
      if(!document.hidden && document.hasFocus() && !adOpen){
        audio.blocked=false;
        if(audio.context.state==='suspended')audio.context.resume().catch(()=>{});
        startAmbient();
      }
    }catch{audio.unlocked=false;}
  }
  function suspendAllAudio(){
    audio.blocked=true;
    try{if(audio.context?.state==='running')audio.context.suspend().catch(()=>{});}catch{}
  }
  function resumeAllAudio(){
    if(!audio.unlocked||document.hidden||!document.hasFocus()||adOpen||vkViewPaused)return;
    audio.blocked=false;
    try{if(audio.context?.state==='suspended')audio.context.resume().catch(()=>{});}catch{}
    startAmbient();
  }
  /* Independent generative harmonic language for each of the fifteen worlds.
   * Each chapter uses a distinct tonic, mode, progression and pulse. Smooth
   * eight-beat crossfades preserve the previous theme while the new one begins.
   */
  const AMBIENT_THEMES=[
    {root:48,mode:[0,2,4,7,9],chords:[0,5,9,7],tempo:700,shape:'harp'},   // forest: C major pentatonic
    {root:50,mode:[0,2,4,7,9],chords:[0,7,5,9],tempo:750,shape:'piano'},  // alpine lake: D major pentatonic
    {root:45,mode:[0,2,3,7,8],chords:[0,8,5,7],tempo:760,shape:'harp'},   // castle: A harmonic twilight
    {root:50,mode:[0,2,3,7,9],chords:[0,5,7,2],tempo:640,shape:'harp'},   // sakura: east Asian pentatonic
    {root:52,mode:[0,1,5,7,8],chords:[0,8,5,1],tempo:780,shape:'piano'},  // desert: warm Hijaz-like
    {root:47,mode:[0,3,5,7,10],chords:[0,10,7,5],tempo:920,shape:'piano'},// northern lights: dark suspended
    {root:53,mode:[0,2,4,7,9],chords:[0,7,9,5],tempo:660,shape:'harp'},   // tropical: F major pentatonic
    {root:55,mode:[0,2,5,7,9],chords:[0,5,2,7],tempo:810,shape:'harp'},   // Greece: G suspended / lyre
    {root:51,mode:[0,2,3,7,8],chords:[0,7,3,8],tempo:610,shape:'piano'},  // Tokyo: Eb Japanese pentatonic
    {root:49,mode:[0,2,4,7,11],chords:[0,5,9,7],tempo:740,shape:'harp'},  // lavender: C# lydian light
    {root:54,mode:[0,2,5,7,10],chords:[0,5,10,7],tempo:680,shape:'harp'}, // waterfall: F# modal
    {root:52,mode:[0,2,4,7,9],chords:[0,9,5,7],tempo:710,shape:'piano'},  // emerald valley: E warm pastoral
    {root:48,mode:[0,2,3,7,10],chords:[0,5,10,7],tempo:840,shape:'piano'},// autumn: C minor melancholy
    {root:46,mode:[0,3,5,8,10],chords:[0,8,5,10],tempo:950,shape:'harp'}, // moon bay: Bb blue-night
    {root:57,mode:[0,2,4,7,11],chords:[0,7,9,5],tempo:900,shape:'piano'} // sky garden: A crystalline
  ];
  function setAmbientChapter(chapter){
    chapter=Math.max(1,Math.min(15,chapter));
    if(audio.chapter===chapter)return;
    audio.previousChapter=audio.chapter;
    audio.chapter=chapter;
    audio.fadeSteps=8;
    audio.step=0;
    // Re-schedule with the tempo of the new environment.
    if(audio.ambientTimer){clearInterval(audio.ambientTimer);audio.ambientTimer=null;startAmbient();}
  }
  function ambientVoice(f,t,delay=0,duration=1.65,kind='harp',volume=1){
    const ctx=audio.context;
    if(!ctx||audio.blocked||state.musicMuted||volume<=0)return;
    const start=t+delay;
    try{
      const osc=ctx.createOscillator(),gain=ctx.createGain(),filter=ctx.createBiquadFilter();
      const harmonics=ctx.createOscillator(),oGain=ctx.createGain();
      osc.type=kind==='piano'?'sine':'triangle';osc.frequency.setValueAtTime(f,start);
      harmonics.type='sine';harmonics.frequency.setValueAtTime(f*2.002,start);
      filter.type='lowpass';filter.frequency.setValueAtTime(kind==='piano'?1350:2100,start);
      gain.gain.setValueAtTime(.00001,start);
      gain.gain.exponentialRampToValueAtTime((kind==='piano'?.023:.027)*volume,start+.035);
      gain.gain.exponentialRampToValueAtTime(.0075*volume,start+.28);
      gain.gain.exponentialRampToValueAtTime(.00001,start+duration);
      oGain.gain.value=kind==='piano'?.13:.08;
      osc.connect(filter);filter.connect(gain);harmonics.connect(oGain);oGain.connect(gain);gain.connect(ctx.destination);
      osc.start(start);harmonics.start(start);
      osc.stop(start+duration+.04);harmonics.stop(start+duration+.04);
    }catch{}
  }
  const midiHz=n=>440*Math.pow(2,(n-69)/12);
  function playTheme(theme,step,t,weight){
    if(weight<.001)return;
    const shift=theme.chords[Math.floor(step/8)%theme.chords.length];
    const degrees=theme.mode;
    const melodic=degrees[(step+(step>>3))%degrees.length];
    const bass=theme.root+shift;
    ambientVoice(midiHz(bass+12+melodic),t,0,2.1,theme.shape,weight);
    if(step%2===0)ambientVoice(midiHz(bass-12),t,.025,3.1,'piano',weight*.92);
    if(step%8===4)ambientVoice(midiHz(bass+19),t,.08,3.5,'piano',weight*.36);
    if(step%8===6)ambientVoice(midiHz(bass+24+degrees[2]),t,.20,2.6,'harp',weight*.48);
  }
  function startAmbient(){
    if(audio.ambientTimer||!audio.unlocked)return;
    const tick=()=>{
      if(!audio.context||audio.blocked||state.musicMuted||document.hidden||adOpen||!document.hasFocus())return;
      const step=audio.step++,t=audio.context.currentTime+.035;
      const incoming=AMBIENT_THEMES[audio.chapter-1];
      if(audio.fadeSteps>0 && audio.previousChapter){
        const newMix=(9-audio.fadeSteps)/8;
        playTheme(AMBIENT_THEMES[audio.previousChapter-1],step,t,1-newMix);
        playTheme(incoming,step,t,newMix);
        audio.fadeSteps--;
        if(!audio.fadeSteps)audio.previousChapter=0;
      }else playTheme(incoming,step,t,1);
    };
    tick();
    audio.ambientTimer=setInterval(tick,AMBIENT_THEMES[audio.chapter-1].tempo);
  }
  function audioContext(){
    if(!audio.unlocked||audio.blocked||state.muted||adOpen)return null;
    try{
      if(audio.context?.state==='suspended')audio.context.resume().catch(()=>{});
      return audio.context;
    }catch{return null;}
  }
  function tone(frequency,when,duration=0.12,type='sine',volume=.10){
    const ctx=audioContext();if(!ctx)return;
    const osc=ctx.createOscillator(),gain=ctx.createGain(),filter=ctx.createBiquadFilter();
    filter.type='lowpass';filter.frequency.value=2700;
    osc.type=type;osc.frequency.setValueAtTime(frequency,when);
    gain.gain.setValueAtTime(.0001,when);
    gain.gain.exponentialRampToValueAtTime(volume,when+.008);
    gain.gain.exponentialRampToValueAtTime(.0001,when+duration);
    osc.connect(filter);filter.connect(gain);gain.connect(ctx.destination);
    osc.start(when);osc.stop(when+duration+.015);
  }
  function sound(name){
    const ctx=audioContext();if(!ctx)return;
    const t=ctx.currentTime+.012;
    const note=(f,d=.14,at=0,shape='sine',vol=.09)=>tone(f,t+at,d,shape,vol);
    switch(name){
      case 'select':note(660,.08,0,'triangle',.045);break;
      case 'soft':note(430,.07,0,'sine',.035);break;
      case 'shuffle':note(430,.13,0,'triangle');note(600,.13,.07,'triangle');break;
      case 'reveal':note(523,.26,0,'sine');note(784,.30,.09,'sine',.05);break;
      case 'wrong':note(224,.13,0,'triangle',.055);note(196,.18,.10,'triangle',.04);break;
      case 'bonus':note(587,.17,0,'sine');note(880,.23,.08,'sine');break;
      case 'success':
        [523,659,784,1046].forEach((f,i)=>note(f,.32,i*.083,'triangle',.07));break;
      case 'win':
        [392,523,659,784,1046,1318].forEach((f,i)=>note(f,.42,i*.13,'sine',.08));
        [392,587,784].forEach((f,i)=>note(f,.6,.25+i*.14,'triangle',.032));break;
      case 'spin':
        for(let i=0;i<11;i++)note(330+i*42,.09,i*.09,'sine',.037);break;
    }
  }

  /* Fifteen multi-layered procedural worlds (all scenes drawn offline). */
  function setChapter(chapter){
    chapter=Math.max(1,Math.min(15,chapter));
    const root=$('app');
    if(root.dataset.chapter===String(chapter)&&sceneW)return;
    // Freeze the outgoing panorama over the new picture for a graceful crossfade.
    const original=$('scenery');
    const previous=document.querySelector('.scenery-fade');previous?.remove();
    if(sceneW && original.width && !reducedMotion){
      const clone=document.createElement('canvas');
      clone.className='scenery-fade';clone.width=original.width;clone.height=original.height;
      try{clone.getContext('2d').drawImage(original,0,0);}catch{}
      original.insertAdjacentElement('afterend',clone);
      requestAnimationFrame(()=>requestAnimationFrame(()=>clone.classList.add('fading')));
      setTimeout(()=>clone.remove(),900);
    }
    setAmbientChapter(chapter);
    root.dataset.chapter=String(chapter);
    for(let i=1;i<=15;i++)root.classList.toggle('chapter-'+i,i===chapter);
    drawScenery();
  }
  const colorPalettes=[
    {sky:['#1d6f8e','#69b3a5','#e1d99a']},
    {sky:['#285c91','#71b4cc','#f5d8a4']},
    {sky:['#403b7f','#ba7093','#ffb36c']},
    {sky:['#5e7fad','#f5a3bc','#ffe6d5']},
    {sky:['#503f80','#e7a45c','#f9df95']},
    {sky:['#07182e','#204f6f','#45857f']},
    {sky:['#338aa2','#74d6c5','#f9dfaf']},
    {sky:['#326baf','#a8d2ee','#f9e8c6']},
    {sky:['#10142e','#43225d','#ee6691']},
    {sky:['#5682ac','#caa7c5','#f8dfb4']},
    {sky:['#336a96','#81c6cc','#d5f4d8']},
    {sky:['#185d65','#4b9b77','#b4dba2']},
    {sky:['#557eaa','#edbc85','#f9dfa5']},
    {sky:['#080f30','#1f386b','#628cb4']},
    {sky:['#4d9db6','#9acfd4','#fdf0d1']}
  ];
  const rng=(seed)=>{let n=seed|0;return()=>{n^=n<<13;n^=n>>>17;n^=n<<5;return (n>>>0)/4294967296;};};
  function skyGradient(ctx,w,h,colors){const grad=ctx.createLinearGradient(0,0,0,h);grad.addColorStop(0,colors[0]);grad.addColorStop(.43,colors[1]);grad.addColorStop(1,colors[2]);ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);}
  function radial(ctx,x,y,r,inner,outer){const grad=ctx.createRadialGradient(x,y,0,x,y,r);grad.addColorStop(0,inner);grad.addColorStop(1,outer);return grad;}
  function ridge(ctx,w,h,base,color,seed,amount=.1){
    const random=rng(seed);ctx.beginPath();ctx.moveTo(0,h);ctx.lineTo(0,base);
    let value=base;
    for(let x=0;x<=w+25;x+=25){value=Math.max(base-h*amount,Math.min(base+h*amount,value+(random()-.5)*h*.075));ctx.lineTo(x,value);}
    ctx.lineTo(w,h);ctx.closePath();ctx.fillStyle=color;ctx.fill();
  }
  function pine(ctx,x,y,height,color){
    ctx.fillStyle=color;const width=height*.23;
    ctx.fillRect(x-height*.028,y-height*.14,height*.056,height*.17);
    for(let tier=0;tier<3;tier++){
      const yy=y-height*(.95-tier*.26),wid=width*(.63+tier*.25);
      ctx.beginPath();ctx.moveTo(x,yy);ctx.lineTo(x+wid,yy+height*.43);ctx.lineTo(x-wid,yy+height*.43);ctx.closePath();ctx.fill();
    }
  }
  function forest(ctx,w,h){
    const rand=rng(9320);
    const sunx=w*.76,suny=h*.19;
    ctx.fillStyle=radial(ctx,sunx,suny,w*.54,'#fffaacdb','#fff8ba00');ctx.fillRect(0,0,w,h);
    ctx.save();ctx.translate(sunx,suny);
    for(let i=0;i<23;i++){
      const a=(i/23)*Math.PI*2,r=w*1.8;
      ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r);ctx.lineTo(Math.cos(a+.036)*r,Math.sin(a+.036)*r);
      ctx.closePath();ctx.fillStyle='#fff5bc0b';ctx.fill();
    }ctx.restore();
    ctx.fillStyle=radial(ctx,sunx,suny,w*.12,'#fffadfd9','#ffedac00');ctx.fillRect(0,0,w,h);
    ridge(ctx,w,h,h*.48,'#51999a82',433,.055);
    ridge(ctx,w,h,h*.57,'#306b7b99',322,.06);
    for(let i=0;i<68;i++){
      const x=rand()*w,y=h*(.51+rand()*.18),height=h*(.13+rand()*.23);
      pine(ctx,x,y,height,i%3===0?'#204e6395':'#386b6888');
    }
    ridge(ctx,w,h,h*.72,'#315b66',73,.035);
    // A warm curved forest path connecting the bottom of the screen to the far meadow.
    const path=ctx.createLinearGradient(0,h*.65,0,h);path.addColorStop(0,'#ddd1a552');path.addColorStop(1,'#caa673a8');
    ctx.fillStyle=path;ctx.beginPath();ctx.moveTo(w*.5,h*.68);ctx.bezierCurveTo(w*.29,h*.80,w*.64,h*.86,w*.31,h);ctx.lineTo(w*.78,h);ctx.bezierCurveTo(w*.76,h*.89,w*.60,h*.82,w*.53,h*.68);ctx.closePath();ctx.fill();
    for(let side of [-1,1]){
      ctx.save();ctx.translate(side===-1?0:w,0);ctx.scale(side,1);
      const random=rng(side===-1?745:985);
      for(let j=0;j<7;j++){
        const x=20+j*32,y=h*(.80+random()*.21);
        const height=h*(.37+random()*.2);
        ctx.strokeStyle=j<3?'#244644':'#2d5950';ctx.lineWidth=13+j*2;ctx.lineCap='round';
        ctx.beginPath();ctx.moveTo(x,y);ctx.bezierCurveTo(x+7,y-height*.33,x+15,y-height*.62,x+7,y-height);ctx.stroke();
        ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(x+10,y-height*.6);ctx.lineTo(x+65,y-height*.76);ctx.stroke();
        for(let k=0;k<9;k++){
          const leafx=x+(random()-.32)*110,leafy=y-height*(.60+random()*.46);
          ctx.fillStyle=['#2f6658','#468b65','#6b9b6b','#264e56'][k%4];
          ctx.beginPath();ctx.ellipse(leafx,leafy,14+random()*18,9+random()*15,random()*2,0,Math.PI*2);ctx.fill();
        }
      }ctx.restore();
    }
    for(let i=0;i<110;i++){
      const x=rand()*w,y=h*(.69+rand()*.32);
      ctx.fillStyle=['#ffeead','#eac4ce','#f9fbba','#a2cc86'][i%4];
      ctx.beginPath();ctx.arc(x,y,rand()*2.5+.6,0,Math.PI*2);ctx.fill();
    }
    ctx.fillStyle=radial(ctx,w*.50,h*.60,w*.44,'#e6f3d92c','#eaf3de00');ctx.fillRect(0,h*.4,w,h*.5);
  }
  function alpine(ctx,w,h){
    const rand=rng(913);
    const sunx=w*.73,suny=h*.20;
    ctx.fillStyle=radial(ctx,sunx,suny,w*.47,'#fff2d8b9','#fff9bd00');ctx.fillRect(0,0,w,h);
    for(let depth=0;depth<3;depth++){
      const base=h*(.52+depth*.056);
      ctx.fillStyle=['#b2b9c4','#709db0','#427a90'][depth];
      ctx.beginPath();ctx.moveTo(0,base);
      for(let x=-w*.35;x<w*1.3;x+=w*.20){
        const peak=base-h*(.22+rand()*.19)*(1-depth*.12);
        ctx.lineTo(x+w*.075,peak);ctx.lineTo(x+w*.22,base);
      }
      ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.closePath();ctx.fill();
      if(depth<2){
        for(let x=0;x<w;x+=w*.2){
          ctx.fillStyle='#f4f4eb91';ctx.beginPath();ctx.moveTo(x+w*.04,base-h*.14);ctx.lineTo(x+w*.077,base-h*.205);ctx.lineTo(x+w*.13,base-h*.15);ctx.lineTo(x+w*.11,base-h*.156);ctx.lineTo(x+w*.085,base-h*.16);ctx.closePath();ctx.fill();
        }
      }
    }
    const y=h*.63;
    const lake=ctx.createLinearGradient(0,y,0,h);lake.addColorStop(0,'#8fced0');lake.addColorStop(.4,'#407c92');lake.addColorStop(1,'#234d6b');
    ctx.fillStyle=lake;ctx.fillRect(0,y,w,h-y);
    ctx.fillStyle=radial(ctx,sunx,h*.70,w*.25,'#ffe8bc88','#fffbb700');ctx.fillRect(0,y,w,h-y);
    for(let i=0;i<95;i++){
      const x=rand()*w,yy=y+rand()*(h-y);
      const len=(8+rand()*38)*(1+(yy-y)/(h-y));
      ctx.strokeStyle=i%5?'#b0e0d329':'#ffeecb4a';ctx.lineWidth=rand()*2+.6;
      ctx.beginPath();ctx.moveTo(x,yy);ctx.lineTo(x+len,yy);ctx.stroke();
    }
    ridge(ctx,w,h,h*.87,'#2f626b',281,.022);
    for(let i=0;i<38;i++){
      const left=i<19;
      const x=left?rand()*w*.24:w*(.78+rand()*.24);
      pine(ctx,x,h*(.85+rand()*.2),h*(.13+rand()*.22),i%2?'#1f4b5d':'#2a585c');
    }
    for(let i=0;i<35;i++){
      const x=rand()*w,yy=h*(.94+rand()*.1);
      ctx.fillStyle='#b4b59f';ctx.beginPath();ctx.ellipse(x,yy,rand()*23+6,rand()*7+3,0,0,Math.PI*2);ctx.fill();
    }
  }
  function drawTower(ctx,x,y,width,height){
    ctx.fillStyle='#303453';ctx.fillRect(x,y-height,width,height);
    ctx.fillStyle='#202d49';ctx.fillRect(x-5,y-height,width+10,11);
    for(let i=0;i<4;i++)ctx.fillRect(x-5+(i*(width+6)/3),y-height-12,7,14);
    const g=ctx.createLinearGradient(0,y-height,0,y);g.addColorStop(0,'#ffe1ad');g.addColorStop(1,'#c47a4d');
    ctx.fillStyle=g;
    for(let i=0;i<3;i++){
      const wy=y-height+25+i*31;if(wy>y-10)break;
      ctx.beginPath();ctx.roundRect(x+width*.42,wy,Math.max(5,width*.17),14,[6,6,2,2]);ctx.fill();
    }
  }
  function castle(ctx,w,h){
    const rand=rng(272);
    const sunx=w*.72,suny=h*.28;
    ctx.fillStyle=radial(ctx,sunx,suny,w*.45,'#ffe6aabe','#fff0a800');ctx.fillRect(0,0,w,h);
    ridge(ctx,w,h,h*.56,'#7663857a',17,.10);
    ridge(ctx,w,h,h*.63,'#554c7899',35,.07);
    ridge(ctx,w,h,h*.71,'#424366',33,.04);
    const cx=w*.52,cy=h*.68,scale=Math.max(.73,Math.min(1.5,w/550));
    ctx.save();ctx.translate(cx,cy);ctx.scale(scale,scale);
    ctx.fillStyle='#333653';ctx.fillRect(-111,-92,222,106);
    drawTower(ctx,-130,17,48,174);
    drawTower(ctx,72,17,48,174);
    drawTower(ctx,-63,-17,55,194);
    drawTower(ctx,15,-17,55,194);
    drawTower(ctx,-17,-35,34,238);
    ctx.fillStyle='#1e2849';ctx.beginPath();ctx.moveTo(-21,-274);ctx.lineTo(0,-313);ctx.lineTo(21,-274);ctx.closePath();ctx.fill();
    ctx.strokeStyle='#ddd19b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,-313);ctx.lineTo(0,-345);ctx.stroke();
    ctx.fillStyle='#f6b47b';ctx.beginPath();ctx.moveTo(0,-345);ctx.lineTo(36,-335);ctx.lineTo(0,-323);ctx.closePath();ctx.fill();
    ctx.fillStyle='#f9ca88';ctx.beginPath();ctx.roundRect(-29,-46,58,61,[25,25,0,0]);ctx.fill();
    ctx.fillStyle='#6c5161';ctx.beginPath();ctx.roundRect(-20,-39,40,54,[20,20,0,0]);ctx.fill();
    ctx.restore();
    ridge(ctx,w,h,h*.79,'#29344f',777,.06);
    ctx.fillStyle='#d3a08357';ctx.beginPath();ctx.moveTo(cx-8,h*.76);ctx.bezierCurveTo(cx+44,h*.88,cx-31,h*.92,cx-95,h);ctx.lineTo(cx+121,h);ctx.bezierCurveTo(cx+65,h*.88,cx+22,h*.83,cx+8,h*.76);ctx.fill();
    for(let i=0;i<45;i++){
      let x=rand()*w,yy=h*(.75+rand()*.30);
      pine(ctx,x,yy,h*(.09+rand()*.19),i%3?'#242f49':'#353951');
    }
    for(let i=0;i<30;i++){
      const x=rand()*w,yy=h*(.72+rand()*.27);
      ctx.fillStyle='#ffe3a4a8';ctx.beginPath();ctx.arc(x,yy,rand()*2+.6,0,Math.PI*2);ctx.fill();
    }
  }
  function extraScene(ctx,w,h,ch){
    const random=rng(1720+ch*71);
    const orb=(x,y,r,color,glow)=>{
      ctx.fillStyle=radial(ctx,x,y,r*3,glow||'#fff7b944','#ffeb9b00');ctx.fillRect(0,0,w,h);
      ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
    };
    const bloom=(x,y,r,color)=>{
      ctx.fillStyle=color;
      for(let a=0;a<5;a++){
        const t=a*Math.PI*2/5;
        ctx.beginPath();ctx.ellipse(x+Math.cos(t)*r*.55,y+Math.sin(t)*r*.55,r*.56,r*.30,t,0,Math.PI*2);ctx.fill();
      }
      ctx.fillStyle='#ffeeba';ctx.beginPath();ctx.arc(x,y,r*.17,0,Math.PI*2);ctx.fill();
    };
    const conifer=(x,y,height,color)=>{pine(ctx,x,y,height,color);};
    const tree=(x,y,height,canopy,blossom=false)=>{
      ctx.strokeStyle='#473d4a';ctx.lineWidth=Math.max(5,height*.10);ctx.lineCap='round';
      ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x-height*.12,y-height*.58,x,y-height);ctx.stroke();
      for(let i=0;i<19;i++){
        const xx=x+(random()-.5)*height*.75, yy=y-height*(.69+random()*.43);
        ctx.fillStyle=canopy;ctx.beginPath();ctx.arc(xx,yy,height*(.07+random()*.06),0,Math.PI*2);ctx.fill();
        if(blossom && i%2===0)bloom(xx,yy,height*.055,'#ffd7ed');
      }
    };
    const water=(y,color,lum)=>{
      const g=ctx.createLinearGradient(0,y,0,h);g.addColorStop(0,color);g.addColorStop(1,lum||'#153a56');
      ctx.fillStyle=g;ctx.fillRect(0,y,w,h-y);
      for(let i=0;i<110;i++){
        ctx.strokeStyle=i%4===0?'#faf4d08a':'#a6eaff29';ctx.lineWidth=.7+random()*1.7;
        const yy=y+random()*(h-y),xx=random()*w;
        ctx.beginPath();ctx.moveTo(xx,yy);ctx.lineTo(xx+4+random()*28,yy);ctx.stroke();
      }
    };
    const mountainRows=(colors)=>{
      ridge(ctx,w,h,h*.50,colors[0],141,.11);
      ridge(ctx,w,h,h*.64,colors[1],181,.08);
      ridge(ctx,w,h,h*.76,colors[2],731,.055);
    };
    // 4 - Blooming sakura: Japanese hills, torii and close blossom trees.
    if(ch===4){
      orb(w*.77,h*.23,w*.095,'#fff2c9','#ffd8c45a');
      mountainRows(['#bb90bc8a','#a4759cb0','#765f91']);
      ridge(ctx,w,h,h*.83,'#49676c',209,.025);
      ctx.fillStyle='#a33961';const cx=w*.52,ty=h*.66;
      ctx.fillRect(cx-44,ty-93,12,95);ctx.fillRect(cx+32,ty-93,12,95);
      ctx.fillRect(cx-58,ty-104,116,13);ctx.fillRect(cx-50,ty-121,100,8);
      tree(w*.09,h*.93,h*.60,'#e694b3',true);tree(w*.93,h*.96,h*.68,'#efacc4',true);
      for(let i=0;i<80;i++)bloom(random()*w,random()*h,1.8+random()*3,'#ffdee9');
    }
    // 5 - Golden desert: rolling dunes and layered ancient pyramids.
    else if(ch===5){
      orb(w*.74,h*.27,w*.092,'#ffe1a0','#ffc37487');
      ridge(ctx,w,h,h*.63,'#dca06695',71,.035);
      ridge(ctx,w,h,h*.76,'#cc8e58',82,.075);
      for(const [x,y,s] of [[.40,.69,.23],[.66,.75,.15],[.80,.68,.12]]){
        ctx.fillStyle='#8d5c69';ctx.beginPath();ctx.moveTo(w*x,h*(y-s));ctx.lineTo(w*(x-s*.8),h*y);ctx.lineTo(w*(x+s*.8),h*y);ctx.closePath();ctx.fill();
        ctx.fillStyle='#e1b27a';ctx.beginPath();ctx.moveTo(w*x,h*(y-s));ctx.lineTo(w*(x-s*.8),h*y);ctx.lineTo(w*x,h*y);ctx.closePath();ctx.fill();
      }
      ridge(ctx,w,h,h*.89,'#c8915d',112,.045);
      for(let i=0;i<25;i++){
        let x=random()*w,y=h*(.83+random()*.18);ctx.fillStyle='#d8ab6c';ctx.fillRect(x,y,3,12+random()*8);
      }
    }
    // 6 - Aurora borealis: wispy colored light bands, dark pines, frozen lake.
    else if(ch===6){
      for(let i=0;i<85;i++){
        const x=random()*w,y=random()*h*.52;
        ctx.fillStyle='#f5fff1'+(i%3===0?'d0':'75');ctx.beginPath();ctx.arc(x,y,random()*1.6+.3,0,Math.PI*2);ctx.fill();
      }
      for(let band=0;band<4;band++){
        const g=ctx.createLinearGradient(0,h*.05,0,h*.57);
        g.addColorStop(0,'#5cffc500');g.addColorStop(.5,band%2?'#72dfe243':'#7cf39d6f');g.addColorStop(1,'#b67ce400');
        ctx.strokeStyle=g;ctx.lineWidth=w*.075;
        ctx.beginPath();ctx.moveTo(-w*.1,h*(.23+band*.10));
        ctx.bezierCurveTo(w*.30,h*(.07+band*.10),w*.48,h*(.40+band*.06),w*1.1,h*(.12+band*.04));ctx.stroke();
      }
      mountainRows(['#1b4067ad','#193551','#133242']);
      water(h*.76,'#286f7c','#092f47');
      for(let i=0;i<55;i++)conifer(random()*w,h*(.74+random()*.12),h*(.06+random()*.16),'#0d3444');
    }
    // 7 - Tropical island: teal sea, bright sand, palm silhouettes.
    else if(ch===7){
      orb(w*.79,h*.20,w*.073,'#fff3bc','#fff9a48b');
      ridge(ctx,w,h,h*.58,'#58b8a37a',51,.014);
      water(h*.56,'#33adba','#0d7c97');
      ctx.fillStyle='#f4d89d';ctx.beginPath();ctx.moveTo(-20,h*.79);ctx.bezierCurveTo(w*.30,h*.72,w*.57,h*.91,w+20,h*.75);ctx.lineTo(w+20,h+10);ctx.lineTo(-20,h+10);ctx.fill();
      for(const [x,dir] of [[w*.08,1],[w*.93,-1]]){
        ctx.strokeStyle='#70553f';ctx.lineWidth=15;ctx.beginPath();ctx.moveTo(x,h*.97);ctx.quadraticCurveTo(x+dir*w*.03,h*.62,x+dir*w*.15,h*.48);ctx.stroke();
        for(let i=0;i<7;i++){
          const a=i*Math.PI*2/7;ctx.strokeStyle='#2c9264';ctx.lineWidth=8;
          ctx.beginPath();ctx.moveTo(x+dir*w*.15,h*.48);ctx.quadraticCurveTo(x+dir*w*.15+Math.cos(a)*w*.13,h*(.35+Math.sin(a)*.09),x+dir*w*.15+Math.cos(a)*w*.21,h*(.43+Math.sin(a)*.10));ctx.stroke();
        }
      }
    }
    // 8 - Greece: marble temple in front of the azure Aegean coast.
    else if(ch===8){
      orb(w*.80,h*.19,w*.07,'#ffedc5','#ffe7ac77');
      mountainRows(['#9cc6d8a5','#8babb2','#658fa1']);
      water(h*.69,'#54aeb4','#296d83');
      const cx=w*.52,bx=cx-w*.30,by=h*.81,temW=w*.60,temH=Math.min(h*.31,225);
      ctx.fillStyle='#eee5ca';ctx.fillRect(bx,by-8,temW,15);ctx.fillRect(bx+9,by-25,temW-18,11);
      for(let i=0;i<6;i++){
        let x=bx+temW*(.10+i*.16);ctx.fillStyle='#f7efe0';ctx.fillRect(x-8,by-temH,16,temH-18);
        ctx.strokeStyle='#c5b9ab';ctx.lineWidth=2;ctx.strokeRect(x-8,by-temH,16,temH-18);
      }
      ctx.fillStyle='#ede4d4';ctx.beginPath();ctx.moveTo(bx-14,by-temH);ctx.lineTo(cx,by-temH-63);ctx.lineTo(bx+temW+14,by-temH);ctx.closePath();ctx.fill();
      ctx.fillStyle='#aaafa9';ctx.fillRect(bx-23,by,temW+46,15);
    }
    // 9 - Tokyo: dense dark skyline with pink and cyan neon windows.
    else if(ch===9){
      orb(w*.79,h*.19,w*.065,'#ffbaca','#f966cc70');
      ridge(ctx,w,h,h*.71,'#463c78',298,.013);
      for(let i=0,x=-10;x<w+30;i++){
        const bw=18+random()*38,bh=h*(.19+random()*.33),y=h*.76-bh;
        ctx.fillStyle=i%3===0?'#211f49':'#222a4b';ctx.fillRect(x,y,bw,bh);
        for(let xx=x+6;xx<x+bw-2;xx+=9)for(let yy=y+12;yy<y+bh-3;yy+=13){
          ctx.fillStyle=random()>.45?'#f28dc4':'#83e8f7';ctx.globalAlpha=.4+random()*.55;ctx.fillRect(xx,yy,3,5);
        }
        ctx.globalAlpha=1;
        x+=bw-1;
      }
      for(let i=0;i<11;i++){
        ctx.fillStyle=i%2?'#fc6c9f':'#79dff1';const x=random()*w,y=h*(.32+random()*.32);
        ctx.fillRect(x,y,6,24+random()*24);
      }
      ridge(ctx,w,h,h*.92,'#12172e',843,.018);
    }
    // 10 - Lavender: striped rows of violet plants disappearing to a horizon.
    else if(ch===10){
      orb(w*.77,h*.25,w*.09,'#fff2c8','#ffeea266');
      mountainRows(['#9f9bc79c','#9482af','#6d7994']);
      ctx.fillStyle='#688967';ctx.fillRect(0,h*.76,w,h*.24);
      const vx=w*.5,vy=h*.72;
      for(let i=-9;i<=9;i++){
        const xx=vx+i*w*.115;
        ctx.strokeStyle=i%2?'#9175b0':'#a48ac8';ctx.lineWidth=w*.047;ctx.beginPath();ctx.moveTo(vx+i*3,vy);ctx.lineTo(xx,h*1.12);ctx.stroke();
      }
      for(let i=0;i<70;i++){
        ctx.fillStyle=i%2?'#ceb0ef':'#896caf';ctx.beginPath();ctx.arc(random()*w,h*(.77+random()*.22),2+random()*4,0,Math.PI*2);ctx.fill();
      }
    }
    // 11 - Waterfall: chasm, deep green cliff, wide foaming cascade.
    else if(ch===11){
      mountainRows(['#5a9f9db1','#457e8c','#30676c']);
      ridge(ctx,w,h,h*.79,'#326b5a',781,.04);
      const cx=w*.49,cw=w*.28;
      const g=ctx.createLinearGradient(cx-cw/2,0,cx+cw/2,0);
      g.addColorStop(0,'#6aa9b7');g.addColorStop(.25,'#e2f8f6');g.addColorStop(.62,'#9ad5e8');g.addColorStop(1,'#4488a3');
      ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(cx-cw*.5,h*.50);ctx.lineTo(cx+cw*.5,h*.50);ctx.lineTo(cx+cw*.67,h);ctx.lineTo(cx-cw*.74,h);ctx.closePath();ctx.fill();
      for(let i=0;i<90;i++){
        ctx.fillStyle='#effffe'+(i%3===0?'84':'36');ctx.fillRect(cx+(random()-.5)*cw,h*(.52+random()*.48),1+random()*2,15+random()*24);
      }
      for(let i=0;i<35;i++)conifer(random()*w,h*(.74+random()*.25),h*(.09+random()*.17),'#1c5357');
      ctx.fillStyle='#cffffe52';ctx.fillRect(0,h*.91,w,h*.09);
    }
    // 12 - Emerald valley: forests, river bend, vibrant green foliage.
    else if(ch===12){
      orb(w*.76,h*.18,w*.085,'#f7efbd','#d6ffa35c');
      mountainRows(['#6cae9191','#4d9774','#237258']);
      ctx.fillStyle='#60c29b';ctx.beginPath();ctx.moveTo(w*.55,h*.64);ctx.bezierCurveTo(w*.25,h*.85,w*.77,h*.94,w*.44,h);ctx.lineTo(w*.72,h);ctx.bezierCurveTo(w*.91,h*.83,w*.52,h*.75,w*.63,h*.64);ctx.fill();
      for(let i=0;i<53;i++)conifer(random()*w,h*(.76+random()*.26),h*(.08+random()*.22),i%2?'#165749':'#286a55');
      for(let i=0;i<33;i++)bloom(random()*w,h*(.78+random()*.21),2+random()*3,'#f1f7bb');
    }
    // 13 - Autumn park: warm park path and orange-red maples.
    else if(ch===13){
      orb(w*.77,h*.21,w*.077,'#fff3c8','#ffde956a');
      mountainRows(['#9fa1ad7c','#b08c77','#805f5a']);
      ctx.fillStyle='#ac8366';ctx.beginPath();ctx.moveTo(w*.47,h*.69);ctx.bezierCurveTo(w*.21,h*.9,w*.39,h*.9,w*.23,h);ctx.lineTo(w*.78,h);ctx.bezierCurveTo(w*.64,h*.86,w*.71,h*.78,w*.54,h*.69);ctx.fill();
      for(const [x,yy,z] of [[w*.10,h*.94,.45],[w*.9,h*.98,.58],[w*.23,h*.81,.27],[w*.75,h*.85,.30]])tree(x,yy,h*z,z>.4?'#d77940':'#edaa5c');
      for(let i=0;i<65;i++){
        ctx.fillStyle=['#de783d','#f5bf5d','#a85537'][i%3];
        ctx.beginPath();ctx.ellipse(random()*w,h*(.52+random()*.47),2+random()*7,1+random()*3,random()*4,0,Math.PI*2);ctx.fill();
      }
    }
    // 14 - Moon bay: silver moonlight on an indigo sea and a sailboat.
    else if(ch===14){
      orb(w*.75,h*.19,w*.10,'#f5f2d6','#e6f4ff55');
      ridge(ctx,w,h,h*.60,'#405b8192',483,.065);
      ridge(ctx,w,h,h*.69,'#29496e',651,.05);
      water(h*.67,'#315e89','#112f58');
      const cx=w*.45,by=h*.83;
      ctx.fillStyle='#172545';ctx.beginPath();ctx.moveTo(cx-48,by);ctx.lineTo(cx+58,by);ctx.lineTo(cx+37,by+20);ctx.lineTo(cx-27,by+20);ctx.closePath();ctx.fill();
      ctx.strokeStyle='#cbd0bd';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(cx,by);ctx.lineTo(cx,by-117);ctx.stroke();
      ctx.fillStyle='#e4e7e4';ctx.beginPath();ctx.moveTo(cx-4,by-110);ctx.lineTo(cx-5,by-11);ctx.lineTo(cx-59,by-9);ctx.closePath();ctx.fill();
      for(let i=0;i<75;i++){
        let x=random()*w,y=random()*h*.45;
        ctx.fillStyle='#e6f8ff90';ctx.fillRect(x,y,1.3,1.3);
      }
    }
    // 15 - Sky garden: floating grassy islands with waterfalls and hanging plants.
    else if(ch===15){
      orb(w*.72,h*.18,w*.09,'#fff6d6','#fff4ba77');
      for(let i=0;i<24;i++){
        let x=random()*w,y=h*(.08+random()*.55);
        ctx.fillStyle='#ecfcf8b5';ctx.beginPath();ctx.ellipse(x,y,28+random()*70,7+random()*11,0,0,Math.PI*2);ctx.fill();
      }
      for(const [x,y,size] of [[w*.50,h*.63,1],[w*.10,h*.41,.55],[w*.89,h*.35,.50]]){
        const r=w*.26*size;
        ctx.fillStyle='#66918e';ctx.beginPath();ctx.ellipse(x,y+9,r,r*.25,0,0,Math.PI*2);ctx.fill();
        ctx.fillStyle='#48937b';ctx.beginPath();ctx.ellipse(x,y,r,r*.21,0,0,Math.PI*2);ctx.fill();
        ctx.strokeStyle='#94d4cc';ctx.lineWidth=Math.max(3,13*size);ctx.beginPath();ctx.moveTo(x+r*.25,y+10);ctx.lineTo(x+r*.30,y+65*size);ctx.stroke();
        for(let i=0;i<8;i++)bloom(x+(random()-.5)*r*1.6,y-r*.08,4*size+random()*4,'#fbe3dd');
        conifer(x-r*.38,y,r*.42,'#317b6c');
      }
      ridge(ctx,w,h,h*.94,'#4f8c7b',837,.03);
    }
    // A restrained foreground atmosphere adds depth behind the puzzle surface.
    ctx.fillStyle=radial(ctx,w*.50,h*.69,w*.53,'#eefbd012','#00000000');ctx.fillRect(0,0,w,h);
  }

  function drawScenery(){
    const canvas=$('scenery');if(!canvas)return;
    const w=Math.max(1,Math.ceil(canvas.getBoundingClientRect().width)),h=Math.max(1,Math.ceil(canvas.getBoundingClientRect().height));if(!w||!h)return;
    sceneW=w;sceneH=h;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
    const ctx=canvas.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);
    const chapter=Number($('app').dataset.chapter)||1;
    const colors=colorPalettes[chapter-1];skyGradient(ctx,w,h,colors.sky);
    if(chapter===1)forest(ctx,w,h);else if(chapter===2)alpine(ctx,w,h);else if(chapter===3)castle(ctx,w,h);else extraScene(ctx,w,h,chapter);
    const fade=ctx.createLinearGradient(0,0,0,h);fade.addColorStop(0,'#071d310d');fade.addColorStop(.6,'#13362b00');fade.addColorStop(1,'#133f5457');ctx.fillStyle=fade;ctx.fillRect(0,0,w,h);
  }

  /* Foreground particle engine: fireflies, confetti and coin flights. */
  function ensureParticlesSize(){
    const canvas=$('particles');const w=canvas.clientWidth,h=canvas.clientHeight;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
    canvas.getContext('2d').setTransform(dpr,0,0,dpr,0,0);
    if(!sparks.length){const random=rng(1031);for(let i=0;i<43;i++)sparks.push({x:random(),y:random(),r:.7+random()*2.1,phase:random()*6.28,speed:.2+random()*.8});}
  }
  function spawnConfetti(amount){
    if(reducedMotion)return;
    const w=window.innerWidth,h=window.innerHeight;
    for(let i=0;i<amount;i++)confetti.push({x:Math.random()*w,y:-Math.random()*h*.3,dx:(Math.random()-.5)*2.7,dy:1+Math.random()*3.2,rotate:Math.random()*7,spin:(Math.random()-.5)*.09,r:2+Math.random()*5,color:['#fff29f','#ffba7b','#d5ff85','#9ee7fa','#ffb9dc'][i%5],life:260});
  }
  function spawnCoins(count){
    if(reducedMotion)return;
    const origin=$('screen-win').classList.contains('active')?$('win-reward').getBoundingClientRect():$('wheelFrame').getBoundingClientRect();
    const target=$('coinsCount').getBoundingClientRect();
    for(let i=0;i<count;i++)coins.push({x:origin.x+origin.width/2,y:origin.y+origin.height/2,tx:target.x,ty:target.y,vx:(Math.random()-.5)*12,vy:-Math.random()*8-2,age:-i*2,life:70});
  }
  let lastFrame=0;
  function animationFrame(ts){
    requestAnimationFrame(animationFrame);
    if(document.hidden)return;
    if(reducedMotion && ts-lastFrame<80)return;
    if(ts-lastFrame<26)return;
    const elapsed=Math.min(3,(ts-lastFrame)/33||1);lastFrame=ts;
    const canvas=$('particles'),ctx=canvas.getContext('2d');
    if(!ctx)return;
    const dpr=Math.min(window.devicePixelRatio||1,2),w=canvas.width/dpr,h=canvas.height/dpr;
    ctx.clearRect(0,0,w,h);
    ctx.save();
    const sceneChapter=Number($('app').dataset.chapter)||1;
    for(const s of sparks){
      s.x+=(Math.sin(ts*.0003+s.phase)*.00012)*elapsed;
      s.y-=(s.speed*.000038)*elapsed;if(s.y<-.01)s.y=1.02;
      const a=.20+.55*(.5+.5*Math.sin(ts*.0018+s.phase));
      const palette=['255,245,160','211,250,233','255,215,167','255,197,229','250,213,157','119,255,200','185,252,223','246,239,190','255,132,227','225,196,255','202,248,247','194,255,160','255,198,122','177,218,255','236,255,235'];
      const glows=palette[sceneChapter-1]||palette[0];
      ctx.fillStyle='rgba('+glows+','+a+')';ctx.shadowBlur=11;ctx.shadowColor='rgb('+glows+')';
      ctx.beginPath();ctx.arc(s.x*w,s.y*h,s.r,0,Math.PI*2);ctx.fill();
      // Petals, drifting amber leaves and fine sand appear only in their worlds.
      if(sceneChapter===4||sceneChapter===13||sceneChapter===5){
        const size=sceneChapter===5?1.2:2.0+s.r*.8;
        const px=((s.x+Math.sin(ts*.00042+s.phase)*.04+1)%1)*w;
        const py=((s.y+ts*(sceneChapter===5?.000009:.000014)*s.speed)%1)*h;
        ctx.save();ctx.translate(px,py);ctx.rotate(ts*.00032+s.phase);
        ctx.shadowBlur=sceneChapter===5?0:3;
        ctx.fillStyle=sceneChapter===4?'#ffe0ebda':sceneChapter===13?'#eeba66cc':'#f9ce9c98';
        ctx.beginPath();ctx.ellipse(0,0,size,size*.52,0,0,Math.PI*2);ctx.fill();ctx.restore();
      }
    }
    ctx.shadowBlur=0;
    if(sceneChapter===6){
      // Slowly undulating aurora curtain; independent from the static panorama.
      ctx.save();ctx.globalCompositeOperation='screen';
      for(let band=0;band<3;band++){
        const gradient=ctx.createLinearGradient(0,h*.06,0,h*.51);
        gradient.addColorStop(0,'#67ffc200');gradient.addColorStop(.5,band%2?'#a4c7fa25':'#6cf3bb29');gradient.addColorStop(1,'#6cf3bb00');
        ctx.strokeStyle=gradient;ctx.lineWidth=Math.max(14,w*.035);
        ctx.beginPath();ctx.moveTo(-40,h*(.17+band*.06));
        ctx.bezierCurveTo(w*.31,h*(.07+band*.08)+Math.sin(ts*.0002+band)*22,w*.64,h*(.40+band*.03)+Math.cos(ts*.00024+band)*24,w+40,h*.19);
        ctx.stroke();
      }
      ctx.restore();
    }
    for(let i=confetti.length-1;i>=0;i--){
      const c=confetti[i];c.x+=c.dx*elapsed;c.y+=c.dy*elapsed;c.rotate+=c.spin*elapsed;c.life-=elapsed;
      ctx.save();ctx.translate(c.x,c.y);ctx.rotate(c.rotate);ctx.fillStyle=c.color;ctx.fillRect(-c.r,-c.r*.6,c.r*2,c.r*1.2);ctx.restore();
      if(c.y>h+40||c.life<=0)confetti.splice(i,1);
    }
    for(let i=coins.length-1;i>=0;i--){
      const coin=coins[i];coin.age+=elapsed;
      if(coin.age<0)continue;
      const t=Math.min(1,coin.age/coin.life);
      const x=(1-t)*(1-t)*coin.x+2*(1-t)*t*(coin.x+coin.vx*7)+t*t*coin.tx;
      const y=(1-t)*(1-t)*coin.y+2*(1-t)*t*(coin.y+coin.vy*11)+t*t*coin.ty;
      ctx.fillStyle='#ffcf57';ctx.strokeStyle='#fffaaf';ctx.lineWidth=2;
      ctx.beginPath();ctx.arc(x,y,7*(1-t*.35),0,Math.PI*2);ctx.fill();ctx.stroke();
      ctx.fillStyle='#fff3aa';ctx.font='12px Georgia';ctx.fillText('✦',x-5,y+4);
      if(t===1)coins.splice(i,1);
    }
    ctx.restore();
  }

  function bindUI(){
    document.querySelectorAll('[data-screen]').forEach(el=>el.addEventListener('click',()=>showScreen(el.dataset.screen)));
    $('backBtn').addEventListener('click',goBack);
    $('playBtn').addEventListener('click',()=>startLevel(Math.min(state.lastLevel,state.levelUnlocked)));
    $('nextBtn').addEventListener('click',()=>{
      const completedId=current.id;
      const navigate=()=>{
        if(completedId===150)showScreen('map');
        else startLevel(Math.min(150,completedId+1));
      };
      // Never put an interstitial into the first two levels or an active word swipe.
      if(completedId>=3 && completedId%3===0 && !state.noAds)showInterstitial(navigate);
      else navigate();
    });
    $('doubleBtn').addEventListener('click',doubleVictoryReward);
    $('soundBtn').addEventListener('click',()=>{
      state.muted=!state.muted;persist();renderAudioButtons();
      toast(state.muted?'Эффекты выключены':'Эффекты включены');
      if(!state.muted)sound('success');
    });
    $('musicBtn').addEventListener('click',()=>{
      state.musicMuted=!state.musicMuted;persist();renderAudioButtons();
      if(!state.musicMuted){unlockAudio();startAmbient();}
      toast(state.musicMuted?'Музыка выключена':'Музыка включена');
    });
    renderAudioButtons();
    // Web Audio starts only on a real human gesture, never on page load.
    document.addEventListener('pointerdown',unlockAudio,{once:true,capture:true});
    document.addEventListener('keydown',unlockAudio,{once:true,capture:true});
    $('shuffleBtn').addEventListener('click',shuffle);
    $('wheelCenter').addEventListener('click',e=>{e.stopPropagation();shuffle();});
    $('hintBtn').addEventListener('click',hint);
    $('targetBtn').addEventListener('click',toggleTarget);
    $('bonusBtn').addEventListener('click',()=>showScreen('chest'));
    $('chestBack').addEventListener('click',()=>showScreen('game'));
    $('spinBtn').addEventListener('click',spinDaily);
    $('shopAdCoins').addEventListener('click',()=>rewarded(()=>{addCoins(100);spawnCoins(12);toast('+100 монет за просмотр!');}));
    document.querySelectorAll('[data-product]').forEach(el=>el.addEventListener('click',()=>purchase(el.dataset.product)));
    const wheel=$('wheelFrame');
    wheel.addEventListener('pointerdown',beginSwipe);
    wheel.addEventListener('pointermove',moveSwipe);
    wheel.addEventListener('pointerup',e=>finishSwipe(true,e));
    wheel.addEventListener('pointercancel',e=>finishSwipe(false,e));
    window.addEventListener('pointerup',e=>{if(selection.active)finishSwipe(true,e);});
    window.addEventListener('blur',()=>{finishSwipe(false);suspendAllAudio();gameplay(false);});
    window.addEventListener('focus',()=>{resumeAllAudio();gameplay(screen==='game');});
    document.addEventListener('visibilitychange',()=>{
      if(document.hidden){finishSwipe(false);suspendAllAudio();gameplay(false);}
      else{resumeAllAudio();gameplay(screen==='game');}
    });
    document.addEventListener('contextmenu',e=>e.preventDefault());
    document.addEventListener('dragstart',e=>e.preventDefault());
    document.addEventListener('selectstart',e=>{if(e.target.closest('#app'))e.preventDefault();});
    document.addEventListener('wheel',e=>{if(e.ctrlKey)e.preventDefault();},{passive:false});
    document.addEventListener('gesturestart',e=>e.preventDefault(),{passive:false});
    window.addEventListener('resize',()=>{drawScenery();ensureParticlesSize();layoutWheel();resizeBoard();});
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape'&&screen!=='menu')goBack();
      if(e.key==='Backspace'&&screen==='game'&&selection.active){
        selection.indexes.pop();updateSelection();
      }
    });
  }
  function boot(){
    // Validation on startup: no malformed puzzle gets displayed.
    for(const level of LEVELS){
      const grid=new Map();
      for(const item of level.words){
        if(!item.word||!validWord(item.word))throw Error('Invalid word at level '+level.id);
        const available={};for(const c of level.letters)available[c]=(available[c]||0)+1;
        for(const c of item.word)if(--available[c]<0)throw Error('Wrong wheel letters, level '+level.id);
        for(let j=0;j<item.word.length;j++){
          const x=item.x+(item.direction==='right'?j:0),y=item.y+(item.direction==='down'?j:0);
          if(x<0||y<0||x>=level.cols||y>=level.rows)throw Error('Out of bounds '+level.id);
          const key=cellKey(x,y);
          if(grid.has(key)&&grid.get(key)!==item.word[j])throw Error('Crossing conflict '+level.id);
          grid.set(key,item.word[j]);
        }
      }
    }
    bindUI();
    updateWallet();
    $('app').classList.add('ads-free');
    current=LEVELS[state.lastLevel-1]||LEVELS[0];
    buildLetters();
    $('app').dataset.chapter='1';
    drawScenery();ensureParticlesSize();renderDaily();renderMap();
    requestAnimationFrame(animationFrame);
    VKBridgeAdapter.init();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();
