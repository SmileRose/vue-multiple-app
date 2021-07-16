/*
* @Author: zhaohongmei
* @Date:   2021-07-16 14:25:56
* @Last Modified by:   zhaohongmei
* @Last Modified time: 2021-07-16 14:45:22
*/

const config = require("./projects.js");

let projectName = (!process.env.PROJECT_NAME || process.env.PROJECT_NAME.length === 0)
 ? 'all' : process.env.PROJECT_NAME;

module.exports = {
  ...config[projectName],
}
