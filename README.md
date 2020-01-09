[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# rpg-tools

A small set of helpers for roleplaying games

Monorepo with yarn workspaces and lerna.

Run `yarn` in root directory

Run lerna commands from root as well.

Remember to build when working on linked packages at the same time.

When setting up new packages each package must have the following in it's own tsconfig.json:

```json
{
  // WHATEVER OTHER CONFIG
  "compilerOptions": {
    // WHATEVER OTHER CONFIG
    "rootDir": "src",
    "outDir": "dist",
    "declaration": true
  }
  // WHATEVER OTHER CONFIG
}
```
