import nextConfig from "eslint-config-next";

const config = [
  {
    ignores: [".next/**", "node_modules/**"],
  },
  ...nextConfig,
];

export default config;
