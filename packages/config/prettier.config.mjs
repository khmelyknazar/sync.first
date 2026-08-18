/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 90,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./apps/marketing/src/app/globals.css",
  tailwindFunctions: ["cn", "cva"],
};

export default config;
