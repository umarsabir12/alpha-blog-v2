const { environment } = require('@rails/webpacker')
const webpack = require("webpack")
enviroment.plugins.append("Provide",new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['Popper.js','default']
}))
module.exports = environment