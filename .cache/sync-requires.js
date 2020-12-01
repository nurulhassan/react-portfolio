const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("G:\\Projects\\react-portfolio\\src\\templates\\post.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("G:\\Projects\\react-portfolio\\src\\templates\\tag.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("G:\\Projects\\react-portfolio\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("G:\\Projects\\react-portfolio\\src\\pages\\404.js"))),
  "component---src-pages-archive-js": hot(preferDefault(require("G:\\Projects\\react-portfolio\\src\\pages\\archive.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("G:\\Projects\\react-portfolio\\src\\pages\\index.js"))),
  "component---src-pages-pensieve-index-js": hot(preferDefault(require("G:\\Projects\\react-portfolio\\src\\pages\\pensieve\\index.js"))),
  "component---src-pages-pensieve-tags-js": hot(preferDefault(require("G:\\Projects\\react-portfolio\\src\\pages\\pensieve\\tags.js")))
}

