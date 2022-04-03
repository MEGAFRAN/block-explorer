const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
require('dotenv').config()

const nextConfig = {
  
  reactStrictMode: true,
      
  future: {
    webpack5: true,
  },

  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },

  env: {
    INFURA_ID: process.env.INFURA_ID,
    TERRA_URL: process.envTERRA_URL,
    TERRA_CHAIN_ID: process.env.TERRA_CHAIN_ID,
    ALGORAND_API: process.env.ALGORAND_API,
    ALGORAND_ENDPOINT: process.env.ALGORAND_API_ENDPOINT
  }}

module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) { return nextConfig }

  return { ...nextConfig, basePath: '/block-explorer', assetPrefix: '/block-explorer' }
}