/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';

import '@polymer/paper-styles/shadow.js';
import './paper-material-shared-styles.js';
import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

/**
Material design:
[Cards](https://www.google.com/design/spec/components/cards.html)

`paper-material` is a container that renders two shadows on top of each other to
create the effect of a lifted piece of paper.

Example:

    <paper-material elevation="1">
      ... content ...
    </paper-material>

@demo demo/index.html
*/
Polymer({
  /** @override */
  _template: html`
    <style include="paper-material-shared-styles"></style>
    <style>
      :host([animated]) {
        @apply --shadow-transition;
      }
      :host {
        @apply --paper-material;
      }
    </style>

    <slot></slot>
`,

  is: 'paper-material',

  properties: {
    /**
     * The z-depth of this element, from 0-5. Setting to 0 will remove the
     * shadow, and each increasing number greater than 0 will be "deeper"
     * than the last.
     * @type number
     * @default 1
     */
    elevation: {type: Number, reflectToAttribute: true, value: 1},

    /**
     * Set this to true to animate the shadow when setting a new
     * `elevation` value.
     * @type boolean
     * @default false
     */
    animated: {type: Boolean, reflectToAttribute: true, value: false}
  }
});
