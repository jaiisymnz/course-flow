import { AddCourse } from "@/components/admin/AddCourse";
import SideBar from "@/components/admin/AdminSidebar";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import supabase from "@/lib/supabase";

const AddCoursePage = () => {
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

    checkSession();
  }, [router]);
  console.log(user)

  return (
    <div className="flex">
      <SideBar />
      <AddCourse className="" />
    </div>
  );
};

export default AddCoursePage;
