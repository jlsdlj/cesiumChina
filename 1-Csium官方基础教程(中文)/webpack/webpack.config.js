
module.exports = {
   entry:'./a.js',
   output:{
   	  filename:'./b.js'
   },
   devtool:'source-map',
   module:{
      rules:[
          { test:/\.css$/, use:'css-loader'}
      ]
   }
};