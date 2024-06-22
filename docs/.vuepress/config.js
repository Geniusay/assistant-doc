const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: "vdoing",
  title: "Assistant",
  description: 'Assistant 官方文档',
  base: "/assistant-docs/",
  markdown: {
    lineNumbers: true
  },
  head,
  themeConfig,
  plugins
}
