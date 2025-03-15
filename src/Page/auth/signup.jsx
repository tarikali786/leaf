import { useEffect, useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createUserData } from "../../feature/leafSlice";
import { fetchUserData } from "../../helper/helper";
export const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    age: "",
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.leaf.user);
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  useEffect(() => {
    const { access_leaf } = fetchUserData();
    if (access_leaf) {
      navigate("/");
    }
  }, []);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (String(user.phone).length !== 10) {
      toast.warn(" Please enter a valid 10-digit phone number");
      return;
    }

    dispatch(createUserData(user))
      .unwrap()
      .then((res) => {
        toast.success("Signup successful!");
        navigate("/address");
      })
      .catch((err) => {
        toast.error(` ${err?.error?.message || "Signup failed!"}`);
      });
  };

  return (
    <div className="  flex flex-col items-center py-6">
      <div className="sm:w-[440px]  w-[320px] bg-primaryw ">
        <div className=" shadow-2xl rounded-xl px-4 py-6 w-full form_section">
          <>
            <h2 className="text-2xl text-center text-black  font-semibold">
              Create Account
            </h2>

            <form onSubmit={handleSubmit} className="mt-5 ">
              <TextField
                type="text"
                label="Name "
                variant="filled"
                className="w-full border  border-white p-2 rounded-md outline-[var(--color-primary)]"
                name="name"
                required
                value={user?.name}
                onChange={handleChange}
                style={{ backgroundColor: "white" }}
              />

              <TextField
                label="Phone "
                type="number"
                variant="filled"
                className="w-full border  border-white p-2 rounded-md outline-[var(--color-primary)]"
                name="phone"
                required
                value={user?.phone}
                onChange={handleChange}
              />
              <TextField
                label="Email "
                type="email"
                variant="filled"
                className="w-full border   border-white p-2 rounded-md outline-[var(--color-primary)]"
                name="email"
                required
                value={user?.email}
                onChange={handleChange}
              />

              <div className="w-full flex justify-between items-center  rounded-md outline-[var(--color-secondry)]">
                <TextField
                  label="Password "
                  variant="filled"
                  className="w-full border  mt-1 border-white"
                  name="password"
                  required
                  value={user?.password}
                  onChange={handleChange}
                  type={passwordShown ? "text" : "password"}
                />
                {passwordShown ? (
                  <RemoveRedEyeIcon onClick={() => setPasswordShown(false)} />
                ) : (
                  <VisibilityOffIcon onClick={() => setPasswordShown(true)} />
                )}
              </div>

              <TextField
                label="Age"
                type="number"
                variant="filled"
                className="w-full border  mt-1 border-white p-2 rounded-md outline-[var(--color-primary)]"
                name="age"
                required
                value={user?.age}
                onChange={handleChange}
              />
              <button
                type="submit"
                className={`bg-primary cursor-pointer w-full mt-8 py-3 rounded-xl text-white ${
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
