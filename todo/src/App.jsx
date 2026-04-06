import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState('')
  const [editID, setEditID] = useState(null)
  const [todo, setTodo] = useState([])

  // ADD or UPDATE
  function handleClick() {
    if (!data.trim()) return

    if (editID !== null) {
      // update logic
      const updatedTodo = todo.map((item) =>
        item.id === editID ? { ...item, title: data } : item
      )
      setTodo(updatedTodo)
      setEditID(null)
    } else {
      // add logic
      const newItem = {
        id: Date.now(),
        title: data,
      }
      setTodo([...todo, newItem])
    }

    setData('')
  }

  // SET DATA FOR EDIT
  function handleUpdate(item) {
    setData(item.title)
    setEditID(item.id)
  }

  // DELETE
  function handleDelete(id) {
    const filtered = todo.filter((item) => item.id !== id)
    setTodo(filtered)

    // if deleting the same editing item
    if (id === editID) {
      setEditID(null)
      setData('')
    }
  }

  return (
    <div>
      <h2>Todo Application</h2>

      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button onClick={handleClick}>
        {editID !== null ? "Update" : "Add"}
      </button>

      {todo.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <button onClick={() => handleUpdate(item)}>Update</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default App