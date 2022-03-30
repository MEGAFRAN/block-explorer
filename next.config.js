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
    INFURA_ID: process.env.NEXT_PUBLIC_INFURA_ID,
    ALGORAND_API: process.env.NEXT_PUBLIC_ALGORAND_API,
    ALGORAND_ENDPOINT: process.env.NEXT_PUBLIC_ALGORAND_API_ENDPOINT
  }}

module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) { return nextConfig }

  return { ...nextConfig, basePath: '/block-explorer', assetPrefix: '/block-explorer' }
}