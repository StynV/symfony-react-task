import { useEffect, useState } from 'react'

import fetchMockData from './api/fetchMockData'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchMockData())
    }

    fetchData()
  }, [])

  console.log(data)

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="bg-green-500">test</h1>
    </main>
  )
}

export default App
