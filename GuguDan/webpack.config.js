const path = require('path');

module.exports={
    name:'Gugudan-practice',
    mode:'development',//실서비스에서는 production으로 바꾸면 된다.
    devtool:'eval',//빠르게한다.

    //이것을 하면 뒤에 확장자명이 없어도 알아서 찾아준다.
    resolve:{
        extensions:['.js','.jsx']
    },

    //입력
    entry:{
        app:['./client']
    },

    module:{
        rules:[{
            test: /\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env', '@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties']
            } ,
        }],
    },
    //출력
    output:{
        path: path.join(__dirname, 'dist'),//경로를 알아서 합쳐준다.
        filename: 'app.js'
    }
};