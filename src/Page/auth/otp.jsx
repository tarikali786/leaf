import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie"; // Import js-cookie

export const EnterOTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedOtp = Cookies.get("otp");

    if (!storedOtp) {
      toast.error("OTP expired! Request a new one.");
      return;
    }

    if (otp === storedOtp) {
      toast.success("OTP Verified Successfully!");
      Cookies.remove("otp"); // Remove OTP after verification
      navigate(`/forgot-password`);
    } else {
      toast.error("Invalid OTP, try again.");
    }
  };

  return (
    <div className="flex flex-col items-center py-6">
      <div className="rounded-xl shadow-2xl sm:w-[440px] w-[320px]">
        <div className="px-4 py-6 w-full mt-6 form_section">
          <h2 className="text-2xl text-center text-black font-semibold">
            Enter the 6-digit code
          </h2>

          <form onSubmit={handleSubmit} className="mt-5">
            <TextField
              label="6-digit code"
              variant="filled"
              className="w-full border p-2 rounded-md"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              type="submit"
              className="bg-green-600 w-full mt-6 py-2 rounded-xl text-white"
            >
              Verify OTP
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};
