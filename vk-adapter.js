(() => {
  'use strict';

  const cleanText = str => str
    .replace(/на площадке Яндекс Игр/g, 'во ВКонтакте')
    .replace(/на Яндекс Играх/g, 'во ВКонтакте')
    .replace(/в Яндекс Играх/g, 'во ВКонтакте')
    .replace(/Яндекс Игр/g, 'ВКонтакте')
    .replace(/за Яны/gi, 'за голоса')
    .replace(/ЗА ЯНЫ/g, 'СКОРО');

  const replaceYandexStrings = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue && /Яндекс|Яны|ЯНЫ/i.test(node.nodeValue)) {
        node.nodeValue = cleanText(node.nodeValue);
      }
    }
  };

  window.addEventListener('DOMContentLoaded', () => {
    replaceYandexStrings();
    document.addEventListener('click', () => setTimeout(replaceYandexStrings, 30));
  });

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
