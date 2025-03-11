import { useState } from "react";
import { Success } from "../../../component";

export const NetBanking = () => {
  const [open, setOpen] = useState(true);
  const [selectedBank, setSelectedBank] = useState("");

  const banks = [
    "HDFC Bank",
    "ICICI Bank",
    "State Bank of India",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "Punjab National Bank",
    "Bank of Baroda",
    "Yes Bank",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedBank) {
      alert("Please select a bank.");
      return;
    }
  };

  return (
    <>
      <Success open={open} setOpen={setOpen} />

      <div className="w-1/2 py-6 m-auto">
        <h3 className="uppercase text-lg font-semibold text-black-400 mb-4 text-center">
          Net Banking
        </h3>
        <form onSubmit={handleSubmit} className="m-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Select Your Bank
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md bg-white"
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              required
            >
              <option value="">-- Choose Bank --</option>
              {banks.map((bank, index) => (
                <option key={index} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-1/2 bg-blue-800 text-white py-3 rounded-md mt-4 text-lg cursor-pointer"
          >
            Proceed to Pay ₹1,200
          </button>
        </form>
      </div>
    </>
  );
};
