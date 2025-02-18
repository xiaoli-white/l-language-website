import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "L Language",
    description: "L Language Website",
    rewrites: {
        "zh/:param*":":param*"
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        outline: "deep",
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            },
            {
                text: '平台',
                link: "/platforms/",
                items: [
                    {
                        text: 'LVM',
                        link: "/platforms/lvm/",
                        collapsed: true,
                        items: [
                            {text: "字节码", link: "/platforms/lvm/bytecode"}
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    },
    locales: {
        zh: {
            label: "简体中文",
            lang: "zh-Hans",
        },
        en: {
            label: "English",
            lang: "en",
        },
    },
    markdown: {
        image: {
            lazyLoading: true,
        }
    },
})
