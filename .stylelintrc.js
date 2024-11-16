module.exports = {
  fix: false,
  defaultSeverity: 'warning',
  extends: [
    'stylelint-config-ali',
    'stylelint-prettier/recommended',
    'stylelint-config-property-sort-order-smacss',
  ],
  plugins: ['stylelint-order', 'stylelint-selector-bem-pattern'],
  rules: {
    'plugin/selector-bem-pattern': {
      // 指定Preset Patterns，支持suit和bem两种（无默认值）
      preset: 'bem',
      // presetOptions: { namespace: '' },
      utilitySelectors: '^\\.util-[a-z]+$',
      ignoreSelectors: ['^\\.icon-'],
      ignoreCustomProperties: [],
      implicitComponents: true,
      severity: 'error',
    },
    'order/order': [
      [
        'dollar-variables',
        'at-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      {
        severity: 'warning',
        disableFix: true,
      },
    ],
  },
};
