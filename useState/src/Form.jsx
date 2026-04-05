import React, { useState } from 'react'

const Form = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: ""
  })
  function handleChange(e) {
    e.preventDefault()
    if (data.password.length < 6) {
      alert('password is too short')
      return
    }
    if (data.name.length < 2) {
      alert('Name is too short')
      return
    }
    if (!data.email.includes('@')) {
      alert('email is invlaid')
      return
    }
    localStorage.setItem('data', JSON.stringify(data))
    alert('form submitted successfully')
    return
  }
  return (
    <div>
      <form onSubmit={handleChange}>
        <input type="text" placeholder='Enter Name' value={data.name} onChange={(e) => setdata(prev => ({ ...prev, name: e.target.value }))} />
        <input type="email" placeholder='Enter Email' value={data.email} onChange={(e) => setdata(prev => ({ ...prev, email: e.target.value }))} />
        <input type="password" placeholder='Enter password' value={data.password} onChange={(e) => setdata(prev => ({ ...prev, password: e.target.value }))} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
