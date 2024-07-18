const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'index.bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|jpeg|gif)$/i,
                type:'asset/resource'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index-dev.html'
        })
    ]
}