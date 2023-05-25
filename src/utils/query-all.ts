const queryAll = (selector: string): Array<Element> => {
  return [...document.querySelectorAll(selector)]
}

export { queryAll }
