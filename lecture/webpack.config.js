const path = require('path');
const webpack = require('webpack')


module.exports={
    name:'wordrelay-setting',
    mode:'development',//실서비스에서는 production으로 바꾸면 된다.
    devtool:'eval',//서비스시 hidden-source-map 사용

    //이것을 하면 뒤에 확장자명이 없어도 알아서 찾아준다.
    resolve:{
        extensions:['.js','.jsx']
    },

    //입력
    entry:{
        app:['./client']//./WordRealy.jsx 같은 경우는 이미 client.jsx에서 불러오기 때문에 여기서 불러오지 않아도 된다.
    },

    module:{//얘가 loader
        rules:[{
           test: /\.jsx?$/,
           loader:'babel-loader',
           options:{
               presets:[['@babel/preset-env',{//웹브라우저에 다양한 버전이 있는데, 최신문법을 못쓰는데 바벨에서 일해서
                                                //바벨의 작업량도 많아져서 점점느려지는데 원하는 타겟만 적을 수 있다.
                                                //github.browserslist 검색
                   targets: {
                       browsers:['> 1% in KR', 'last 2 chrome versions']
                   },
                   debug:true
               }],
                   '@babel/preset-react'
               ],
               plugins:['@babel/plugin-proposal-class-properties']
           } ,
        }],
    },

    plugins:[
        new webpack.LoaderOptionsPlugin({debug:true}),//
    ],
    //출력
    output:{
        path: path.join(__dirname, 'dist'),//경로를 알아서 합쳐준다.
        filename: 'app.js'
    }
};