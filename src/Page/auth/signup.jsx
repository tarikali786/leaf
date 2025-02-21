import { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import axios from "axios";
// import { toast } from "react-toastify";
<div className="mt-4"></div>;
export const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    age: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  // Handle form input changes
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/signup",
        { user }
      );
      //   toast.success(response.data.message);
      localStorage.setItem("userAccountid", response?.data?.user?.id);
      navigate("/verify-otp");
    } catch (error) {
      console.error(error);
      //   toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" sign-container flex flex-col items-center">
      <div className="sm:w-[440px]  w-[320px] ">
        <div className="border-2 border-white-400 rounded-xl px-4 py-6 w-full form_section">
          <>
            <h2 className="text-2xl text-center text-white font-semibold">
              Create Account
            </h2>

            {/* <p className="text-white text-center mt-4 dividerCard ">Or </p> */}

            <form onSubmit={handleSubmit} className="mt-5">
              <div>
                <label htmlFor="name" className="text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.name}
                  placeholder="John Doe"
                  required
                  onChange={handleChange}
                  className="w-full border  mt-1 border-white p-2 rounded-md outline-[var(--color-primary)]"
                />
              </div>
              <div className="my-4">
                <label htmlFor="phone" className="text-white">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={user?.phone}
                  placeholder="0000000000"
                  required
                  onChange={handleChange}
                  className="w-full border border-white p-2  mt-1 rounded-md outline-[var(--color-primary)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  placeholder="john@gmail.com"
                  required
                  onChange={handleChange}
                  className="w-full border border-white p-2 mt-1 rounded-md outline-[var(--color-secondry)]"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="text-white">
                  Your Password
                </label>
                <div className="w-full flex justify-between border border-white p-2 mt-1 rounded-md outline-[var(--color-secondry)]">
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    value={user?.password}
                    placeholder="*****"
                    required
                    onChange={handleChange}
                    className="w-full border-none outline-none bg-transparent text-white"
                  />
                  {passwordShown ? (
                    <RemoveRedEyeIcon onClick={() => setPasswordShown(false)} />
                  ) : (
                    <VisibilityOffIcon onClick={() => setPasswordShown(true)} />
                  )}
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="text-white">
                  Your Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={user?.email}
                  placeholder="24"
                  required
                  onChange={handleChange}
                  className="w-full border border-white p-2 mt-1 rounded-md outline-[var(--color-secondry)]"
                />
              </div>
              <button
                type="submit"
                className={`bg-[var(--color-primary)] w-full mt-8 py-3 rounded-xl text-white-500 ${
                  loading && "cursor-not-allowed"
                }`}
              >
                {loading ? "Loading.." : "Sign Up"}
              </button>
            </form>
            <p className="text-white mt-5">
              Already have an account? <Link to="/sign-in">Sign in</Link>
            </p>
          </>
        </div>
      </div>
    </div>
  );
};
