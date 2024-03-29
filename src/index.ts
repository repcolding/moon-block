import { queryAll } from './utils/query-all'

interface Props {
  block: Element
  others: Array<object>
}

type Callback = ({}: Props) => object

export const moonBlock = (selector: string, cb: Callback) => {
  const listComponents = queryAll(selector).map((block) => {
    const others = []

    return {
      others,
      methods: cb({ block, others })
    }
  })

  for (const component of listComponents) {
    const filterList = listComponents.filter((item) => item !== component)

    filterList.forEach(async (otherComponent) =>
      component.others.push(await otherComponent.methods)
    )
  }
}
