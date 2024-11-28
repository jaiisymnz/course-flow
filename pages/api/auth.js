import { createClient } from '@supabase/supabase-js'
import connectionPool from '@/utils/db'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {email, password, action } = req.body

    const newProfile = {
        ...req.body,
        created_at:new Date()
      }

    try {
      // ตรวจสอบ action เป็น 'signup'
      if (action !== 'signup') {
        return res.status(400).json({ error: 'Invalid action' })
      }

      const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

    // ถ้าเกิดข้อผิดพลาดในการดึงข้อมูลจากฐานข้อมูล
    if (fetchError && fetchError.code !== 'PGRST116') {
      return res.status(500).json({ error: 'Error checking email in database' })
    }

    // หากอีเมลมีอยู่ในฐานข้อมูลแล้ว
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists in our system' })
    }

      // สมัครสมาชิกผู้ใช้ด้วยอีเมลและรหัสผ่าน
      const { user, error } = await supabase.auth.signUp({ email, password })
      
      await connectionPool.query(
        `insert into users(name, date_of_birth, education_background, email, created_at)
         values($1, $2, $3, $4, $5) RETURNING *`,
        [
          newProfile.name,
          newProfile.date_of_birth,
          newProfile.education_background,
          newProfile.email,
          newProfile.created_at
        ]
      )

      if (error) {
        return res.status(400).json({ error: error.message })
      }

      // เพิ่มข้อมูลลงในตาราง 'profiles'
      // หากทุกอย่างสำเร็จ ส่งข้อความ success
      return res.status(200).json({ message: 'User registered successfully'})
    
    } catch (error) {
      console.error('Unexpected error:', error)
      return res.status(500).json({ error: 'Incomplete information' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
