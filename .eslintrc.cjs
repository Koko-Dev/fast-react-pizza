module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "react/jsx-uses-react": "error",
    "react/react-in-jsx-scope": "error",
    "react/prop-types": ["off"],
    "react/no-array-index-key": "warn",
    "quotes": ["warn", "single"],
    "indent": ["warn", 2],
    "linebreak-style": ["error", "unix"],
  },
}
