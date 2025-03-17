import { useEffect, useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmailValue } from "../../feature/leafSlice";
import { toast } from "react-toastify";
import { fetchUserData } from "../../helper/helper";
import { post } from "../../feature/api";

export const EnterEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  useEffect(() => {
    const { access_leaf } = fetchUserData();
    if (access_leaf) {
      navigate("/");
    }
  }, []);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setEmailValue(email));
    navigate("/otp");
  };

  return (
    <div className=" flex flex-col items-center py-6">
      <div className=" rounded-xl shadow-2xl sm:w-[440px] w-[320px]">
        <div className=" px-4 py-6 w-full mt-6 form_section">
          <h2 className="text-2xl text-center text-black font-semibold">
            Enter Your Email
          </h2>

          <form onSubmit={handleSubmit} className="mt-5">
            <TextField
              label="Email "
              variant="filled"
              className="w-full border   border-white p-2 rounded-md outline-[var(--color-primary)]"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              className={`bg-[var(--color-primary)] w-full cursor-pointer mt-6 py-2 rounded-xl text-white`}
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
