import supabase from "./supabase";

export async function getUserRole(req) {
    const { data: { session } } = await supabase.auth.api.getUserByCookie(req);
    
    if (!session) return null;
  
    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', session.user.email)
      .single();
  
    if (error || !data) return null;
  
    return data.role;
  }