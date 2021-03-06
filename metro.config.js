/* eslint-disable prettier/prettier */
const { getDefaultConfig } = require("metro-config");
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()

  // here I extend the extensions needed for RN because I use JSX.
  // you don't need this if you use pure JS files
  const updatedSourceExts = [...sourceExts, "jsx", "js", "json", "ts", "tsx"]

  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      blacklistRE: blacklist([
        /node_modules\/.*\/node_modules\/react-native\/.*/,
      ]),
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...updatedSourceExts, "svg"],
      
    },
  }
})()