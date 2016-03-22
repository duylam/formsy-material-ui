module.exports = {
  entry: "./entry",
  output: {
    path: ".",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel", exclude: /node_modules/ }
    ]
  }
}