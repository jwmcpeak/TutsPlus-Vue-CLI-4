module.exports = {
    // chainWebpack: config => {
    //     config.entry('app').clear()
    //         .add('./src/app.js')
    //         .end();
    // },
    outputDir: './jwm-dist',
    assetsDir: './assets',
    pages: {
        index: {
            entry: 'src/pages/index/index.js'
        },
        guitars: {
            entry: 'src/pages/guitars/guitars.js',
            // filename: 'guitars-list.html',
            // template: 'public/list-page.html'
        }
    }
};