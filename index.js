const visit = require('unist-util-visit');
module.exports = ({markdownAST, markdownNode}) => {
  const isIndex = markdownNode.fileAbsolutePath.endsWith('/index.mdx') || markdownNode.fileAbsolutePath.endsWith('/index.md');
  visit(markdownAST, 'link', node => {
    if (
      node.url &&
      !node.url.startsWith('//') &&
      !node.url.startsWith('http') &&
      !node.url.startsWith('https')
    ) {
        const basePath = node.url.startsWith('/') || isIndex ? '' : '../';
        node.url = node.url.replace(/(.*).mdx?(#.*)?$/, (match, path, hash) => {
          if(path.endsWith('/index')) 
            path = path.replace('/index', '');
            
          if(hash)
              return `${basePath}${path}/${hash}`
          else
              return `${basePath}${path}/`
        })
    }
  });

  return markdownAST;
};