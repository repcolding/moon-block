import { queryAll } from './utils/query-all'

export const moonBlock = (selector, cb) => {
  const listComponents = queryAll(selector).map(block => {
    const others = []

    return {
      others,
      methods: cb({block, others})
    }
  })

  for (const component of listComponents) {
    listComponents
      .filter(item => item !== component)
      .forEach(async item => {
        component.others.push(
          await item.methods
        )
      })
  }
}
