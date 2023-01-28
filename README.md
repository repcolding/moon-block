# moon block

Работа с `BEM` блоками, в js реализации, гибкая
и удобная работа с модулями. Возможность `async/await`
загрузка библиотек для конкретных модулей. Зеркальная
работа с доступом к другим блокам

***Локальный модуль verno.digital***

# Установка

```shell
# Через npm
npm i @verno.digital/moon-block

# Через yarn
yarn add @verno.digital/moon-block
```

## Пример

```js
import { index } from '@verno.digital/moon-block'

const closeOthers = (others) => {
  for (const comp of others) {
    comp.close()
  }
}

index('.button', ({ block, others }) => {
  const open = () => {
    console.log('open')
  }

  const close = () => {
   console.log('close')
  }
  
  block.addEventListener('close', () => {
    open()
    closeOthers(others)
  })

  return {
    open,
    close
  }
})
```
