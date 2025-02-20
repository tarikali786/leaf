import { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
// import { post } from "../Helper";
// import { toast } from "react-toastify";

export const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const OnhandleChange = ({ target }) => {
    const { name, value } = target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Uncomment this section when API integration is ready
    // try {
    //   const res = await post("/account/account-login/", loginData);
    //   if (res.status === 200) {
    //     localStorage.setItem("otpAccessCode", res?.data?.access_token);
    //     toast.success(res?.data?.message);
    //     navigate("/verify-otp");
    //   } else {
    //     toast.error("Something went wrong, try again");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Something went wrong, try again");
    // } 

    setLoading(false);
  };

  return (
    <div className="sign-container flex flex-col items-center">
      <div className="sm:w-[440px] w-[320px]">
        <div className="border-2 border-white-400 rounded-xl px-4 py-6 w-full mt-6 form_section">
          <h2 className="text-2xl text-center text-white font-semibold">
            Sign In
          </h2>
          
          <form onSubmit={handleSubmit} className="mt-5">
            <div>
              <label htmlFor="email" className="text-white font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                required
                placeholder="john@gmail.com"
                onChange={OnhandleChange}
                className="w-full border mt-1 border-white-500 p-2 rounded-md outline-[var(--color-primary)]"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="text-white font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                required
                placeholder="******"
                onChange={OnhandleChange}
                className="w-full border mt-1 border-white-500 p-2 rounded-md outline-[var(--color-primary)]"
              />
            </div>

            <button
              type="submit"
              className={`bg-[var(--color-primary)] w-full cursor-pointer mt-6 py-2 rounded-xl text-white ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
          <p className="text-white mt-5">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
