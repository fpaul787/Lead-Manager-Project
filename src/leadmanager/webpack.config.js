// load babel loader
module.exports ={
    
    module:{
        rules:[
            {
                test: /\.js$/, // for any js file
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader" // allow to use babel to transpile our code
                }
            }
        ]
    }
}