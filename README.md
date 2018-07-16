[![Published on NPM](https://img.shields.io/npm/v/@polymer/paper-material.svg)](https://www.npmjs.com/package/@polymer/paper-material)
[![Build status](https://travis-ci.org/PolymerElements/paper-material.svg?branch=master)](https://travis-ci.org/PolymerElements/paper-material)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/paper-material)

## &lt;paper-material&gt;
`paper-material` is a container that renders two shadows on top of each other to
create the effect of a lifted piece of paper.

⚠️ As of the 2.0 release, this element is **deprecated** in favour of the shared styles in [`PolymerElements/paper-styles`](https://github.com/PolymerElements/paper-styles/blob/master/element-styles/paper-material-styles.html). Please see the implementation of [`PolymerElements/paper-button`](https://github.com/PolymerElements/paper-button/blob/master/paper-button.html#L114) for an example.

See: [Documentation](https://www.webcomponents.org/element/@polymer/paper-material),
  [Demo](https://www.webcomponents.org/element/@polymer/paper-material/demo/demo/index.html).

## Usage

### Installation
```
npm install --save @polymer/paper-material
```

### In an html file
```html
<html>
  <head>
    <script type="module">
      import '@polymer/paper-material/paper-material.js';
    </script>
  </head>
  <body>
    <paper-material elevation="1">
      <div>Some content</div>
    </paper-material>
  </body>
</html>
```
### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-material/paper-material.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <paper-material elevation="1">
        <div>Some content</div>
      </paper-material>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```sh
git clone https://github.com/PolymerElements/paper-material
cd paper-material
npm install
npm install -g polymer-cli
```

### Running the demo locally
```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
