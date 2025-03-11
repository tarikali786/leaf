import { loadStripe } from "@stripe/stripe-js";
import TextField from "@mui/material/TextField";
import { Success } from "../../../component";
import { useState } from "react";

export const CreditCard = () => {
  const [open, setOpen] = useState(true);

  const stripePromise = loadStripe(
    "pk_test_51NLfpWSGdaY5SfT3CFhW6bnCEMKOhbHXBqpC5Egbl8eIGXkZ4eIIyNPU0krWT0vtCVjERT5q72lPbc03p2mfMyIS00YMxJojrx"
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Success open={open} setOpen={setOpen} />

      <div onSubmit={handleSubmit} className=" w-1/2 py-6 m-auto ">
        <h3 className=" uppercase text-lg font-semibold text-black-400 mb-4  text-center">
          Card Info
        </h3>
        <form action="" className=" m-auto ">
          <TextField
            id="card-number"
            label="CARD NUMBER"
            variant="outlined"
            className="w-full bg-white "
            required
          />
          <div className="flex gap-4 my-4">
            <TextField
              id="exp-month"
              label="EXPIRY MONTH"
              variant="outlined"
              className="w-1/2 bg-white "
              required
            />
            <TextField
              id="exp-year"
              label="EXPIRY YEAR"
              variant="outlined"
              className="w-1/2 bg-white "
              required
            />
          </div>

          <TextField
            id="cvv"
            label="CVV"
            variant="outlined"
            required
            className="w-1/2 bg-white  "
          />
          <div className="my-4">
            <TextField
              id="name-of-the-card"
              label="NAME ON THE CARD"
              variant="outlined"
              className="w-full bg-white "
              required
            />
          </div>
          <div className="flex gap-2 items-cente mt-10">
            <input type="checkbox" name="" id="" className="size-5 mt-1" />
            <p className=" uppercase text-gray-500 text-lg">
              {" "}
              SAVE the bank details for faster payments ahead
            </p>
          </div>
          <button
            type="submit"
            className="w-1/2 bg-blue-800 text-white py-3 rounded-md mt-4 text-lg cursor-pointer"
          >
            Pay 1,200
          </button>
        </form>
      </div>
    </>
  );
};
