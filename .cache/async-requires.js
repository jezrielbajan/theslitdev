// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/JEZRIEL/Desktop/activ/theslitdev/src/templates/blog-post.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/JEZRIEL/Desktop/activ/theslitdev/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/JEZRIEL/Desktop/activ/theslitdev/.cache/json/layout-index.json"),
  "hi-folks.json": require("gatsby-module-loader?name=path---hi-folks!/Users/JEZRIEL/Desktop/activ/theslitdev/.cache/json/hi-folks.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/Users/JEZRIEL/Desktop/activ/theslitdev/.cache/json/hello-world.json"),
  "my-second-post.json": require("gatsby-module-loader?name=path---my-second-post!/Users/JEZRIEL/Desktop/activ/theslitdev/.cache/json/my-second-post.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/JEZRIEL/Desktop/activ/theslitdev/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/JEZRIEL/Desktop/activ/theslitdev/.cache/layouts/index.js")
}