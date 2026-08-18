import { FlatCompat } from "@eslint/eslintrc";
import { baseConfig } from "@axioma/config/eslint.base";

// `eslint-config-next` still ships as a legacy shareable config;
// FlatCompat bridges it into the flat-config world used everywhere
// else in the monorepo, so we get Next's routing/RSC-aware lint
// rules without abandoning the shared base.
const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
