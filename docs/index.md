---
layout: home

title: Vue Amazing UI
titleTemplate: Amazing UI Components Library

hero:
  name: Vue Amazing UI
  text: Amazing UI 组件库
  tagline: 基于 Vue3 + TypeScript + Vite 开发
  image:
    src: /amazing-logo.svg
    alt: Vue Amazing UI
  actions:
    - theme: brand
      text: Get Started
      link: /guide/features
    - theme: alt
      text: View on GitHub
      link: https://github.com/themusecatcher/vue-amazing-ui
    - theme: alt
      text: View on NPM
      link: https://www.npmjs.com/package/vue-amazing-ui
features:
  - icon: 💡
    title: 最新技术
    details: '采用 Vue@3.5.12 + TypeScript@5.6.3 + Vite@5.4.9 + Less@4.2.0 开发'
  - icon: 🚀
    title: 开箱即用
    details: 目前共包含 63 个基础 UI 组件以及 16 个工具函数，持续探索更新中...
  - icon: ⚡️
    title: 独有特色
    details: '所有组件均采用单文件组件 SFC，单独使用，也没问题！'
---

<Watermark fullscreen content="Vue Amazing UI" />

<script setup lang="ts">
import { onMounted } from 'vue'
import { fetchVersion } from './.vitepress/utils/fetchVersion'
import pkg from '../package.json'

const dependencies = pkg.dependencies
const devDependencies = pkg.devDependencies
function getVersion (target: string): string {
  for (let name of Object.keys(dependencies)) {
    if (name === target) {
      return dependencies[name].replace('^', '')
    }
  }
  for (let name of Object.keys(devDependencies)) {
    if (name === target) {
      return devDependencies[name].replace('^', '')
    }
  }
  return ''
}
function fetchDesc () {
  const featureDetails: any = document.querySelector('div.VPFeatures.VPHomeFeatures > div.container > div.items :first-child > div.VPLink.no-icon.VPFeature .box > p.details')
  const developDesc = `采用 Vue@${getVersion('vue')} + TypeScript@${getVersion('typescript')} + Vite@${getVersion('vite')} + Less@${getVersion('less')} 开发`
  featureDetails.textContent = developDesc
}
onMounted(() => {
  fetchVersion()
  fetchDesc()
})
</script>
