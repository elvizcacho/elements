[![@allthings/elements](https://user-images.githubusercontent.com/132332/52407942-eb8e1700-2ad1-11e9-97f2-c71aa16ea41a.png)](https://developers.allthings.me/elements/index.html)

<img alt="npm version" src="https://badge.fury.io/js/%40allthings%2Felements.svg"> [![Build Status](https://travis-ci.org/allthings/elements.svg?branch=master)](https://travis-ci.org/allthings/elements) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovateapp.com/)

Elements is a set of **carefully crafted, composable React UI components,** that [Allthings](https://www.allthings.me) uses to build their mobile app.

## Content

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Documentation](#documentation)
- [Writing unit tests](#writing-unit-tests)

## Installation

Elements are available on [npm package](https://www.npmjs.com/package/@allthings/elements).

```sh
yarn add @allthings/elements
```

Please note that `@allthings/elements` is still under heavy development.

## Usage

Here is a quick example to get you started, it's all you need:

```jsx
import React from 'react'
import { render } from 'react-dom'
import Button from '@allthings/elements/molecules/Button'

function App() {
  return <Button>Hello World</Button>
}

render(<App />, document.querySelector('#app'))
```

### Notes:

**fetch**

`@allthings/elements` uses `fetch` and expects it to be globally available. For example [`cross-fetch`](https://github.com/lquixada/cross-fetch) can be used at the entry point of the app:

```
import 'cross-fetch/polyfill'
```

## Examples

Are you looking for some full example projects to get started?
[Check this out](https://github.com/allthings/elements-example).

## Documentation

Check out our [documentation website](https://developers.allthings.me/elements/index.html).

## Writing unit tests

Whenever you create or edit a React component or any other JavaScript file, you must update or create a corresponding test file in the same directory.

By convention the test file should be named after the file's name with an additional `.test.` part:

```sh
SomeDir
  | - MyButton.jsx
  | - MyButton.test.jsx
```

```sh
SomeOtherDir
  | - utils.js
  | - utils.test.js
```

To manually trigger the unit tests, run:

```sh
yarn test
```

You can also use the corresponding watch task:

```sh
yarn watch:test
```

The unit tests are performed using the [Jest platform](https://facebook.github.io/jest/), please refer to its documentation.

React component testing is based on the [Enzyme testing utility](http://airbnb.io/enzyme/docs/api/), please refer to its documentation.

The use of snapshots generated by the `toMatchSnapshot()` method is strongly encouraged. [Those snapshots must be always commited as they are a very useful tool whenever you want to make sure your UI does not change unexpectedly](https://facebook.github.io/jest/docs/en/snapshot-testing.html)
