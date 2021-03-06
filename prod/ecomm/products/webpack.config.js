const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      // should not share the same name with the id tag in index.html as browser will create global variable for all id tag.
      filename: "remoteEntry.js",
      // define the filename here. This is the first file used by Host to access this project. It lists different modules that can be loaded from the Producs project.
      exposes: { "./ProductsIndex": "./src/bootstrap" },
      // The Host will use `ProductIndex` to access it.
      shared: ["faker"],
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
