import { useEffect, useRef, useState } from 'react'
import { FixedSizeList } from 'react-window'
import ResizeObserver from 'resize-observer-polyfill'

import fetchMockData from './api/fetchMockData'
import ContentArticle from './components/ContentArticle/ContentArticle'
import NavArticle from './components/NavArticle/NavArticle'
import { MockData } from './models/MockData'

function App() {
  const ref = useRef(null)
  const [data, setData] = useState<MockData>()
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchMockData())
    }

    const el = ref.current
    if (!el) return

    function handleResize() {
      if (el) {
        const { height, width } = el.getBoundingClientRect()
        setHeight(height)
        setWidth(width)
      }
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(el)

    fetchData()
  }, [])

  const Row = ({ index }: { index: number }) =>
    data?.defaultSpecification.tree && (
      <ContentArticle article={data.defaultSpecification.tree[index]} />
    )

  return (
    <main className="min-h-screen grid grid-cols-12">
      <nav className="col-span-3 bg-blue-200 p-6">
        <ul>
          {data?.defaultSpecification.tree?.map((article) => (
            <NavArticle article={article} />
          ))}
        </ul>
      </nav>

      <section className="col-span-9 p-6" ref={ref}>
        {data?.defaultSpecification.tree && (
          <FixedSizeList
            height={height}
            width={width}
            itemCount={data.defaultSpecification.tree.length}
            itemSize={120}
            className="w-full"
          >
            {Row}
          </FixedSizeList>
        )}

        {/* {data?.defaultSpecification.tree?.map((article) => (
          <ContentArticle article={article} />
        ))} */}
      </section>
    </main>
  )
}

export default App
