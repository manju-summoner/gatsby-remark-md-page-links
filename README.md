# gatsby-remark-md-page-links
```markdown
You can create links to .md page by [relative file path](./README.md) instead of [url style link](../README/)
```

## How to use
```js:gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
          require.resolve("./plugins/gatsby-remark-md-page-links"),
      ],
    },
  },
],
```
or
```js:gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [
        require.resolve("./plugins/gatsby-remark-md-page-links"),
      ],
    },
  },
],
```