
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import remarkImagePrefix from '@/lib/remark-image-prefix';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

//processing markdown file to html file
export const useMdFetcher = async (dir:string, id:string) => {

  const filePath = path.join(process.cwd(), dir, `${id}.md`);
  console.log(filePath)

  const markdown = fs.readFileSync(filePath, 'utf-8');
  
  const result = await remark()
    .use(remarkImagePrefix(id)) //convert image link
    .use(html)
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert Markdown to HTML
    .use(rehypeRaw) // 🐾 Allow raw HTML like <iframe>
    .use(rehypeStringify, { allowDangerousHtml: true }) // Serialize HTML to string
    .process(markdown);

  const contentHtml = result.toString();

  return contentHtml;
  
}