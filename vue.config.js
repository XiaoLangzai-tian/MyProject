    const path =require('path');

    module.exports={
        // 跨域
        devServer:{
            proxy:{
                '/api':{
                    target:"http://39.97.33.178",
                    changeOrigin:true
                }
            }
        },
        //别名配置
        configureWebpack:{
            resolve:{
                alias:{
                    //@代表./src
                    "@":path.join(__dirname,"./src"),
                    "@api":path.join(__dirname,"./src/api"),
                    "@common":path.join(__dirname,"./src/common"),
                    "@components":path.join(__dirname,"./src/components"),
                    "@pages":path.join(__dirname,"./src/pages"),
                    "@router":path.join(__dirname,"./src/touter"),
                    "@store":path.join(__dirname,"./src/store"),
                    "@utils":path.join(__dirname,"./src/utils"),
                    
                }
            }
        }
    }