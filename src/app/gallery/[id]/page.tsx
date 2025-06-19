

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params
  return (
    <>
        <div>My Post: {id}</div>
        <iframe src="https://wandering-castanet-8df.notion.site/ebd/2178ed4da86380ccacadcb4321270219" width="100%" height="700" />
    </>

  )

}