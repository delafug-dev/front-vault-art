module.exports = {
  extends: 'next/core-web-configs',
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off'
      },
    },
  ],
};