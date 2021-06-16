import React from 'react'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/instruments/') // * <-- replace with your endpoint
      const data = await res.json()
      console.log(data)
      const res2 = await fetch('/api/instruments/1/')
      const data2 = await res2.json()
      console.log(data2)

    }
    getData()
  }, [] ) 

  return <h1>Hello World</h1>
}

export default App


