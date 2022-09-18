import { css } from 'lit';

export const wcStyles = css`
  :host {
    font-family: var(--base-font);
    background: var(--color--k-9);
    color: var(--slider-underline-text-color, #000);
    font-size: var(--font-size--large);
    display: block;
  }

  ul {
    display: flex;
    justify-content: center;
    margin: 3em auto;
    width: 50%;
  }

  a {
    margin: 0 var(--small);
    text-decoration: none;
  }

  li {
    position: relative;
    list-style: none;
  }
  li::after {
    content: "";
    position: absolute;
    bottom: calc(-1 * var(--small));
    height: 2px;
    background: var(--color--darker);
    transition: 0.16s all 0.025s;
    left: 100%;
    right: 0;
  }
  li:hover + li::after {
    left: 0;
    right: 100%;
  }
  li:hover::after {
    left: 0;
    right: 0;
  }  
`;