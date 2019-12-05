
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // 跨项目公用部分
                'assets': '@/assets',
                'img': '@/assets/img',
                'css': '@/assets/css',
                'common': '@/components/common',
                // 本项目公用部分
                'content': '@/components/content',

                // view视图的快捷入口
                'home': '@/views/home',
                'category': '@/views/category',
                'cart': '@/views/cart',
                'profile': '@/views/profile',
            }
        }
    }
}