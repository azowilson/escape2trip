import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable or downgrade common warnings to reduce noise
      "@typescript-eslint/no-unused-vars": "warn", // Downgrade from error to warn
      "@typescript-eslint/no-explicit-any": "warn", // Allow 'any' type with warning
      "@typescript-eslint/ban-ts-comment": "warn", // Allow @ts-ignore with warning
      "prefer-const": "warn", // Downgrade from error to warn
      "no-console": "warn", // Allow console statements with warning
      "no-debugger": "warn", // Allow debugger statements with warning
      
      // React specific rules
      "react-hooks/exhaustive-deps": "warn", // Downgrade from error to warn
      "react/no-unescaped-entities": "warn", // Allow unescaped entities with warning
      "react/display-name": "warn", // Allow missing display names with warning
      
      // Next.js specific rules
      "@next/next/no-img-element": "warn", // Allow img elements with warning
      "@next/next/no-html-link-for-pages": "warn", // Allow html links with warning
      
      // Accessibility rules (downgrade to warnings)
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-has-content": "warn",
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
      
      // Import rules
      "import/no-unresolved": "warn", // Downgrade from error to warn
      "import/order": "warn", // Allow import order issues with warning
      
      // General rules
      "no-undef": "warn", // Downgrade from error to warn
      "no-unused-expressions": "warn", // Downgrade from error to warn
      "no-unreachable": "warn", // Downgrade from error to warn
      "no-constant-condition": "warn", // Downgrade from error to warn
      
      // TypeScript specific warnings
      "@typescript-eslint/no-non-null-assertion": "warn", // Allow non-null assertions with warning
      "@typescript-eslint/no-empty-function": "warn", // Allow empty functions with warning
      "@typescript-eslint/no-empty-interface": "warn", // Allow empty interfaces with warning
      "@typescript-eslint/no-inferrable-types": "warn", // Allow inferrable types with warning
      "@typescript-eslint/prefer-as-const": "warn", // Allow non-const assertions with warning
    },
  },
  {
    // Ignore specific files or patterns
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "dist/**",
      "build/**",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
    ],
  },
];

export default eslintConfig;
