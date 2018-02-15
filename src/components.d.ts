/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  TimeAgo as TimeAgo
} from './components/time-ago/time-ago';

declare global {
  interface HTMLTimeAgoElement extends TimeAgo, HTMLStencilElement {
  }
  var HTMLTimeAgoElement: {
    prototype: HTMLTimeAgoElement;
    new (): HTMLTimeAgoElement;
  };
  interface HTMLElementTagNameMap {
    "time-ago": HTMLTimeAgoElement;
  }
  interface ElementTagNameMap {
    "time-ago": HTMLTimeAgoElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "time-ago": JSXElements.TimeAgoAttributes;
    }
  }
  namespace JSXElements {
    export interface TimeAgoAttributes extends HTMLAttributes {
      append?: string;
      prepend?: string;
      seconds?: boolean;
      time?: Date | string  | number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
