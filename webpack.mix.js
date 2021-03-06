let mix = require('laravel-mix')
const path = require('path')

/*
 * npm i jquery --save or yarn add jquery
 * commentout below code to enable juery autoloading
 * this allows you to use $() in all files.
 */

// mix.autoload({
//     jquery: ['$', 'window.jQuery', 'jQuery']
// });

//====set alias for isotope
mix.webpackConfig({
    resolve: {
        alias: {
            'masonry': 'masonry-layout',
            'isotope': 'isotope-layout',
            // custom aliases for easy reference
            'src': path.resolve(__dirname, 'src/'),
            'assets': path.resolve(__dirname, 'src/assets/'),
            'components': path.resolve(__dirname, 'src/components/'),
            'pages': path.resolve(__dirname, 'src/components/pages/'),
            'img': path.resolve(__dirname, 'src/assets/img/'),
        }
    },
    // https://github.com/JeffreyWay/laravel-mix/issues/936#issuecomment-331418769
    output: {
        //chunkFilename: mix.inProduction() ? 'js/[name].[chunkhash].js' : 'js/[name].js'
        chunkFilename:  'js/[name].[chunkhash].js'
    }
});

// Setup Autoprefixer
mix.options({
    postCss: [
        require('autoprefixer')(),
        /**
         * Automatically create rtl css
         * applies styles based on the 'dir' attribute on <html></html>
         * eg: <html dir="ltr"></html>
         * experimental, broken
         */
        // require('postcss-rtl')()
    ]
})

// ===public path
mix.setPublicPath('./dist')


// === copy index.html to dist
mix.copy('index.html', 'dist/')


// ===compile our main.js file
mix.js('src/main.js', '/')
    // Add any additional vendor modules that need to be cached
    // remove any unused libraries in the array as they will be included in the vendor bundle
    .extract(['vue', 'bootstrap-vue', 'animejs', 'axios'])


// set path for production link
// mix.setResourceRoot('/vuejs-admin/dist/')


// Disable all OS notifications
// mix.disableNotifications()


// Disable all Success notifications
// mix.disableSuccessNotifications()
