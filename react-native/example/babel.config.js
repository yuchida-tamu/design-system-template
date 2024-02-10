var path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.ios.js', '.android.js', '.json', '.tsx', '.ts'],
          alias: {
            '@ui/base/dist': path.resolve(__dirname, '..', 'packages/ui/src'),
            '@ui/base': path.resolve(__dirname, '..', 'packages/ui/src'),
          },
        },
      ],
    ],
  };
};
