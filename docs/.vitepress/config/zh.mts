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
            text: 'LG',
            link: '/lg/what-is-lg'
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
                {text: '注释', link: '/guide/comment'},
                {text: '基本数据类型', link: '/guide/basic-types'},
                {text: '数组类型', link: '/guide/array'},
                {text: "变量", link: '/guide/variable'},
                {text: '条件语句', link: '/guide/condition-statement'},
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
            text: "LG",
            collapsed: true,
            items: [
                {text: "什么是LG", link: "/lg/what-is-lg"},
                {text: "什么是LG IR", link: "/lg/what-is-lg-ir"},
                {text: "IRModule", link: "/lg/ir-module"},
                {text: "IRConstantPool", link: "/lg/ir-constant-pool"},
                {text: "IRFunction", link: "/lg/ir-function"},
                {text: "IRStructure", link: "/lg/ir-structure"},
                {text: "IRType", link: "/lg/ir-type"},
                {text: "IRInstruction", link: "/lg/ir-instruction"},
                {text: "IROperand", link: "/lg/ir-operand"},
                {text: "IRControlFlowGraph", link: "/lg/ir-control-flow-graph"},
                {text: "IRField", link: "/lg/ir-field"},
                {text: "IRGlobalDataSection", link: "/lg/ir-global-data-section"},
                {text: "IRGlobalInitSection", link: "/lg/ir-global-init-section"},
                {text: "IRVisitor", link: "/lg/ir-visitor"},
                {text: "Generator", link: "/lg/generator"},
                {text: "LGenerator", link: "/lg/lgenerator"},
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