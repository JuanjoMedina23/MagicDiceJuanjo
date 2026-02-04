// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Agregar extensiones de assets para GLB y GLTF
config.resolver.assetExts.push('glb', 'gltf', 'bin');

// Asegurar que sourceExts no incluya las extensiones de assets
config.resolver.sourceExts = config.resolver.sourceExts.filter(
  ext => !['glb', 'gltf', 'bin'].includes(ext)
);

module.exports = withNativeWind(config, { input: './global.css' });