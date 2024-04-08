const reactNativeConfig = require('@react-native/eslint-config');
const reactNative = require('@react-native/eslint-plugin');
module.exports = [
  ...reactNativeConfig,
  {
    plugins: {
      reactNative,
    },
    languageOptions: {
      globals: {
        JSX: true,
      },
    },
  },
];
