import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Allow unescaped entities in JSX - common practice in content-heavy sites
      "react/no-unescaped-entities": "off",
      // Allow Math.random() in useMemo - intentionally memoized for client-side randomization
      "react-hooks/purity": "off",
      // Unused vars as warnings instead of errors
      "@typescript-eslint/no-unused-vars": ["warn", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
      }],
    },
  },
];

export default eslintConfig;
