# Flexhire Code Test


## Description

Created by using [Create React App](https://github.com/facebook/create-react-app) (CRA) _template_ with following libraries including:

  - React v17.0.2
  - Type Checker - TypeScript
  - API client - Relay
  - MUI
  - State management - Redux Thunk & Toolkit
  - Cypress
  - Format & Lint - ESLint & Prettier

Custom Templates, format, and ESlint configurations.

## Setup Environments
  - Node 16.2.0
  - Yarn 1.22.17

  ```
  npm install
  ```

  or
  ```
  yarn install
  ```

## Run Scripts

Inside the project directory run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `yarn test` - launches the test runner in the interactive watch mode.
- `yarn build` - builds the app for production to the `build` folder.
- `yarn build:serve` - run a local static build using the production build using serve library. Install `yarn install -g serve`.
- `yarn eject` - exposes content of `react-script` package
- `yarn lint` - lints project files according to Airbnb — as part of their style guide 👍 — it provides an ESLint configuration that anyone can use and it is the standard.
- `yarn fix` - fix lint errors.
- `yarn cypress:open test` - run cypress test

CRA template only support `scripts` and `dependencies` inside generated `package.json`. No `devDependencies` is possible on CRA template for now.
