// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config({
  ignores: ["**/dist/**", "**/node_modules/**", "**/*.cjs"],
}, {
  files: ["**/*.{ts,tsx}"],
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    pluginReactConfig,
    reactHooks.configs.recommended,
  ],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
    globals: {
      ...globals.browser,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: {
    "react-refresh": reactRefresh,
  },
  rules: {
    "react-refresh/only-export-components": "warn",
  },
}, storybook.configs["flat/recommended"]);
