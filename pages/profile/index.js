import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '@/lib/supabase';
import Loading from '@/components/Loding';

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();//email auth

      if (!session) {
        setUser(null);
        setLoading(false); 
        return;
      }

      setUser(session.user);
      setLoading(false);

       
      const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('email', session.user.email)
          .single();  // ดึงข้อมูลของแถวที่ตรงกับอีเมลเดียว
  
        if (error) {
          console.error('Error fetching user data:', error);
        } else {
          setUserData(data);  // เก็บข้อมูลผู้ใช้จากฐานข้อมูล
        }
    };

    console.log("user is ",userData);
    checkSession();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/profile');
  };

  if (loading) {
    return <div className="absolute inset-0 flex items-center justify-center min-h-screen"><Loading /></div>;
  }

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome back, {user.email}!</h1>
            <div>
              <p>Name: {userData.name}</p>
              <p>Date of Birth: {userData.date_of_birth}</p>
              <p>Education: {userData.education_background}</p>
              <p>Role: {userData.role}</p> 
            </div>
          <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
            Log out
          </button>
        </>
      ) : (
        <>
          <h1>Hello, Guest!</h1>
          <button onClick={() => router.push('/login')} className="bg-blue-500 text-white py-2 px-4 rounded">
            Log in
          </button>
        </>
      )}
    </div>
  );
}
