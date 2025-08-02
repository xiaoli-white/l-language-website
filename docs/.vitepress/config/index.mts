import {defineConfig} from 'vitepress'
import zh from "./zh.mjs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "L Language",
    rewrites: {
        "zh/:param*": ":param*"
    },
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/logo-mini.png'
            }
        ]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: {src: '/logo-mini.png', width: 24, height: 24},

        socialLinks: [
            {icon: 'github', link: 'https://github.com/xiaoli-white/L-Language-Dev'}
        ],

        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    locales: {
        root: {
            label: '简体中文',
            lang: "zh",
            ...zh
        },
        en: {
            label: 'English',
            lang: "en",
        }
    },
    markdown: {
        math: true,
        image: {
            lazyLoading: true,
        }
    },
})
