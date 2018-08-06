// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/JEZRIEL/Desktop/activ/theslitdev/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/JEZRIEL/Desktop/activ/theslitdev/src/templates/blog-post.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/JEZRIEL/Desktop/activ/theslitdev/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/JEZRIEL/Desktop/activ/theslitdev/.cache/json/layout-index.json"),
  "hi-folks.json": require("/Users/JEZRIEL/Desktop/activ/theslitdev/.cache/json/hi-folks.json"),
  "hello-world.json": require("/Users/JEZRIEL/Desktop/activ/theslitdev/.cache/json/hello-world.json"),
  "my-second-post.json": require("/Users/JEZRIEL/Desktop/activ/theslitdev/.cache/json/my-second-post.json"),
  "index.json": require("/Users/JEZRIEL/Desktop/activ/theslitdev/.cache/json/index.json")
}