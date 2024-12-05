const fetchMockData = async () => {
  try {
    const result = await fetch('http://127.0.0.1:8000/mock-data')
    const data = result.json()

    return data
  } catch (error) {
    console.error(error)
  }
}

export default fetchMockData
