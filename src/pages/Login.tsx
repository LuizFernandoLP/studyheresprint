import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()

  function submit(e: React.FormEvent) {
    e.preventDefault()
    // mock login
    localStorage.setItem('studyhere_user', user)
    alert(`Logged in as ${user}`)
    navigate('/')
  }

  return (
    <section className="container">
      <h1>Log In</h1>
      <form onSubmit={submit} className="login-form">
        <label>
          Username
          <input value={user} onChange={(e) => setUser(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} required />
        </label>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit">Log In</button>
        </div>
      </form>
    </section>
  )
}
