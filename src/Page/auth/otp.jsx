import { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie

export const EnterOTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const email = localStorage.getItem("leafEmail");
  const leafUserid = localStorage.getItem("leafUserid");
  const hasFetched = useRef(false);
  const sendOtp = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/send-otp", {
        email: email,
      });

      if (res.status === 200) {
        const otpValue = res.data.otp;
        Cookies.set("otp", otpValue, { expires: 1 / 288 });
        toast.success("OTP sent successfully!");
      } else {
        toast.error("Failed to send OTP.");
      }
    } catch (error) {
      toast.error("Error sending OTP.");
      console.log(error);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      sendOtp();
      hasFetched.current = true;
    } 
  }, []);

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
      navigate(`/forgot-password/${leafUserid}`);
    } else {
      toast.error("Invalid OTP, try again.");
    }
  };

  function maskEmail(email) {
    return email.replace(
      /^(.)(.*)(@.*)$/,
      (_, first, middle, domain) => first + "****" + domain
    );
  }

  return (
    <div className="flex flex-col items-center py-6">
      <div className="rounded-xl shadow-2xl sm:w-[440px] w-[320px]">
        <div className="px-4 py-6 w-full mt-6 form_section">
          <h2 className="text-2xl text-center text-black font-semibold">
            Enter the 6-digit code
          </h2>
          <p className="text-center my-5">
            Check {maskEmail(`${email}`)} for a verification code.
          </p>

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

          <p className="text-black mt-5">
            Didn't receive the code?{" "}
            <button onClick={sendOtp} className="text-blue-500">
              Resend OTP
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
