interface ISidebarElement extends HTMLElement {}
interface IMenuButtonElement extends HTMLElement {}
interface IEventTarget extends EventTarget {
  composedPath(): EventTarget[];
}

export type {ISidebarElement, IMenuButtonElement, IEventTarget};
