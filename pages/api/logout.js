import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        return res.status(400).json({ error: error.message })
      }
      res.status(200).json({ message: 'Logged out successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
