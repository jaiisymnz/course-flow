import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <form className="flex flex-col gap-10">
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
          </section>
          <button className="login-button bg-[#2F5FAC] font-[700] py-[18px] px-[32px] text-white rounded-[12px]">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
