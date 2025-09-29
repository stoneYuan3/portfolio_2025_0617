import { visit } from 'unist-util-visit';
import { Node } from 'unist';

interface FileNode extends Node {
  url?: string;
}

// export function remarkImagePrefix(id:string) {
//   return () => {
//     return (tree: Node) => {
//       visit(tree, 'image', (node: ImageNode) => {
//         if (node.url && !node.url.startsWith('/image/')) {
//           node.url = `/images/articles/${id}/${node.url}`;
//         }
//       });
//     };
//   }
// }
export function remarkFilePrefix(id: string) {
  return () => {
    return (tree: Node) => {
      // Process images
      visit(tree, "image", (node: FileNode) => {
        if (node.url && !node.url.startsWith("/images/")) {
          node.url = `/images/articles/${id}/${node.url}`;
        }
      });

      // Process PDF links
      visit(tree, "link", (node: FileNode) => {
        if (
          node.url &&
          node.url.endsWith(".pdf") &&
          !node.url.startsWith("/files/")
        ) {
          node.url = `/images/articles/${id}/${node.url}`;
        }
      });
    };
  };
}
