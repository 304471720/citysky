/**
 * require()是node.js提供的函数，可以让你引入其他模块以调用模块的函数和变量，
 * 默认下node.js会在$NODE_PATH和目前js所在目录下的node_modules文件夹下去寻找模块，
 * express.js继承自connect模块，所以如果你的node_modules文件夹下没有connect模块也是不行的。
 */
var express = require('express');
var http = require('http');
var path = require('path');
var ejs = require('ejs');
var routes = require('./routes/routes.js');

var app = express();

// 设置端口
app.set('port', process.env.PORT || 3000);

/**
 * 设置views文件夹，即模板文件夹，__dirname是node.js里面的全局变量，
 * 即取得执行的js所在的路径，另外__dirname是目前执行的js文件名。
 */
app.set('views', path.join(__dirname, 'views'));

/**
 * 注册模板引擎用来处理html扩展名的文件
 */
app.engine('.html', ejs.__express);

/**
 * 设置express.js所使用的render engine。
 */
app.set('view engine', 'html');

//设置网站favicon.icon，放在这里是为了不让这种请求记录在日志中
app.use(express.favicon());


app.use(express.logger('dev'));

/**
 * bodyParser()是express提供的一个中间件，支持urlencoded，multipart,json三种表单数据格式
 * 此处可以将client提交过来的post请求放入request.body中。
 */
app.use(express.bodyParser());

/**
 * express.methodOverride()也是Connect內建的，可以协助处理POST请求伪装PUT、DELETE和其他HTTP methods。
 */
app.use(express.methodOverride());

/**
 * 存储了所有的被HTTP verb定义路由。
 */
app.use(app.router);

/**
 *  express.static()也是一个Connect內建的中间件，
 * 用来处理静态的requests，例如css、js、img文件等。
 * 所以static()里面指定的文件夹中的文件会直接作为静态资源吐出来。
 */
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));

// 开发环境
if ('development' == app.get('env')) {

  app.use(express.errorHandler());

// 生产环境
} else if('production' == app.get('env')){

// 所有环境
} else {

}

// 路由控制
routes(app);

// 启动及端口
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
