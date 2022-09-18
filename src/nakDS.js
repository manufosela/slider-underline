import { css } from 'lit';

// developed by @nabaroa 
export const nakDS= css`
:host, a, article, aside, blockquote, body, canvas, caption, code, dd, div, dl, dt, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, iframe, img, label, legend, li, nav, object, ol, p, pre, section, small, span, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, ul, video {
  padding: 0;
  margin: 0;
  font: inherit;
  font-size: 100%;
  border: 0;
}
* {
  box-sizing: border-box;
}
:root, :host {
  --color--lighter: #d17a9c;
  --color: #c44f7a;
  --color--c: #5ca9ad;
  --color--m: #c44f7a;
  --color--y: #d5ad26;
  --color--darker: #bb2a5c;
  --color--complementary: #5ca9ad;
  --color--k-1: #000;
  --color--k-2: #222;
  --color--k-3: #333;
  --color--k-4: #6f6f6f;
  --color--k-5: #b0b0b0;
  --color--k-6: #d6d6d6;
  --color--k-7: #e5e5e5;
  --color--k-8: #eee;
  --color--k-9: #f5f5f5;
  --color--k-10: #fff;
}
.nk-theme--c {
  --color--lighter: #6db5ba;
  --color: #5ca9ad;
  --color--darker: #529393;
  --color--complementary: #d5ad26;
}
.nk-theme--m {
  --color--lighter: #d17a9c;
  --color: #c44f7a;
  --color--darker: #bb2a5c;
  --color--complementary: #5ca9ad;
}
.nk-theme--y {
  --color--lighter: #e5cc70;
  --color: #d5ad26;
  --color--darker: #c19a2b;
  --color--complementary: #5ca9ad;
}
.nk-theme--dark {
  --color--k-10: #000;
  --color--k-9: #222;
  --color--k-8: #333;
  --color--k-7: #6f6f6f;
  --color--k-6: #b0b0b0;
  --color--k-5: #d6d6d6;
  --color--k-4: #e5e5e5;
  --color--k-3: #eee;
  --color--k-2: #f5f5f5;
  --color--k-1: #fff;
}
:root, :host {
  --none: 0;
  --xxx-small: 0.125rem;
  --xx-small: 0.25rem;
  /*!2px;*/
  --x-small: 0.5rem;
  /*!4px*/
  --small: 0.75rem;
  /*!8px*/
  --medium: 1rem;
  /*!12px*/
  --large: 1.25rem;
  /*!16px*/
  --x-large: 1.5rem;
  /*!20px*/
  --xx-large: 1.75rem;
  /*!24px*/
  --xxx-large: 2rem;
  /*!28px*/
  --xxxx-large: 3rem;
  /*!32px*/
  --base-font: "Lato", sans-serif;
  /*!48px*/
  --input-font: "MyriadPro", sans-serif;
  --code-font: "MyriadPro", sans-serif;
  --font-size--x-small: 0.5rem;
  --font-size--small: 0.75rem;
  --font-size--medium: 1rem;
  --font-size--large: 1.25rem;
  --font-size--x-large: 1.5rem;
  --font-size--xx-large: 1.75rem;
  --font-size--xxx-large: 2rem;
  --font-size--xxxx-large: 3rem;
  --spacer: 0.5em;
  --spacer-small: 0.7rem;
  --spacer-medium: 1.25rem;
  --spacer-large: 2.5rem;
  --spacer-xlarge: 3.75rem;
  --text-color: var(--color--k-2);
  --text-color--ok: var(--color-positive);
  --text-color--ko: var(--color-error);
  --text-color--light: #b0b0b0;
  --text-color--dark: var(--color-cod-gray);
  --color-positive: var(--color-fourth);
  --color-error: var(--color-torch-red200);
  --background-color: var(--color-gallery);
  --background-color-button: var(--color);
  --background-color-button--theme: var(--color-azure);
  --background-color-button--hover: var(--color-steel-blue);
  --background-color-label: var(--color-gallery);
  --background-color-input: var(--color-wildsand);
  --background-color-button--naked--hover: var(--color-gallery);
  --link-color: var(--color);
  --background-color-tooltip: var(--color-white-rgb);
  --opacity-background-tooltip: 1;
  --animation-time: 0.2s;
  --border-color: var(--color-gallery);
  --border-color--naked: var(--color-gallery);
  --border-color-button--naked: var(--color-gallery);
  --border-color-box: var(--color-gallery);
  --color-link--icon: var(--color--k-2);
  --color-link--negativo: var(--color-wildsand);
  --color-link--negativo-hover: var(--color-third);
  --color-table-border: var(--color-gallery);
  --color-table-bg: var(--color-wildsand);
  --color-tr-border: var(--color-gallery);
  --color-tr-bg: var(--color-gallery);
  --color-th-border: var(--color-gallery);
  --color-th-bg: var(--color-gallery);
  --color-colspan-bg: var(--color-gallery);
  --color-td-border: var(--color-gallery);
  --color-td-bg: var(--color-wildsand);
  --width-form-element: 600px;
  --width-label--inline: 40%;
  --width-input--inline: 60%;
  --width-select--inline: 60%;
  --height-heading-box: 150px;
  --width-logo: 250px;
  --margin-header: var(--spacer-large);
  --border-width-thin: 1px;
  --border-width-thick: 2px;
}
@define mixin nk-button {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-width: var(--button__min-width);
  height: var(--button__height);
  font-family: var(--button__font);
  font-size: var(--button__font-size);
  color: var(--button_color);
  text-decoration: none !important;
  text-transform: inherit;
  background: var(--button__background);
  border: var(--button__border);
  @media (--small-viewport) {
    width: 100%;
  }
  :hover {
    color: var(--color-white);
    text-decoration: none;
    background: var(--color-steel-blue);
    background: var(--background-color-button--hover);
  }
  .action, .nk-button--action {
    background: var(--color--complementary-color);
  }
  @media (--small-viewport) {
    .action, .nk-button--action {
      -webkit-box-ordinal-group: 1;
      order: 0;
    }
  }
  .action:hover, .nk-button--action:hover {
    background: var(--color-torch-red300);
  }
  :focus {
    color: var(--color-white);
    background: var(--color-color);
  }
  + .button {
    margin: 0;
  }
}
@font-face {
  font-family: lato;
  src: url(../assets/fonts/Lato-Regular.ttf);
}
@font-face {
  font-family: lato-light;
  src: url(../assets/fonts/Lato-Light.ttf);
}
@font-face {
  font-family: lato-black;
  src: url(../assets/fonts/Lato-Black.ttf);
}
@font-face {
  font-family: montserrat;
  src: url(../assets/fonts/Montserrat-VF.ttf);
}
.nk-font--montserrat {
  font-family: montserrat, sans-serif;
}
.nk-font--light {
  font-family: lato-light, sans-serif;
}
.nk-font--regular {
  font-family: lato, sans-serif;
}
.nk-font--bold {
  font-family: lato-black, sans-serif;
}
.nk-text--small {
  font-size: 0.9em;
}
.nk-text--large {
  font-size: 1.2em;
}
.nk-text--huge {
  font-size: 3em;
}
.text {
  font-size: 16px;
}
:host, body {
  font-family: Lato, sans-serif;
  font-family: var(--base-font);
  font-size: 1.25rem;
  font-size: var(--font-size--large);
  color: #222;
  color: var(--text-color);
  line-height: 1.58;
}
a {
  color: #c44f7a;
  color: var(--color);
  text-decoration: underline;
  cursor: pointer;
}
a:hover {
  color: #bb2a5c;
  color: var(--color--darker);
}
.nk-bg--color a {
  color: #eee;
  color: var(--color--k-8);
}
.nk-bg--color a:hover {
  color: #fff;
  color: var(--color--k-10);
}
img {
  max-width: 100%;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
ol, ul {
  list-style-position: inside;
}
.nk-avatar, [class^=nk-avatar--] {
  border-radius: 100%;
}
.nk-avatar, .nk-avatar--medium {
  width: 6em;
  height: 6em;
}
.nk-avatar--small {
  width: 3em;
  height: 3em;
}
.nk-avatar--large {
  width: 12em;
  height: 12em;
}
.nk-badge {
  --badge-border-radius: 0;
  --badge-background: var(--color);
  --badge-padding: var(--xx-small) var(--x-small);
  --badge-font-size: var(--font-size--small);
  --badge-color: var(--color--k-10);
  display: inline;
  padding: var(--badge-padding);
  font-size: var(--badge-font-size);
  color: var(--badge-color);
  background: var(--badge-background);
  border-radius: var(--badge-border-radius);
}
.nk-button {
  display: -webkit-inline-box;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-family: lato;
  font-size: var(--button__font-size);
  color: #c44f7a;
  color: var(--color);
  text-decoration: none !important;
  background: transparent;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid #c44f7a;
  border: 1px solid var(--color);
  padding: 0.7rem 1.25rem;
  padding: var(--spacer-small) var(--spacer-medium);
}
.nk-button:hover {
  color: #f5f5f5;
  color: var(--color--k-9);
  background: #c44f7a;
  background: var(--color);
  -webkit-transition: 0.5s;
  transition: 0.5s;
}
.nk-button:focus {
  outline: 0;
}
.nk-toolbar .nk-button {
  align-self: center;
}
.nk-button--color {
  color: #f5f5f5;
  color: var(--color--k-9);
  background: #c44f7a;
  background: var(--color);
}
.nk-button--color:hover {
  background: #bb2a5c;
  background: var(--color--darker);
}
.nk-button--disabled {
  color: #b0b0b0;
  color: var(--color--k-5);
  border: 1px solid #b0b0b0;
  border: 1px solid var(--color--k-5);
  cursor: default;
}
.nk-button--disabled:hover {
  background: var(--color-k-5);
}
.nk-button--icon {
  border: 0;
  background: none;
  border-radius: 500rem;
  width: 48px;
  height: 48px;
  padding: var(--spacer-smal);
}
.nk-button--icon:hover [class^=nk-icon] {
  fill: #fff;
}
.nk-cover {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-attachment: fixed;
  height: 100vh;
  padding: 0 1em;
  padding: 0 calc(var(--spacer)*2);
  text-align: center;
}
@media (min-width: 800px) {
  .nk-cover {
    padding: 0 2.5em;
    padding: 0 calc(var(--spacer)*5);
  }
}
.nk-cover--dark-mode {
  color: #fff;
}
.nk-cover--dark-mode .nk-cover__title {
  text-shadow: 4px 4px 16px #222;
  text-shadow: 4px 4px 16px var(--color--k-2);
}
.nk-cover--dark-mode .nk-cover__subtitle {
  text-shadow: 4px 4px 8px #222;
  text-shadow: 4px 4px 8px var(--color--k-2);
}
.nk-cover__title {
  font-size: 2.5em;
}
@media (min-width: 800px) {
  .nk-cover__title {
    font-size: 6em;
  }
}
.nk-cover__subtitle {
  font-size: 2em;
}
@media (min-width: 800px) {
  .nk-cover__subtitle {
    font-size: 3em;
  }
}
.nk-dimmer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #222;
  background: var(--color--k-2);
  opacity: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  pointer-events: none;
  z-index: 2;
}
.nk-dimmer.nk-is-open {
  opacity: 0.9;
  pointer-events: inherit;
}
.nk-drawer {
  position: fixed;
  width: 75vw;
  height: 100vh;
  right: 0;
  top: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  padding: 2rem;
  padding: var(--xxx-large);
  background: #fff;
  background: var(--color--k-10);
  overflow-y: auto;
  z-index: 3;
  -webkit-transform: translateX(75vw);
  transform: translateX(75vw);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.nk-drawer.nk-is-open {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
.nk-drawer__footer {
  margin-top: auto;
}
.nk-logo__svg {
  width: 100%;
  max-width: 300px;
}
.nk-theme--dark .nk-logo__svg {
  fill: #fff;
}
.top-logo {
  position: absolute;
  top: 1em;
  left: 4em;
}
.nk-heading--1 {
  font-size: 2em;
  line-height: 1em;
}
@media (min-width: 800px) {
  .nk-heading--1 {
    font-size: 3em;
    line-height: 1.5em;
  }
}
.nk-heading--2 {
  font-size: 1.5em;
  font-size: 1em;
}
@media (min-width: 800px) {
  .nk-heading--2 {
    font-size: 2.5em;
    font-size: 1.5em;
  }
}
.nk-heading--3 {
  font-size: 1.2em;
  line-height: 1em;
}
@media (min-width: 800px) {
  .nk-heading--3 {
    font-size: 2.2em;
    line-height: 1.2em;
  }
}
.nk-heading--4 {
  font-size: 1.1em;
  line-height: 1em;
}
@media (min-width: 800px) {
  .nk-heading--4 {
    font-size: 1.8em;
    line-height: 1em;
  }
}
.nk-heading--5 {
  font-size: 1em;
  line-height: 1em;
}
@media (min-width: 800px) {
  .nk-heading--5 {
    font-size: 1.6em;
    line-height: 1em;
  }
}
.nk-heading--6 {
  font-size: 1em;
  line-height: 1em;
}
@media (min-width: 800px) {
  .nk-heading--6 {
    font-size: 1.4em;
    line-height: 1em;
  }
}
.nk-card, [class^=nk-card--] {
  display: grid;
  grid-template-rows: auto 1fr;
  min-width: 6em;
  min-height: 2.5rem;
  min-height: var(--spacer-large);
  height: 100%;
}
.nk-card--center {
  justify-items: center;
}
.nk-card--block-center {
  grid-template-rows: auto;
}
.nk-card__image--full {
  width: 100%;
  height: 200px;
  -o-object-fit: cover;
  object-fit: cover;
}
.nk-card__body {
  padding: 1.25rem;
  padding: var(--spacer-medium);
}
.nk-nav__button {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
}
.nk-navigation--fixed-horizontal {
  position: fixed;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 3em;
  height: 100vh;
  white-space: nowrap;
  cursor: pointer;
  border-right: 1px dashed grey;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}
.nk-main {
  margin-left: 3em;
}
.nk-gallery {
  padding: 0.75rem;
  padding: var(--small);
}
@media (min-width: 500px) {
  .nk-gallery {
    -webkit-columns: 2;
    -moz-columns: 2;
    column-count: 2;
    grid-column-gap: 0.75rem;
    -webkit-column-gap: 0.75rem;
    -moz-column-gap: 0.75rem;
    column-gap: 0.75rem;
    grid-column-gap: var(--small);
    -webkit-column-gap: var(--small);
    -moz-column-gap: var(--small);
    column-gap: var(--small);
  }
}
@media (min-width: 800px) {
  .nk-gallery {
    -webkit-columns: 3;
    -moz-columns: 3;
    column-count: 3;
  }
}
@media (min-width: 1170px) {
  .nk-gallery {
    -webkit-columns: 4;
    -moz-columns: 4;
    column-count: 4;
  }
}
.nk-gallery__item {
  position: relative;
  margin-bottom: 0.75rem;
  margin-bottom: var(--small);
  line-height: 0;
}
.nk-gallery__item:hover .nk-gallery__description {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
.nk-gallery__item img {
  width: 100%;
}
.nk-gallery__description {
  display: none;
  position: absolute;
  width: 100%;
  height: 50%;
  z-index: 0;
  bottom: 0;
  left: 0;
  padding: 0.75rem;
  padding: var(--small);
  line-height: 1.5;
}
.nk-gallery__description:before {
  content: "";
  position: absolute;
  background: #fff;
  background: var(--color--k-10);
  width: 100%;
  height: 100%;
  opacity: 0.7;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.nk-loader {
  width: 0.8em;
  height: 1em;
  border: 0.1em solid;
  border-radius: 0 0 0.2em 0.2em;
  position: relative;
}
.nk-loader:before {
  position: absolute;
  content: "";
  width: 0.1em;
  height: 0.3em;
  background-color: currentcolor;
  top: -0.3em;
  left: 0.05em;
  box-shadow: 0.2em 0 0 0 currentcolor, 0.2em -0.2em 0 0 currentcolor, 0.4em 0 0 0 currentcolor;
  -webkit-animation: smoke 1s linear infinite alternate;
  animation: smoke 1s linear infinite alternate;
}
.nk-loader:after {
  position: absolute;
  content: "";
  width: 0.2em;
  height: 50%;
  border: 0.1em solid;
  border-left: none;
  border-radius: 0 0.5em 0.5em 0;
  left: calc(100% + .1em);
  top: 0.1em;
}
@-webkit-keyframes smoke {
  0% {
    height: 0;
  }
  to {
    height: 6px;
  }
}
@keyframes smoke {
  0% {
    height: 0;
  }
  to {
    height: 6px;
  }
}
.nk-menu, [class*=nk-menu--] {
  --menu-border-size: 1px;
  --menu-border-color: var(--color--k-8);
  --menu-color: var(--color--k-3);
  --menu-color--hover: var(--color--k-1);
  --menu-background-color: var(--color--k-10);
  --menu-background-color--hover: var(--color--k-8);
  --menu-padding: calc(var(--spacer)*4);
  list-style: none;
  background: pink;
}
.nk-menu--row {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.nk-menu__item {
  -webkit-box-flex: 1;
  flex: 1;
}
.nk-menu__link {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  border: var(--menu-border-size) var(--menu-border-color) solid;
  padding: calc(var(--menu-padding)/2) var(--menu-padding);
  background: var(--menu-background-color);
  text-decoration: none;
  color: var(--menu-color);
  height: 100%;
  -webkit-box-align: center;
  align-items: center;
}
.nk-menu__link:hover {
  background: var(--menu-background-color--hover);
  color: var(--menu-color--hover);
}
.nk-modal {
  display: none;
  width: 100%;
  max-width: 500px;
  position: absolute;
  top: 50px;
  left: calc(50% - 250px);
  background: #fff;
  background: var(--color--k-10);
  pointer-events: all;
}
.nk-modal:before {
  content: "";
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
.nk-show-modal .nk-modal {
  display: block;
}
.nk-modal__header {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 1.25rem;
  padding: var(--spacer-medium);
}
.nk-modal__image {
  max-height: 30vh;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}
.nk-modal__body {
  padding: 1.25rem 2.5rem;
  padding: var(--spacer-medium) var(--spacer-large);
}
.nk-modal__footer {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 0 1.25rem 1.25rem;
  padding: 0 var(--spacer-medium) var(--spacer-medium);
  grid-column-gap: 1.25rem;
  -webkit-column-gap: 1.25rem;
  -moz-column-gap: 1.25rem;
  column-gap: 1.25rem;
  grid-column-gap: var(--spacer-medium);
  -webkit-column-gap: var(--spacer-medium);
  -moz-column-gap: var(--spacer-medium);
  column-gap: var(--spacer-medium);
}
.nk-show-modal {
  pointer-events: none;
  overflow: hidden;
}
.nk-icon--small {
  width: 24px;
}
.nk-icon, .nk-icon--small {
  fill: #222;
  fill: var(--text-color);
}
.nk-icon {
  width: 32px;
}
.nk-icon--large {
  width: 48px;
  fill: #222;
  fill: var(--text-color);
}
.nk-has-border {
  padding: 5px;
  border: 3px solid var(--color-third);
  border-radius: 500rem;
}
.nk-has-icon--right {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.nk-theme--dark [class^=nk-icon] {
  fill: #fff;
}
.nk-link--naked, .nk-link--naked:hover, .nk-link--neutral {
  text-decoration: none;
}
.nk-link--neutral {
  color: #222;
  color: var(--text-color);
}
.nk-link--neutral:hover {
  text-decoration: none;
}
.nk-list {
  list-style: none;
  list-style-position: inside;
}
.nk-list ul {
  list-style: none;
}
.nk-list--horizontal {
  list-style: none;
  list-style-position: inside;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.nk-toolbar {
  display: -webkit-box;
  display: flex;
  padding: 0 1em;
  padding: 0 calc(var(--spacer)*2);
  overflow: hidden;
}
@media (min-width: 800px) {
  .nk-toolbar {
    padding: 0 2.5em;
    padding: 0 calc(var(--spacer)*5);
  }
}
.nk-toolbar__item--right {
  margin-left: auto;
}
.nk-footer {
  padding: 2.5rem;
  padding: var(--spacer-large);
}
.nk-slider {
  display: grid;
  grid-template-columns: repeat(100, 100vw);
  scroll-behavior: smooth;
  overflow-x: scroll;
}
.nk-slide {
  display: grid;
  justify-items: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
}
.nk-slider__next {
  position: absolute;
  right: 40px;
  top: 50vh;
}
.nk-slider__back {
  position: absolute;
  left: 40px;
  top: 50vh;
}
.nk-table--neutral {
  width: 100%;
  background: var(--color-wildsand);
  background: var(--color-table-bg);
  border: 1px solid var(--color-table-border);
}
.nk-table--neutral th {
  font-weight: 700;
  color: #c44f7a;
  color: var(--color);
}
.nk-table--neutral td {
  padding: 1rem;
  padding: var(--medium);
  border: 1px solid var(--color-td-border);
}
.nk-table--neutral td[colspan="3"] {
  background: var(--color-gallery);
  background: var(--color-colspan-bg);
}
.nk-timeline {
  position: relative;
  padding-left: 1.75rem;
  padding-left: var(--xx-large);
  padding-right: 1.75rem;
  padding-right: var(--xx-large);
}
.nk-timeline:before {
  content: "";
  position: absolute;
  top: 0;
  left: 1.25rem;
  left: var(--large);
  width: 1px;
  height: 100%;
  border-left: 1px dashed #6f6f6f;
  border-left: 1px dashed var(--color--k-4);
}
.nk-timeline__item {
  position: relative;
  margin-bottom: 2rem;
  margin-bottom: var(--xxx-large);
}
.nk-timeline__item:before {
  content: "";
  position: absolute;
  top: 8px;
  left: calc(-2rem - 4px);
  left: calc(-1*var(--xxx-large) - 4px);
  width: 16px;
  height: 16px;
  background: #6f6f6f;
  background: var(--color--k-4);
  border-radius: 50%;
}
.nk-timeline__date {
  font-size: 1rem;
  font-size: var(--font-size--medium);
}
.nk-timeline__title {
  font-size: 1.5rem;
  font-size: var(--font-size--x-large);
}
.nk-timeline__assets {
  margin-top: 1rem;
  margin-top: var(--medium);
}
.nk-tooltip {
  position: absolute;
  bottom: 0;
  left: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  line-height: 1.5em;
  background: rgba(var(--color-white-rgb));
  background: rgba(var(--background-color-tooltip));
  -webkit-transition: 0.2s;
  transition: 0.2s;
  -webkit-transition: var(--animation-time);
  transition: var(--animation-time);
  -webkit-transform: translateY(300px);
  transform: translateY(300px);
}
.nk-has-tooltip {
  position: relative;
  overflow: hidden;
}
.nk-has-tooltip:hover .nk-tooltip {
  display: -webkit-box;
  display: flex;
  -webkit-transform: translate(0);
  transform: translate(0);
}
.nk-tab-list {
  display: -webkit-box;
  display: flex;
}
.nk-tab-item + .nk-tab-item:hover {
  box-shadow: -1px 0 0 var(--color-dark);
}
.nk-tab-link {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  font-size: 18px;
  color: #b0b0b0;
  color: var(--text-color--light);
  text-decoration: none;
}
.nk-tab-link:hover, .nk-is-active .nk-tab-link {
  color: #222;
  color: var(--text-color);
  text-decoration: none;
  background: var(--color-gallery);
  background: var(--background-color);
  box-shadow: 0 -3px 0 #c44f7a;
  box-shadow: 0 -3px 0 var(--color);
}
.nk-theme--dark {
  background-color: #f5f5f5;
  background-color: var(--color--k-9);
  color: #b0b0b0;
  color: var(--color--k-5);
}
[class*=nk-layout] {
  --sidebar-width: 100vw;
}
@media (min-width: 800px) {
  [class*=nk-layout] {
    --sidebar-width: 18.75em;
    --layout-height: 100vh;
  }
}
.nk-layout, [class*=nk-layout--] {
  display: grid;
  height: var(--layout-height);
}
@media (min-width: 800px) {
  .nk-layout--sidebar {
    grid-template-columns: var(--sidebar-width) 1fr;
  }
}
.nk-layout--sidebar .nk-layout__aside {
  -webkit-box-ordinal-group: 2;
  order: 1;
}
.nk-layout--sidebar .nk-layout__main {
  -webkit-box-ordinal-group: 3;
  order: 2;
}
@media (min-width: 800px) {
  .nk-layout--sidebar-right {
    grid-template-columns: 1fr var(--sidebar-width);
  }
}
@media (max-width: 1169px) {
  .nk-layout--sidebar-right .nk-layout__aside {
    -webkit-box-ordinal-group: 2;
    order: 1;
  }
  .nk-layout--sidebar-right .nk-layout__main {
    -webkit-box-ordinal-group: 3;
    order: 2;
  }
}
.nk-layout--sidebar-double .nk-layout__aside {
  -webkit-box-ordinal-group: 2;
  order: 1;
}
.nk-layout--sidebar-double .nk-layout__aside:first-of-type {
  -webkit-box-ordinal-group: 4;
  order: 3;
}
.nk-layout--sidebar-double .nk-layout__main {
  -webkit-box-ordinal-group: 3;
  order: 2;
}
@media (min-width: 800px) and (max-width: 1439px) {
  .nk-layout--sidebar-double {
    grid-template-columns: var(--sidebar-width) 1fr;
    grid-template-rows: 1fr;
  }
  .nk-layout--sidebar-double .nk-layout__aside:first-of-type {
    grid-column: span 2;
  }
}
@media (min-width: 1170px) {
  .nk-layout--sidebar-double {
    grid-template-columns: var(--sidebar-width) 1fr var(--sidebar-width);
  }
}
@media (min-width: 800px) {
  .nk-layout--double {
    grid-template-columns: 1fr 1fr;
  }
}
[class*=nk-container] {
  --container--content: 1100px;
  --container--text: 680px;
  --container--padding: calc(var(--spacer)*2);
}
@media (min-width: 800px) {
  [class*=nk-container] {
    --container--padding: calc(var(--spacer)*5);
  }
}
[class*=nk-container] {
  width: 100%;
  margin: auto;
  padding-left: var(--container--padding);
  padding-right: var(--container--padding);
}
.nk-container--content {
  max-width: var(--container--content);
}
.nk-container--text {
  max-width: var(--container--text);
}
.nk-section {
  --section-padding: calc(var(--spacer)*3);
}
@media (min-width: 800px) {
  .nk-section {
    --section-padding: calc(var(--spacer)*5);
  }
}
.nk-section {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
}
:root, :host {
  --bp-small: 500px;
  --bp-medium: 800px;
  --bp-large: 1170px;
  --bp-page: 1170px;
}
.nk-grid {
  --grid-item-top-space: var(--x-small);
  --grid-item-bottom-space: var(--x-small);
  display: grid;
}
@media (min-width: 800px) {
  .nk-grid\@md {
    display: grid;
  }
}
@media (min-width: 500px) {
  .nk-grid\@sm {
    display: grid;
  }
}
.nk-grid-2 {
  grid-template-columns: repeat(2, 1fr);
}
.nk-grid-3 {
  grid-template-columns: repeat(3, 1fr);
}
@media (min-width: 500px) {
  .nk-grid-3\@sm {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 800px) {
  .nk-grid-3\@md {
    grid-template-columns: repeat(3, 1fr);
  }
}
.nk-grid-rows-3 {
  grid-template-rows: repeat(3, 1fr);
}
.nk-grid-4 {
  grid-template-columns: repeat(4, 1fr);
}
@media (min-width: 500px) {
  .nk-grid-4\@sm {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 800px) {
  .nk-grid-4\@md {
    grid-template-columns: repeat(4, 1fr);
  }
}
.nk-grid-5 {
  grid-template-columns: repeat(5, 1fr);
}
@media (min-width: 800px) {
  .nk-grid-5\@md {
    grid-template-columns: repeat(5, 1fr);
  }
}
.nk-grid-6 {
  grid-template-columns: repeat(6, 1fr);
}
.nk-gap {
  grid-column-gap: 1.25rem;
  -webkit-column-gap: 1.25rem;
  -moz-column-gap: 1.25rem;
  column-gap: 1.25rem;
  grid-column-gap: var(--spacer-medium);
  -webkit-column-gap: var(--spacer-medium);
  -moz-column-gap: var(--spacer-medium);
  column-gap: var(--spacer-medium);
  grid-row-gap: 1.25rem;
  row-gap: 1.25rem;
  grid-row-gap: var(--spacer-medium);
  row-gap: var(--spacer-medium);
}
[class*=nk-flex] {
  display: -webkit-box;
  display: flex;
}
@media (min-width: 500px) {
  .nk-flex\@sm {
    display: -webkit-box;
    display: flex;
  }
}
@media (min-width: 800px) {
  .nk-flex\@md {
    display: -webkit-box;
    display: flex;
  }
}
@media (min-width: 1170px) {
  .nk-flex\@lg {
    display: -webkit-box;
    display: flex;
  }
}
.nk-flex--column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
@media (min-width: 500px) {
  .nk-flex--column\@sm {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
}
@media (min-width: 800px) {
  .nk-flex--column\@md {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
}
@media (min-width: 1170px) {
  .nk-flex--column\@lg {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
}
.nk-justify-content--start {
  -webkit-box-pack: start;
  justify-content: start;
}
@media (min-width: 500px) {
  .nk-justify-content--start\@sm {
    -webkit-box-pack: start;
    justify-content: start;
  }
}
@media (min-width: 800px) {
  .nk-justify-content--start\@md {
    -webkit-box-pack: start;
    justify-content: start;
  }
}
@media (min-width: 1170px) {
  .nk-justify-content--start\@lg {
    -webkit-box-pack: start;
    justify-content: start;
  }
}
.nk-justify-content--center {
  -webkit-box-pack: center;
  justify-content: center;
}
.nk-justify-items--center {
  justify-items: center;
}
@media (min-width: 500px) {
  .nk-justify-content--center\@sm {
    -webkit-box-pack: center;
    justify-content: center;
  }
}
@media (min-width: 800px) {
  .nk-justify-content--center\@md {
    -webkit-box-pack: center;
    justify-content: center;
  }
}
@media (min-width: 1170px) {
  .nk-justify-content--center\@lg {
    -webkit-box-pack: center;
    justify-content: center;
  }
}
.nk-justify-content--end {
  -webkit-box-pack: end;
  justify-content: end;
}
@media (min-width: 500px) {
  .nk-justify-content--end\@sm {
    -webkit-box-pack: end;
    justify-content: end;
  }
}
@media (min-width: 800px) {
  .nk-justify-content--end\@md {
    -webkit-box-pack: end;
    justify-content: end;
  }
}
@media (min-width: 1170px) {
  .nk-justify-content--end\@lg {
    -webkit-box-pack: end;
    justify-content: end;
  }
}
.nk-align-items--start {
  -webkit-box-align: start;
  align-items: flex-start;
}
@media (min-width: 500px) {
  .nk-align-items--start\@sm {
    -webkit-box-align: start;
    align-items: flex-start;
  }
}
@media (min-width: 800px) {
  .nk-align-items--start\@md {
    -webkit-box-align: start;
    align-items: flex-start;
  }
}
@media (min-width: 1170px) {
  .nk-align-items--start\@lg {
    -webkit-box-align: start;
    align-items: flex-start;
  }
}
.nk-align-items--center {
  -webkit-box-align: center;
  align-items: center;
}
@media (min-width: 500px) {
  .nk-align-items--center\@sm {
    -webkit-box-align: center;
    align-items: center;
  }
}
@media (min-width: 800px) {
  .nk-align-items--center\@md {
    -webkit-box-align: center;
    align-items: center;
  }
}
@media (min-width: 1170px) {
  .nk-align-items--center\@lg {
    -webkit-box-align: center;
    align-items: center;
  }
}
.nk-align-items--end {
  -webkit-box-align: end;
  align-items: flex-end;
}
@media (min-width: 500px) {
  .nk-align-items--end\@sm {
    -webkit-box-align: end;
    align-items: flex-end;
  }
}
@media (min-width: 800px) {
  .nk-align-items--end\@md {
    -webkit-box-align: end;
    align-items: flex-end;
  }
}
@media (min-width: 1170px) {
  .nk-align-items--end\@lg {
    -webkit-box-align: end;
    align-items: flex-end;
  }
}
.nk-blend--multiply {
  mix-blend-mode: multiply;
}
.nk-blend--screen {
  mix-blend-mode: screen;
}
.nk-blend--overlay {
  mix-blend-mode: overlay;
}
.nk-blend--darken {
  mix-blend-mode: darken;
}
.nk-blend--lighten {
  mix-blend-mode: lighten;
}
.nk-blend--color-dodge {
  mix-blend-mode: color-dodge;
}
.nk-blend--color-burn {
  mix-blend-mode: color-burn;
}
.nk-blend--hard-light {
  mix-blend-mode: hard-light;
}
.nk-blend--soft-light {
  mix-blend-mode: soft-light;
}
.nk-blend--difference {
  mix-blend-mode: difference;
}
.nk-blend--exclusion {
  mix-blend-mode: exclusion;
}
.nk-blend--hue {
  mix-blend-mode: hue;
}
.nk-blend--saturation {
  mix-blend-mode: saturation;
}
.nk-blend--color {
  mix-blend-mode: color;
}
.nk-blend--luminosity {
  mix-blend-mode: luminosity;
}
.nk-color--color, .nk-color--color:after, .nk-color--color:before {
  color: #c44f7a;
  color: var(--color);
}
.nk-color--c-lighter {
  color: #d17a9c;
  color: var(--color--lighter);
}
.nk-color--c {
  color: #5ca9ad;
  color: var(--color--c);
}
.nk-color--c a {
  color: #fff;
  color: var(--color--k-10);
}
.nk-color--c:after, .nk-color--c:before {
  color: #5ca9ad;
  color: var(--color--c);
}
.nk-color--m {
  color: #c44f7a;
  color: var(--color--m);
}
.nk-color--m a {
  color: #fff;
  color: var(--color--k-10);
}
.nk-color--m:after, .nk-color--m:before {
  color: #c44f7a;
  color: var(--color--m);
}
.nk-color--y, .nk-color--y:after, .nk-color--y:before {
  color: #d5ad26;
  color: var(--color--y);
}
.nk-color--k-1 {
  color: #000;
  color: var(--color--k-1);
}
.nk-color--k-2 {
  color: #222;
  color: var(--color--k-2);
}
.nk-color--k-3 {
  color: #333;
  color: var(--color--k-3);
}
.nk-color--k-4 {
  color: #6f6f6f;
  color: var(--color--k-4);
}
.nk-color--k-5 {
  color: #b0b0b0;
  color: var(--color--k-5);
}
.nk-color--k-6 {
  color: #d6d6d6;
  color: var(--color--k-6);
}
.nk-color--k-7 {
  color: #e5e5e5;
  color: var(--color--k-7);
}
.nk-color--k-8 {
  color: #eee;
  color: var(--color--k-8);
}
.nk-color--k-9 {
  color: #f5f5f5;
  color: var(--color--k-9);
}
.nk-color--k-10 {
  color: #fff;
  color: var(--color--k-10);
}
.nk-filter--greyscale {
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}
:root, :host {
  --shape: 200px;
}
.nk-shape--circle {
  width: 200px;
  width: var(--shape);
  height: 200px;
  height: var(--shape);
  background: #f5f5f5;
  background: var(--color--k-9);
  border-radius: 50%;
}
.nk-shape--heart {
  margin: 50px 50px 0;
  margin: calc(var(--shape)/4) calc(var(--shape)/4) 0;
  position: relative;
  top: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.nk-shape--heart, .nk-shape--heart:after, .nk-shape--heart:before {
  background: #f5f5f5;
  background: var(--color--k-9);
  width: 100px;
  width: calc(var(--shape)/2);
  height: 100px;
  height: calc(var(--shape)/2);
}
.nk-shape--heart:after, .nk-shape--heart:before {
  content: "";
  position: absolute;
  border-radius: 50%;
}
.nk-shape--heart:before {
  top: -50px;
  top: calc(-1*var(--shape)/4);
  left: 0;
}
.nk-shape--heart:after {
  left: 50px;
  left: calc(var(--shape)/4);
  top: 0;
}
.nk-bg--opaque {
  background: #fff;
  background: var(--color--k-10);
}
.nk-theme--dark .nk-bg--opaque {
  background-color: #f5f5f5;
  background-color: var(--color--k-9);
}
.nk-bg--color {
  color: #fff;
  color: var(--color--k-10);
}
.nk-bg--color, .nk-bg--color:after, .nk-bg--color:before {
  background: #c44f7a;
  background: var(--color);
}
.nk-bg--c-lighter {
  background: #d17a9c;
  background: var(--color--lighter);
}
.nk-bg--c, .nk-bg--c-lighter {
  color: #fff;
  color: var(--color--k-10);
}
.nk-bg--c {
  background: #5ca9ad;
  background: var(--color--c);
}
.nk-bg--c:after, .nk-bg--c:before {
  background: #5ca9ad;
  background: var(--color--c);
}
.nk-bg--m {
  background: #c44f7a;
  background: var(--color--m);
  color: #fff;
  color: var(--color--k-10);
}
.nk-bg--m a {
  color: #fff;
  color: var(--color--k-10);
}
.nk-bg--m:after, .nk-bg--m:before {
  background: #c44f7a;
  background: var(--color--m);
}
.nk-bg--y {
  color: #fff;
  color: var(--color--k-10);
}
.nk-bg--y, .nk-bg--y:after, .nk-bg--y:before {
  background: #d5ad26;
  background: var(--color--y);
}
.nk-bg--k-1 {
  background: #000;
  background: var(--color--k-1);
}
.nk-bg--k-1, .nk-bg--k-2 {
  color: #fff;
  color: var(--color--k-10);
}
.nk-bg--k-2 {
  background: #222;
  background: var(--color--k-2);
}
.nk-bg--k-3 {
  background: #333;
  background: var(--color--k-3);
}
.nk-bg--k-3, .nk-bg--k-4 {
  color: #fff;
  color: var(--color--k-10);
}
.nk-bg--k-4 {
  background: #6f6f6f;
  background: var(--color--k-4);
}
.nk-bg--k-5 {
  background: #b0b0b0;
  background: var(--color--k-5);
}
.nk-bg--k-5, .nk-bg--k-6 {
  color: #fff;
  color: var(--color--k-10);
}
.nk-bg--k-6 {
  background: #d6d6d6;
  background: var(--color--k-6);
}
.nk-bg--k-7 {
  background: #e5e5e5;
  background: var(--color--k-7);
}
.nk-bg--k-7, .nk-bg--k-8 {
  color: #222;
  color: var(--color--k-2);
}
.nk-bg--k-8 {
  background: #eee;
  background: var(--color--k-8);
}
.nk-bg--k-9 {
  background: #f5f5f5;
  background: var(--color--k-9);
}
.nk-bg--k-9, .nk-bg--k-10 {
  color: #222;
  color: var(--color--k-2);
}
.nk-bg--k-10 {
  background: #fff;
  background: var(--color--k-10);
}
.nk-bg--images-1 {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/img/rikki-chan-9FfJW5Tu_qk-1880-unsplash.jpg);
  background-size: cover;
}
.nk-hidden {
  display: none !important;
}
.nk-d-block {
  display: block;
}
.nk-display--inline {
  display: inline;
}
.nk-position--sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
}
.nk-text-align--left {
  text-align: left;
}
.nk-text-align--right {
  text-align: right;
}
.nk-text-align--center {
  text-align: center;
}
.nk-smooth-scroll {
  scroll-behavior: smooth;
  overflow-y: scroll;
  height: 100vh;
}
.nk-overflow--hidden {
  overflow: hidden;
}
.nk-height-fullpage {
  min-height: 100vh;
}
.nk-float-right {
  float: right;
}
.nk-float-left {
  float: left;
}
.nk-text-color {
  color: #c44f7a;
  color: var(--color);
}
.nk-text-color--secondary {
  color: var(--color-torch-red);
}
.nk-text-color--third {
  color: var(--color-steel-blue);
}
.nk-text-color--neutral {
  color: #b0b0b0;
  color: var(--color--k-5);
}
.nk-text--strong {
  font-weight: 700;
  color: var(--color-black);
}
.nk-theme--dark .nk-text--strong {
  color: #fff;
}
.nk-is-hidden {
  display: none !important;
}
@media (--min-medium-viewport) {
  .nk-is-hidden--min-medium {
    display: none !important;
  }
}
@media (--min-small-viewport) {
  .nk-is-hidden--min-small {
    display: none !important;
  }
}
.nk-align--right {
  display: -webkit-box;
  display: flex;
  text-align: right;
}
.nk-align--right, .nk-align--right.nk-form-element--inline, .nk-align--right.nk-form-element__row {
  -webkit-box-pack: end;
  justify-content: flex-end;
}
.nk-align--center {
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
}
@media (--small-viewport) {
  .nk-align--center {
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
  }
}
.nk-align--center p {
  text-align: center;
}
@media (--small-viewport) {
  .nk-is-stacable--small {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: start;
    align-items: flex-start;
    height: inherit;
  }
  .nk-is-stacable--small.nk-grid {
    flex-wrap: wrap;
  }
}
@media (--medium-viewport) {
  .nk-is-stacable--medium {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: start;
    align-items: flex-start;
    height: inherit;
  }
}
@media (--medium-viewport) {
  .nk-is-stacable--medium.nk-grid, .nk-is-wrappable--medium {
    flex-wrap: wrap;
  }
}
.nk-has-select:before {
  position: absolute;
  right: 10px;
  bottom: 15px;
  color: #c44f7a;
  color: var(--color);
  content: "\e904";
}
.nk-has-select:hover:before {
  color: #5ca9ad;
  color: var(--color--complementary);
}
.nk-image-mask--gradient {
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(0), color-stop(40%, #000), to(transparent));
  -webkit-mask-image: linear-gradient(0, #000 40%, transparent);
  mask-image: -webkit-gradient(linear, left top, left bottom, from(0), color-stop(40%, #000), to(transparent));
  mask-image: linear-gradient(0, #000 40%, transparent);
  -webkit-mask-repeat: space;
  mask-repeat: space;
}
.nk-has-bg-image--gradient {
  background: linear-gradient(45deg, #ebebeb 44%, rgba(235, 235, 235, 0)), url();
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: cover;
}
.std:empty {
  display: none;
}
.nk-bg-color--neutral {
  background: var(--color-gallery);
  background: var(--background-color);
}
.nk-width-input--inline {
  width: 60%;
  width: var(--width-input--inline);
}
.nk-obj-fit--contain {
  width: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}
.nk-size--inherit {
  width: inherit !important;
}
.nk-size--1-of-1 {
  width: 100%;
}
.nk-size--1-of-2 {
  width: 50%;
}
.nk-size--1-of-3 {
  width: 33.3333333333%;
}
.nk-size--2-of-3 {
  width: 66.6666666667%;
}
.nk-size--3-of-3 {
  width: 100%;
}
.nk-size--1-of-4 {
  width: 25%;
}
.nk-size--2-of-4 {
  width: 50%;
}
.nk-size--3-of-4 {
  width: 75%;
}
.nk-size {
  width: 1.75rem !important;
  width: var(--xx-large) !important;
}
.nk-size--xlarge {
  width: 1.5rem !important;
  width: var(--x-large) !important;
}
@media (--small-viewport) {
  .nk-size--stacable, .nk-size-mobile--full {
    width: 100%;
  }
  .nk-size--stacable.nk-size--1-of-2 {
    margin-left: 0;
  }
}
@media (--small-viewport) {
  .nk-small-size--1-of-1 {
    width: 100% !important;
  }
  .nk-small-size--1-of-2 {
    width: 50%;
  }
  .nk-small-size--1-of-3 {
    width: 33.3333333333%;
  }
  .nk-small-size--2-of-3 {
    width: 66.6666666667%;
  }
  .nk-small-size--1-of-4 {
    width: 25%;
  }
  .nk-small-size--3-of-4 {
    width: 75%;
  }
}
@media (--medium-viewport) {
  .nk-medium-size--1-of-1 {
    width: 100%;
  }
  .nk-medium-size--1-of-2 {
    width: 50%;
  }
  .nk-medium-size--1-of-3 {
    width: 33.3333333333%;
  }
  .nk-medium-size--2-of-3 {
    width: 66.6666666667%;
  }
  .nk-medium-size--1-of-4 {
    width: 25%;
  }
  .nk-medium-size--3-of-4 {
    width: 75%;
  }
}
@media (--large-viewport) {
  .nk-large-size--1-of-1 {
    width: 100%;
  }
  .nk-large-size--1-of-2 {
    width: 50%;
  }
  .nk-large-size--1-of-3 {
    width: 33.3333333333%;
  }
  .nk-large-size--2-of-3 {
    width: 66.6666666667%;
  }
  .nk-large-size--1-of-4 {
    width: 25%;
  }
  .nk-large-size--3-of-4 {
    width: 75%;
  }
}
.nk-pan, .nk-ptn, .nk-pvn {
  padding-top: 0 !important;
  padding-top: var(--none) !important;
}
.nk-pas, .nk-pts, .nk-pvs {
  padding-top: 0.75rem !important;
  padding-top: var(--small) !important;
}
.nk-pam, .nk-ptm, .nk-pvm {
  padding-top: 1rem !important;
  padding-top: var(--medium) !important;
}
.nk-pal, .nk-ptl, .nk-pvl {
  padding-top: 1.25rem !important;
  padding-top: var(--large) !important;
}
.nk-pax, .nk-ptx, .nk-pvx {
  padding-top: 1.5rem !important;
  padding-top: var(--x-large) !important;
}
.nk-paxx, .nk-ptxx, .nk-pvxx {
  padding-top: 0 !important;
  padding-top: var(--none) !important;
}
.nk-pan, .nk-phn, .nk-prn {
  padding-right: 0 !important;
  padding-right: var(--none) !important;
}
.nk-pas, .nk-phs, .nk-prs {
  padding-right: 0.75rem !important;
  padding-right: var(--small) !important;
}
.nk-pam, .nk-phm, .nk-prm {
  padding-right: 1rem !important;
  padding-right: var(--medium) !important;
}
.nk-pal, .nk-phl, .nk-prl {
  padding-right: 1.25rem !important;
  padding-right: var(--large) !important;
}
.nk-pax, .nk-phx, .nk-prx {
  padding-right: 1.5rem !important;
  padding-right: var(--x-large) !important;
}
.nk-pan, .nk-pbn, .nk-pvn {
  padding-bottom: 0 !important;
  padding-bottom: var(--none) !important;
}
.nk-pas, .nk-pbs, .nk-pvs {
  padding-bottom: 0.75rem !important;
  padding-bottom: var(--small) !important;
}
.nk-pam, .nk-pbm, .nk-pvm {
  padding-bottom: 1rem !important;
  padding-bottom: var(--medium) !important;
}
.nk-pal, .nk-pbl, .nk-pvl {
  padding-bottom: 1.25rem !important;
  padding-bottom: var(--large) !important;
}
.nk-pax, .nk-pbx, .nk-pvx {
  padding-bottom: 1.5rem !important;
  padding-bottom: var(--x-large) !important;
}
.nk-pan, .nk-phn, .nk-pln {
  padding-left: 0 !important;
  padding-left: var(--none) !important;
}
.nk-pas, .nk-phs, .nk-pls {
  padding-left: 0.75rem !important;
  padding-left: var(--small) !important;
}
.nk-pam, .nk-phm, .nk-plm {
  padding-left: 1rem !important;
  padding-left: var(--medium) !important;
}
.nk-pal, .nk-phl, .nk-pll {
  padding-left: 1.25rem !important;
  padding-left: var(--large) !important;
}
.nk-pax, .nk-phx, .nk-plx {
  padding-left: 1.5rem !important;
  padding-left: var(--x-large) !important;
}
.nk-man, .nk-mtn, .nk-mvn {
  margin-top: 0 !important;
  margin-top: var(--none) !important;
}
.nk-mas, .nk-mts, .nk-mvs {
  margin-top: 0.75rem !important;
  margin-top: var(--small) !important;
}
.nk-mam, .nk-mtm, .nk-mvm {
  margin-top: 1rem !important;
  margin-top: var(--medium) !important;
}
.nk-mal, .nk-mtl, .nk-mvl {
  margin-top: 1.25rem !important;
  margin-top: var(--large) !important;
}
.nk-max, .nk-mtx, .nk-mvx {
  margin-top: 1.5rem !important;
  margin-top: var(--x-large) !important;
}
.nk-man, .nk-mhn, .nk-mrn {
  margin-right: 0 !important;
  margin-right: var(--none) !important;
}
.nk-mas, .nk-mhs, .nk-mrs, ul.nk-mrs li {
  margin-right: 0.75rem !important;
  margin-right: var(--small) !important;
}
.nk-mam, .nk-mhm, .nk-mrm {
  margin-right: 1rem !important;
  margin-right: var(--medium) !important;
}
.nk-mal, .nk-mhl, .nk-mrl, ul.nk-mrl li {
  margin-right: 1.25rem !important;
  margin-right: var(--large) !important;
}
.nk-man, .nk-mbn, .nk-mvn {
  margin-bottom: 0 !important;
  margin-bottom: var(--none) !important;
}
.nk-mas, .nk-mbs, .nk-mvs {
  margin-bottom: 0.75rem !important;
  margin-bottom: var(--small) !important;
}
.nk-mam, .nk-mbm, .nk-mvm {
  margin-bottom: 1rem !important;
  margin-bottom: var(--medium) !important;
}
.nk-mal, .nk-mbl, .nk-mvl {
  margin-bottom: 1.25rem !important;
  margin-bottom: var(--large) !important;
}
.nk-max, .nk-mbx, .nk-mvx {
  margin-bottom: 1.5rem !important;
  margin-bottom: var(--x-large) !important;
}
.nk-man, .nk-mhn, .nk-mln {
  margin-left: 0 !important;
  margin-left: var(--none) !important;
}
.nk-mas, .nk-mhs, .nk-mls {
  margin-left: 0.75rem !important;
  margin-left: var(--small) !important;
}
.nk-mam, .nk-mhm, .nk-mlm {
  margin-left: 1rem !important;
  margin-left: var(--medium) !important;
}
.nk-mal, .nk-mhl, .nk-mll {
  margin-left: 1.25rem !important;
  margin-left: var(--large) !important;
}
.nk-maxl, .nk-mtxl {
  margin-top: 1.5rem !important;
  margin-top: var(--x-large) !important;
}
.nk-maxxl, .nk-mtxxl {
  margin-top: 8var --none !important;
}
.nk-notify {
  position: fixed;
  bottom: 38px;
  right: -50px;
  background: #c44f7a;
  background: var(--color);
  color: #fff;
  font-size: 0.8em;
  z-index: 1;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  padding: 0 2.5rem;
  padding: 0 var(--spacer-large);
  pointer-events: none;
}
`;