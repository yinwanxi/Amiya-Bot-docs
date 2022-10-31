export default {
    '/develop/basic/': [
        {
            text: '开始使用',
            collapsible: true,
            items: [
                {text: '起步', link: '/develop/basic/index.md'},
                {text: '适配器选择', link: '/develop/basic/selectAdapter.md'},
                {text: '多账号', link: '/develop/basic/multipleAccounts.md'}
            ]
        },
        {
            text: '功能开发',
            collapsible: true,
            items: [
                {text: '注册消息响应', link: '/develop/basic/handlerDecorator.md'},
                {text: '接收消息', link: '/develop/basic/messageObject.md'},
                {text: '发送消息', link: '/develop/basic/chainObject.md'},
                {text: '发送 HTML 生成的图片', link: '/develop/basic/htmlConvert.md'},
                {text: '发送主动消息', link: '/develop/basic/activeMessage.md'}
            ]
        },
        {
            text: '监听',
            collapsible: true,
            items: [
                {text: '事件监听', link: '/develop/basic/handleEvents.md'},
                {text: '异常监听', link: '/develop/basic/handleException.md'}
            ]
        }
    ],
    '/develop/advanced/': [
        {
            text: '进阶开发',
            collapsible: true,
            items: [
                {text: '说明', link: '/develop/advanced/index.md'},
                {text: '生命周期', link: '/develop/advanced/lifeCycle.md'},
                {text: '日志模块', link: '/develop/advanced/logger.md'},
            ]
        },
        {
            text: '额外支持',
            collapsible: true,
            items: [
                {text: '数据库', link: '/develop/advanced/databaseSupport.md'},
                {text: 'HTTP服务器', link: '/develop/advanced/httpSupport.md'},
            ]
        }
    ],
    '/develop/plugin/': [
        {
            text: '准备',
            collapsible: true,
            items: [
                {text: '插件开发说明', link: '/develop/plugin/index.md'},
                {text: '环境准备', link: '/develop/plugin/env.md'},
            ]
        },
        {
            text: '开发',
            collapsible: true,
            items: [
                {text: '创建&编写插件', link: '/develop/plugin/dev.md'},
                {text: '插件生命周期', link: '/develop/plugin/life.md'},
                {text: '添加插件文档', link: '/develop/plugin/addDoc.md'},
                {text: '调试插件', link: '/develop/plugin/debug.md'},
            ]
        },
        {
            text: '发布',
            collapsible: true,
            items: [
                {text: '打包插件', link: '/develop/plugin/build.md'},
                {text: '发布到插件商店', link: '/develop/plugin/publish.md'},
            ]
        },
    ],
    '/guide/deploy/': [
        {
            text: '准备',
            collapsible: true,
            items: [
                {text: '部署AmiyaBot-demo-v6', link: '/guide/deploy/index.md'},
                {text: '选择你的运营方', link: '/guide/deploy/yourChoose.md'},
                {text: '开始部署', link: '/guide/deploy/getStarted.md'},
            ]
        },
        {
            text: '使用控制台',
            collapsible: true,
            items: [
                {text: '连接控制台', link: '/guide/deploy/console/index.md'},
                {text: '配置实例', link: '/guide/deploy/console/configure.md'},
                {text: '安装插件', link: '/guide/deploy/console/plugin.md'},
            ]
        },
        {
            text: '维护',
            collapsible: true,
            items: [
                {text: '如何更新', link: '/guide/deploy/maintain/upgrade.md'},
            ]
        },
        {
            text: '高级使用',
            collapsible: true,
            items: [
                {text: '说明', link: '/guide/deploy/advanced/index.md'},
                {text: '使用 Mysql', link: '/guide/deploy/advanced/mysql.md'},
            ]
        }
    ]
}
