import { useEffect, useState } from 'react'

import fetchMockData from './api/fetchMockData'
import ContentArticle from './components/ContentArticle/ContentArticle'
import NavArticle from './components/NavArticle'
import { MockData } from './models/MockData'

function App() {
  const [data, setData] = useState<MockData>()

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchMockData())
    }

    fetchData()
  }, [])

  return (
    <main className="min-h-screen grid grid-cols-12">
      <nav className="col-span-3 bg-blue-200 p-6">
        <ul>
          {data?.defaultSpecification.tree?.map((article) => (
            <NavArticle article={article} />
          ))}
        </ul>
      </nav>

      <section className="col-span-9 p-6">
        {data?.defaultSpecification.tree?.map((article) => (
          <ContentArticle article={article} />
        ))}
      </section>
    </main>
  )
}

export default App
