import { defineConfig } from 'astro/config';

// Wraps every Markdown table in a scroll container so wide tables
// scroll sideways on phones instead of shrinking the text.
function wrapTables() {
  return (tree) => {
    const visit = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        if (child.type === 'element' && child.tagName === 'table') {
          return {
            type: 'element',
            tagName: 'div',
            properties: { className: ['table-wrap'] },
            children: [child],
          };
        }
        visit(child);
        return child;
      });
    };
    visit(tree);
  };
}

export default defineConfig({
  // After the site is live, put its address here, e.g. 'https://susansu.com'
  // site: 'https://susan-portfolio.vercel.app',
  markdown: {
    rehypePlugins: [wrapTables],
  },
});
