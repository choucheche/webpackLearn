const path = require('path');


module.exports = {
  entry: './src/index.js',
  //输入路径
  devtool: 'inline-source-map',
  //devtool: 'inline-source-map',如果代码编译错了，cmd会告诉你哪的错误
  /*网页自动加载*/
  devServer: {
  	contentBase: './dist',
  	//检测加载的路径

  	compress: true,
  	/*
  		当它被设置为true的时候对所有的服务器资源采用gzip压缩
  		采用gzip压缩的优点和缺点：
		优点：对JS，CSS资源的压缩率很高，可以极大得提高文件传输的速率，从而提升web性能
		缺点：服务端要对文件进行压缩，而客户端要进行解压，增加了两边的负载
  	*/
  	port: 9000,
  	//本地服务端口号

  	//host:'0.0.0.0',
  	//服务器主机号

  	/*当没有链接页面时，显示的404文件地址*/
  	historyApiFallback:{
	    rewrites:[
	    	{from:/./,to:'/404.html'}
	    ]
  	},
  	/*当没有链接页面时，显示的404文件地址 结束*/

  	// stats: "errors-only"
  	/*
  		当设置 stats: "errors-only" 时，
  		启动项目后，在cmd里只会显示有错误代码的文件,
  		不会再显示每个创建的文件，
  		如果需要创建的文件过多，cmd显示不下，可以使用这个
  	*/
  },
  /*网页自动加载 结束*/
  output: {
  //输出路径
    filename: 'bundle.js',
    //输出文件名
    path: path.resolve(__dirname, 'dist')
    //输出文件目录
  }
};