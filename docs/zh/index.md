---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: L Language
  text: 一个高效的编译型语言
#  tagline: 既可开发跨平台应用，又可开发底层应用
  tagline: 具有极高的拓展性与自由度
  image:
    src: /logo.png
    alt: L Language
  actions:
    - theme: brand
      text: 什么是L Language
      link: /guide/introduction
    - theme: alt
      text: 快速开始
      link: /guide/quick-start

features:
  - title: 高效且灵活的安全内存管理
    details: 基于ARC的垃圾回收，内存管理简单易用。同时赋予开发者指针权限，允许开发者对内存进行任意操作。
  - title: 与其它语言的动态库兼容
    details: 将其它语言编译为动态库后，可以通过Native Library API实现互操作。
  - title: 开放的插件系统
    details: 可通过插件的形式为L Compiler添加新的功能，插件自由度极高。
---

