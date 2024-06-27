// @ts-check
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const { i18n } = require('./next-i18next.config.js')

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
}

module.exports = withVanillaExtract(nextConfig)
