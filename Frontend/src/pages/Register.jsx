import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const baseUrl = import.meta.env.VITE_BASE_URL
  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      const res = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, email, password }),
      })
      const data = await res.json()
      console.log(data)
      localStorage.setItem('token', data.token)
      alert('Register success!')
      navigate('/')
    } catch (err) {
      alert('Register Failed')
    }
  }

  return (
    <div className="p-10">
      <h2 className="mb-4 text-2xl">Register</h2>
      <input
        className="mb-2 w-full border p-2"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="mb-2 w-full border p-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mb-4 w-full border p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-green-600 px-4 py-2 text-white"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  )
}

export default Register
