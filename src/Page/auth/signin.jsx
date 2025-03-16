import { useEffect, useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../feature/leafSlice";
import { toast } from "react-toastify";
import { fetchUserData } from "../../helper/helper";
import { post } from "../../feature/api";

export const SignIn = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { loading } = useSelector((state) => state?.leaf?.user);

  useEffect(() => {
    const { access_leaf } = fetchUserData();
    if (access_leaf) {
      navigate("/");
    }
  }, []);
  const dispatch = useDispatch();
  const OnhandleChange = ({ target }) => {
    const { name, value } = target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData))
      .unwrap()
      .then((res) => {
        toast.success("SignIn successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`${error?.error?.message}` || "SignIn Faild!");
      });
  };

  
  return (
    <div className=" flex flex-col items-center py-6">
      <div className=" rounded-xl shadow-2xl sm:w-[440px] w-[320px]">
        <div className=" px-4 py-6 w-full mt-6 form_section">
          <h2 className="text-2xl text-center text-black font-semibold">
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="mt-5">
            <TextField
              label="Email "
              variant="filled"
              className="w-full border   border-white p-2 rounded-md outline-[var(--color-primary)]"
              name="email"
              required
              value={loginData?.email}
              onChange={OnhandleChange}
            />
            <TextField
              label="Password "
              variant="filled"
              className="w-full border  mt-1  border-white"
              name="password"
              required
              value={loginData?.password}
              onChange={OnhandleChange}
            />
            <div className="mt-4 text-sm font-semibold text-blue-500 ml-2">
              <Link to='/otp'>Forgot Password</Link>
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
          <p className="text-black mt-5">
            Don't have an account? <Link to="/signup">Sign-up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
