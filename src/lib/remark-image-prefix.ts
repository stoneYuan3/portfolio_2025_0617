import { visit } from 'unist-util-visit';

export default function remarkImagePrefix(id:string) {
  return () => {
    return (tree: any) => {
      visit(tree, 'image', (node) => {
        if (node.url && !node.url.startsWith('/image/')) {
          node.url = `/images/articles/${id}/${node.url}`;
        }
      });
    };
  }
}
