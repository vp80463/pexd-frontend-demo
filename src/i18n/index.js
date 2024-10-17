import { createI18n } from 'vue-i18n';

import { ViyLangs } from 'viy-ui';
import { locales } from 'viy-menu';
import { merge } from 'lodash-es';

export const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'ja',
  legacy: false,
  missingWarn: false,
  fallbackWarn: false,
});

for (const language of ['ja', 'zh']) {
  i18n.global.mergeLocaleMessage(language, merge(ViyLangs[language], locales[language]));
  const message = await import(`@/i18n/locales/locale_i18n_${language}.json`);
  i18n.global.mergeLocaleMessage(language, message.default);
}

export default i18n;
