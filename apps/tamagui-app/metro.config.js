const { withNxMetro } = require('@nx/expo')
const { getDefaultConfig } = require('@expo/metro-config')
const { mergeConfig } = require('metro-config')
const { withTamagui } = require('@tamagui/metro-plugin')

const defaultConfig = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true
})

const { assetExts, sourceExts } = defaultConfig.resolver

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer')
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg']
  }
}

// Enable Tamagui and add nice web support with optimizing compiler + CSS extraction
// module.exports = withTamagui(defaultConfig, {
//   components: ['tamagui'],
//   config: './tamagui.config.ts',
//   outputCSS: './tamagui-web.css',
// });
const tamaguiConfig = withTamagui(defaultConfig, {
  components: ['tamagui'],
  config: './tamagui.config.ts',
  outputCSS: './tamagui-web.css'
})

module.exports = withNxMetro(
  mergeConfig(defaultConfig, tamaguiConfig, customConfig),
  {
    // Change this to true to see debugging info.
    // Useful if you have issues resolving modules
    debug: false,
    // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
    extensions: [],
    // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
    watchFolders: []
  }
)
