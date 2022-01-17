/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

const withTM = require("next-transpile-modules")([
  "@solana/wallet-adapter-base",
  "@solana/wallet-adapter-react",
]);

const plugins = [
  [
    withTM,
    {
      reactStrictMode: true,
    },
  ],
];

module.exports = withPlugins(plugins);
