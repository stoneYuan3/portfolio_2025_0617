// app/project/[id]/page.tsx
'use client' // Add this directive at the top

import { useEffect, useState } from 'react'
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'

const notion = new NotionAPI()

interface PageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: PageProps) {
  const [recordMap, setRecordMap] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchNotionPage() {
      try {
        const data = await notion.getPage('2178ed4da86380ccacadcb4321270219')
        setRecordMap(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchNotionPage()
  }, [])

  if (loading) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <div>Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <div>Error loading page: {error.message}</div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <NotionRenderer 
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
      />
    </div>
  )
}