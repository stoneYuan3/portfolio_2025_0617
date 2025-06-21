
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import remarkImagePrefix from '@/lib/remark-image-prefix';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params;
  console.log(id)
  const filePath = path.join(process.cwd(), 'src/markdown', `${id}.md`);
  console.log(filePath)

  const markdown = fs.readFileSync(filePath, 'utf-8');
  // const result = await remark().use(html).process(markdown);
  const result = await remark()
    .use(remarkImagePrefix)
    .use(html)
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert Markdown to HTML
    .use(rehypeRaw) // 🐾 Allow raw HTML like <iframe>
    .use(rehypeStringify, { allowDangerousHtml: true }) // Serialize HTML to string
    .process(markdown);
  
  const contentHtml = result.toString();
  
  return (
    <>
        <div>My Post: {id}</div>
        {/* <iframe src="https://wandering-castanet-8df.notion.site/ebd/2178ed4da86380ccacadcb4321270219" width="100%" height="700" /> */}
        <div className="article__body" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>

  )

}