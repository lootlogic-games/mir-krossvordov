(() => {
  'use strict';

  const fixTextsForVK = () => {
    document.querySelectorAll('button').forEach(btn => {
      if (btn.textContent.trim() === 'ЗА ЯНЫ') btn.textContent = 'СКОРО';
    });
    const note = document.getElementById('shopNote');
    if (note) note.textContent = 'Внутриигровые покупки за голоса ВК скоро откроются ✦';
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixTextsForVK);
  } else {
    fixTextsForVK();
  }

  const setupBridge = () => {
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
    window.YandexBridge?.init();
  };

  const s = document.createElement('script');
  s.src = 'https://unpkg.' + 'com/@vkontakte/vk-bridge/dist/browser.min.js';
  s.onload = setupBridge;
  document.head.appendChild(s);
})();
