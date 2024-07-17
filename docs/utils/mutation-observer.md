# DOM监听 useMutationObserver<BackTop />

<br/>

*使用 `MutationObserver` 观察 `DOM` 元素的变化的组合式函数*

::: details Show Source Code

```ts
/**
 * 组合式函数
 * 使用 MutationObserver 观察 DOM 元素的变化
 *
 * 该函数提供了一个便捷的方式来订阅 DOM 元素的变动，当元素发生指定的变化时，调用提供的回调函数。
 * 使用者可以指定要观察的一个或多个 DOM 元素，以及观察的选项和回调函数。
 *
 * @param target 要观察的DOM元素或元素数组，可以是 ref 引用，也可以是 DOM 元素本身
 * @param callback 当观察到变化时调用的回调函数
 * @param options 观察选项，默认为空对象；例如:
 *  subtree: 是否监听以 target 为根节点的整个子树，包括子树中所有节点的属性
 *  childList: 是否监听 target 节点中发生的节点的新增与删除
 *  attributes: 是否观察所有监听的节点属性值的变化
 *  attributeFilter: 声明哪些属性名会被监听的数组；如果不声明该属性，所有属性的变化都将触发通知
 */
export function useMutationObserver(target: Ref | Ref[] | HTMLElement | HTMLElement[], callback: MutationCallback, options = {}): void {
  let observer: MutationObserver | undefined
  const targets = computed(() => {
    const targetValue = toValue(target)
    if (targetValue) {
      return Array.isArray(targetValue) ? targetValue : [targetValue]
    }
    return []
  })
  // 定义清理函数，用于断开 MutationObserver 的连接
  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = undefined
    }
  }
  // 监听 targets 的变化，当 targets 变化时，重新建立 MutationObserver 观察
  watch(
    () => targets.value,
    (newTargets) => {
      cleanup()
      if (newTargets.length) {
        observer = new MutationObserver(callback)
        newTargets.forEach((element: HTMLElement) => observer!.observe(element, options))
      }
    },
    {
      immediate: true, // 立即触发回调，以便初始状态也被观察
      flush: 'post'
    }
  )
  // 在组件卸载前清理 MutationObserver
  onBeforeUnmount(() => cleanup())
}
```

:::

## 基本使用

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useMutationObserver } from 'vue-amazing-ui'

const defaultSlotsRef = ref()
// 监听 defaultSlotsRef DOM 变化
const callback = (mutationsList: any, observer: any) => {
  console.log('mutationsList', mutationsList)
  console.log('observer', observer)
}
const options = { childList: true, attributes: true, subtree: true }
useMutationObserver(defaultSlotsRef, callback, options)
</script>
<template>
  <div ref="defaultSlotsRef">
    <slot></slot>
  </div>
</template>
```

## Params

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
target | 要观察的 `DOM` 元素或元素数组，可以是 `ref` 引用，也可以是 `DOM` 元素本身 | Ref &#124; Ref[] &#124; HTMLElement &#124; HTMLElement[] | - | true
callback | 当观察到变化时调用的回调函数 | MutationCallback | - | true
options | 观察选项，默认为空对象，[参考文档](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver/observe#attributes) | object | {} | true