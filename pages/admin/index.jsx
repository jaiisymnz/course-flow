import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import supabase from "@/lib/supabase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const { data: user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message || "invalid credentials");
        return;
      }

      if (user) {
        const { data, error: roleError } = await supabase
          .from("users")
          .select("role")
          .eq("email", email)
          .single();

        if (data.role === "admin") {
          alert("admin log in succesfully");
          router.push("/admin/course_list");
        } else {
          alert("You do not have permission to access the admin panel.");
        }
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred");
    }
  };

  

  return (
    <div className="login-page h-screen flex justify-center  bg-gradient-to-bl from-[#95BEFF] to-[#0040E5] ">
      <div className="login-card w-[566px] h-[568px] bg-white pt-[60px] pb-[80px] px-[60px] mt-[150px] flex flex-col gap-[46px] rounded-[8px]">
        <header className="title flex flex-col items-center">
          <h1 className=" bg-gradient-to-r from-[#95BEFF] to-[#0040E5] text-transparent bg-clip-text text-[48px] font-bold">
            CourseFlow
          </h1>
          <h2 className="text-[24px] font-[700] text-[#646D89]">
            Admin Panel Control
          </h2>
        </header>
        <form onSubmit={handleLogin} className="flex flex-col gap-10">
          <section className="email-fill">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email"
              required
              className="w-full mt-1 px-4 py-3 border border-[#D6D9E4] rounded-[8px]"
            />
          </section>
          <section className="password-fill">
            <label htmlFor="pasword">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter Password"
              required
              className="w-full mt-1 px-4 py-3 border border-[#D6D9E4] rounded-[8px]"
            />

            {error && (
              <div className="text-center text-red-600 mt-4">{error}</div>
            )}
          </section>
          <button
            type="submit"
            className="login-button bg-[#2F5FAC] font-[700] py-[18px] px-[32px] text-white rounded-[12px]"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
