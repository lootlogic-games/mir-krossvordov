(() => {
  'use strict';

  const replaceYandexStrings = () => {
    document.querySelectorAll('.buy-btn').forEach(btn => {
      if (btn.textContent.includes('ЯНЫ')) btn.textContent = 'СКОРО';
    });
    const note = document.getElementById('shopNote');
    if (note && note.textContent.includes('Яндекс')) {
      note.textContent = 'Внутриигровые покупки за голоса ВК скоро откроются ✦';
    }
    const lb = document.getElementById('leaderboardRows');
    if (lb && lb.textContent.includes('Яндекс')) {
      lb.textContent = 'Твой личный рекорд сохраняется в игре ✦ Проходи уровни и ставь новые рекорды!';
    }
    for (const id of ['toast', 'gameFeedback']) {
      const el = document.getElementById(id);
      if (el && el.textContent.includes('Яндекс')) {
        el.textContent = el.textContent
          .replace('на площадке Яндекс Игр', 'во ВКонтакте')
          .replace('в Яндекс Играх', 'во ВКонтакте')
          .replace('Яндекс Игр', 'ВКонтакте');
      }
    }
    document.querySelectorAll('p, div, span, button').forEach(el => {
      if (el.children.length === 0 && el.textContent.includes('Яндекс')) {
        el.textContent = el.textContent
          .replace('на площадке Яндекс Игр', 'во ВКонтакте')
          .replace('в Яндекс Играх', 'во ВКонтакте')
          .replace('Яндекс Игр', 'ВКонтакте');
      }
    });
  };

  const startObserver = () => {
    replaceYandexStrings();
    const obs = new MutationObserver(replaceYandexStrings);
    obs.observe(document.body, { childList: true, subtree: true, characterData: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startObserver);
  } else {
    startObserver();
  }

  if (!window.vkBridge) return;

  window.vkBridge.send('VKWebAppInit').catch(() => {});
  window.vkBridge.send('VKWebAppShowBannerAd', { banner_location: 'bottom' }).catch(() => {});

  window.YaGames = {
    init: async () => ({
      environment: { i18n: { lang: 'ru' } },
      features: {
        LoadingAPI: { ready: () => {} },
        GameplayAPI: { start: () => {}, stop: () => {} }
      },
      on: () => {},
      getPlayer: async () => { throw new Error('VK local save'); },
      getPayments: async () => { throw new Error('VK payments'); },
      adv: {
        showBannerAdv: async () => {
          await window.vkBridge.send('VKWebAppShowBannerAd', { banner_location: 'bottom' });
        },
        hideBannerAdv: async () => {
          await window.vkBridge.send('VKWebAppHideBannerAd');
        },
        showRewardedVideo: ({ callbacks } = {}) => {
          callbacks?.onOpen?.();
          window.vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' })
            .then(res => {
              if (res && res.result) callbacks?.onRewarded?.();
              callbacks?.onClose?.();
            })
            .catch(() => {
              callbacks?.onError?.();
              callbacks?.onClose?.();
            });
        },
        showFullscreenAdv: ({ callbacks } = {}) => {
          callbacks?.onOpen?.();
          window.vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' })
            .then(() => callbacks?.onClose?.())
            .catch(() => callbacks?.onError?.());
        }
      }
    })
  };
})();
