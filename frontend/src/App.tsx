import { useEffect, useState } from 'react'

import fetchMockData from './api/fetchMockData'
import ContentArticle from './components/ContentArticle'
import NavigationArticle from './components/NavigationArticle'
import { MockData } from './models/MockData'
import { groupArticles } from './services/groupArticles'

function App() {
  const [data, setData] = useState<MockData>()

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchMockData())
    }

    fetchData()
  }, [])

  const topLevelArticles = data?.defaultSpecification.articles?.filter(
    (article) => article.parent === '-1'
  )

  const groupedArticles = groupArticles(
    data?.defaultSpecification.articles ?? []
  )

  return (
    <main className="min-h-screen grid grid-cols-12">
      <nav className="col-span-3 bg-blue-200 p-6">
        {topLevelArticles &&
          topLevelArticles.map((parent) => (
            <NavigationArticle
              key={parent.article_id}
              parent={parent}
              children={groupedArticles[parent.number] || []}
              groupedArticles={groupedArticles}
            />
          ))}
      </nav>

      <article className="col-span-9 p-6">
        {topLevelArticles &&
          topLevelArticles.map((parent) => (
            <ContentArticle
              key={parent.article_id}
              parent={parent}
              children={groupedArticles[parent.number] || []}
              groupedArticles={groupedArticles}
            />
          ))}
      </article>
    </main>
  )
}

export default App
