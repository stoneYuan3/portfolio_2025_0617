import { visit } from 'unist-util-visit';

export default function remarkImagePrefix() {
  return (tree: any) => {
    visit(tree, 'image', (node) => {
      if (node.url && !node.url.startsWith('/image/')) {
        node.url = `/images/projects/${node.url}`;
      }
    });
  };
}
