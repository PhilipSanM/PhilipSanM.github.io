# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # PhilipSanM Portfolio

  Personal portfolio built with React, TypeScript, Vite, Less, and D3.

  ## Local Development

  ```bash
  npm ci
  npm run dev
  ```

  ## Production Build

  ```bash
  npm run build
  ```

  ## GitHub Pages Deploy

  This repository now includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

  To deploy correctly on GitHub Pages:

  1. Push this repository to the `main` branch.
  2. In GitHub, open `Settings` → `Pages`.
  3. Set `Source` to `GitHub Actions`.
  4. Push again, or run the `Deploy to GitHub Pages` workflow manually from the `Actions` tab.

  After that, GitHub will build the Vite app, publish `dist`, and files from `public/` such as `favicon.svg` will be available at the site root.
// eslint.config.js
