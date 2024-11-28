import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Profile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const session = supabase.auth.getSession()
    setUser(session?.user || null)
  }, [])

  const handleLogout = async () => {
    try {
      await axios.post('/api/logout')
      alert('Logged out successfully')
    } catch (error) {
      alert('Logout failed')
    }
  }
  

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
