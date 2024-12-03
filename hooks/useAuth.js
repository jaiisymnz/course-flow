import { useState, useEffect } from 'react';
import supabase from '@/lib/supabase';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getSession();  // Get the current user
      setUser(user);

      if (user) {
        // Fetch the user's role from the user_roles table using their email
        const { data, error } = await supabase
          .from('users')
          .select('role')
          .eq('email', user.email)
          .single();

        if (error) {
          setError(error.message);
          setRole(null);
        } else {
          setRole(data?.role); // Set the user's role
        }
      }

      setLoading(false);
    };

    checkUser();
  }, []);

  return { user, role, loading, error };
};
