interface props {
  block: HTMLElement,
  others: Array<object>
}

type callback = ({}: props) => object

declare function moonBlock (selector: string, cb: callback)

export {
  moonBlock
}
