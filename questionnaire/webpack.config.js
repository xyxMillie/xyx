var webpack = require('webpack');
var path = require('path');
module.exports={
    devtool:'eval-source-map',
    entry:{                               //入口文件
        banner:'./js/banner.js',
        gender:'./js/gender.js',
        illness:'./js/illness.js',
        howFeel:'./js/howFeel.js',
        allergy:'./js/allergy.js',
        basicInfo:'./js/basicInfo.js'
    },
/*“path”仅仅告诉Webpack结果存储在哪里，
然而“publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值。*/
    output:{                              //输出文件
        path:'dist/',
        filename:'js/[name].js',
        publicPath:'../dist/'             //指向
    },
    module:{
        loaders:[
            {test:/\.css$/, loader:'style!css'},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            {test:/\.(png|jpg|gif)$/, loader:'url-loader?limit=8192&name=img/[name].[ext]'}
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
    ],
    devServer:{
        contentBase:"./html",  //本地服务器所加载的页面所在的目录
        colors:true,   //终端中输出结果为彩色
        inline:true,    //实时刷新
        historyApiFallback:true, //不跳转
        port:8081		//设置默认监听端口,默认8080
    }
};