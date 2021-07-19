import { JSX, createEffect, createSignal, onCleanup, Accessor } from "solid-js";

export const toStyleObject = (style: string | JSX.CSSProperties) => {
  if (typeof style === "object") {
    return style;
  }
  const styleObject: JSX.CSSProperties = {};
  (style || "").replace(/([\w-]+)\s*:\s*([^;]+)/g, (_, prop, value) => {
    styleObject[prop] = value;
    return "";
  });
  return styleObject;
};

export const composeStyles = (...styles) =>
  Object.assign({}, ...styles.map(toStyleObject));

export const getNearestNode = (
  target: EventTarget,
  name: string
): Node | undefined => {
  let nearest = target as Node;
  while (nearest && nearest.nodeName !== name) {
    nearest = nearest.parentNode;
  }
  return nearest;
};

export const maxRandom = 8;
let lastItem = 0;
export const getRandom = () => {
  const nextItem =
    1 + Math.floor(Math.random() * (maxRandom - (lastItem ? 1 : 0)));
  lastItem = lastItem ? nextItem + (nextItem === lastItem ? 1 : 0) : nextItem;
  return lastItem;
};

export const useDarkMode = (localStorageKey = 'COLOR_SCHEME', initial = false) => {
  const mediaQueryPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const localStoragePrefersDark = /^(true|false)$/.test(window.localStorage.getItem(localStorageKey))
    ? RegExp.$1 === "true"
    : null;
  const darkModeSignal = createSignal((localStoragePrefersDark ?? mediaQueryPrefersDark.matches) || initial);

  const colorSchemeChangeHandler = (ev: MediaQueryListEvent) => { darkModeSignal[1](ev.matches) }
  mediaQueryPrefersDark.addEventListener('change', colorSchemeChangeHandler);
  onCleanup(() => {
    mediaQueryPrefersDark.removeEventListener('change', colorSchemeChangeHandler);
  });
  
  createEffect(() => {
    const darkMode = darkModeSignal[0]();
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem(localStorageKey, darkMode.toString());
  });

  return darkModeSignal;
}