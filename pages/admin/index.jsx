import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
    <div login-page>
      <div className="login-card">
        <header>
          <h1>CourseFlow</h1>
          <h2>Admin Panel Control</h2>
        </header>
        <form>
        <section className="email-fill">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              placeholder="Enter Email"
              required
              className="w-full mt-1 px-4 py-3 border border-[#D6D9E4] rounded-[8px]"
            />
          </section>
          <section className="password-fill">
            <label htmlFor="pasword">Email</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
              placeholder="Enter Password"
              required
              className="w-full mt-1 px-4 py-3 border border-[#D6D9E4] rounded-[8px]"
            />
          </section>
          <button className="login-button">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
