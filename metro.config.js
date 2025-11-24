// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Reduce file watching to essential directories only
config.watchFolders = [__dirname];
config.resolver = {
  ...config.resolver,
  sourceExts: [...config.resolver.sourceExts, 'tsx', 'ts', 'jsx', 'js'],
  blockList: [
    // Exclude documentation and non-essential files
    /.*\.md$/,
    /.*\.txt$/,
    /.*\.log$/,
    /.*\.git$/,
  ],
};

// Reduce watcher overhead
config.server = {
  ...config.server,
  enhanceMiddleware: (middleware) => {
    return middleware;
  },
};

module.exports = config;


