import React, { useEffect, useState } from 'react'

const Api = () => {
  const [tableData, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()

        setData(data)
      } catch (err) {
        setError("Failed to fetch data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  
  const keys = tableData.length ? Object.keys(tableData[0]) : []

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {tableData.map((item) => (
          <tr key={item.id}>
            {keys.map((key) => (
              <td key={key}>
                {typeof item[key] === "object"
                  ? JSON.stringify(item[key])
                  : item[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Api