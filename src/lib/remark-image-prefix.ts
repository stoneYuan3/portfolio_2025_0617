import { visit } from 'unist-util-visit';
import { Node } from 'unist';

interface ImageNode extends Node {
  url?: string;
}

export default function remarkImagePrefix(id:string) {
  return () => {
    return (tree: Node) => {
      visit(tree, 'image', (node: ImageNode) => {
        if (node.url && !node.url.startsWith('/image/')) {
          node.url = `/images/articles/${id}/${node.url}`;
        }
      });
    };
  }
}
