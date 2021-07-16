/*
* @Author: zhaohongmei
* @Date:   2021-07-16 14:40:44
* @Last Modified by:   zhaohongmei
* @Last Modified time: 2021-07-16 14:44:31
*/
let path = require('path')
let glob = require('glob')
//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
  let entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function(entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    pathname = basename; // 正确输出js和html的路径

    entries[pathname] = {
      entry: 'src/' + tmp[0] + '/' + tmp[1] + '/main.js',
      template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
      title:  tmp[2],
      filename: tmp[2] //如project1.html
    };
  });
  return entries;
}
let pages = getEntry('./src/apps/**?/*.html');
pages['index'] = {
  // page 的入口
  entry: 'src/main.js',
  // 模板来源
  template: 'public/index.html',
  // 在 dist/index.html 的输出
  filename: 'index.html',
  // 当使用 title 选项时，
  // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  title: '公共首页',
  // 在这个页面中包含的块，默认情况下会包含
  // 提取出来的通用 chunk 和 vendor chunk。
  // chunks: ['chunk-vendors', 'chunk-common', 'index']
};

const config = {
  all: {
    pages: pages
  },
  project1: {
    pages: {
      index: {
        entry: "src/apps/project1/main.js",
        template: "src/apps/project1/index.html",
        filename: "index.html"
      }
    },
    outputDir: "dist/project1/"
  },
  projectB: {
    pages: {
      index: {
        entry: "src/apps/project2/main.js",
        template: "src/apps/project2/index.html",
        filename: "index.html"
      }
    },
    outputDir: "dist/project2/"
  }//偷懒不写了
};

module.exports = config;
