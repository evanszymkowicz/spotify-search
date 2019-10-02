const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-js": hot(preferDefault(require("/Users/evanwolfszy/Projects/2019/gatsby-bootcamp-project-master/src/templates/page.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/evanwolfszy/Projects/2019/gatsby-bootcamp-project-master/src/templates/tags.js"))),
  "component---src-templates-img-template-js": hot(preferDefault(require("/Users/evanwolfszy/Projects/2019/gatsby-bootcamp-project-master/src/templates/img-template.js"))),
  "component---src-templates-img-js": hot(preferDefault(require("/Users/evanwolfszy/Projects/2019/gatsby-bootcamp-project-master/src/templates/img.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/evanwolfszy/Projects/2019/gatsby-bootcamp-project-master/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/evanwolfszy/Projects/2019/gatsby-bootcamp-project-master/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/evanwolfszy/Projects/2019/gatsby-bootcamp-project-master/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/evanwolfszy/Projects/2019/gatsby-bootcamp-project-master/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/evanwolfszy/Projects/2019/gatsby-bootcamp-project-master/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/evanwolfszy/Projects/2019/gatsby-bootcamp-project-master/src/pages/index.js"))),
  "component---src-pages-test-js": hot(preferDefault(require("/Users/evanwolfszy/Projects/2019/gatsby-bootcamp-project-master/src/pages/test.js")))
}

