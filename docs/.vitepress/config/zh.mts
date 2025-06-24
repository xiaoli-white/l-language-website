import type {DefaultTheme} from "vitepress";

export default {
    lang: 'zh-Hans',

    themeConfig: {
        nav: nav(),

        sidebar: sidebar(),

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            level: "deep",
            label: '页面导航'
        },

        notFound: {
            title: '页面未找到',
            quote:
                '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
            linkLabel: '前往首页',
            linkText: '带我回首页'
        },
    }
}

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: '主页',
            link: '/'
        },
        {
            text: '指南',
            link: '/guide/introduction'
        },
        {
            text: '标准库',
            link: '/standard-library/runtime'
        },
        {
            text: '平台',
            link: '/platform/what-is-platform'
        },
    ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "指南",
            collapsed: true,
            items: [
                {text: '介绍', link: '/guide/introduction'},
                {text: '快速开始', link: '/guide/quick-start'},
                {text: '垃圾回收', link: '/guide/garbage-collection'},
            ]
        },
        {
            text: "标准库",
            collapsed: true,
            items: [
                {text: 'Runtime', link: "/standard-library/runtime"}
            ]
        },
        {
            text: '平台',
            collapsed: true,
            items: [
                {text: "什么是平台", link: '/platform/what-is-platform'},
                {
                    text: 'LVM',
                    collapsed: true,
                    items: [
                        {text: "什么是LVM", link: "/platform/lvm/what-is-lvm"},
                        {text: "字节码", link: "/platform/lvm/bytecode"}
                    ]
                }
            ]
        }
    ]
}