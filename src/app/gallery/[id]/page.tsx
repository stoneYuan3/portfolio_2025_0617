// app/project/[id]/page.tsx
'use client'

import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'

const notion = new NotionAPI()
const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf')

interface PageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: PageProps) {

  console.log(params)

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </div>
  )
}