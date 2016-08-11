// https://github.com/shelljs/shelljs
require('shelljs/global')


env.NODE_ENV = 'production'


var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')


  var gulp = require('gulp')
  var fs = require('fs')
  var gulp = require('gulp')
  var GulpSSH = require('gulp-ssh')
  var config = {
    host: '114.55.176.124',
    port: 22,
    username: 'root',
    privateKey: fs.readFileSync('./id_rsa')
  }

  var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: config
  })
  gulp.src(['./dist/**']).pipe(gulpSSH.dest('/wowdsgn/admin-web/dist'))

})




