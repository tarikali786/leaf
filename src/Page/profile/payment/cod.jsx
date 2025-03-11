import { useState } from "react";

export const CashOnDelivery = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isConfirmed) {
      alert("Please confirm Cash on Delivery option.");
      return;
    }
    alert("Order placed successfully with Cash on Delivery!");
  };

  return (
    <div className="w-1/2 py-6 m-auto">
      <h3 className="uppercase text-lg font-semibold text-black-400 mb-4 text-center">
        Cash on Delivery
      </h3>
      <form onSubmit={handleSubmit} className="m-auto text-center">
        <div className="flex gap-2 items-center justify-center mb-4">
          <input
            type="checkbox"
            id="cod"
            className="size-5 cursor-pointer"
            checked={isConfirmed}
            onChange={() => setIsConfirmed(!isConfirmed)}
          />
          <label
            htmlFor="cod"
            className="uppercase text-gray-500 text-lg cursor-pointer"
          >
            Select Cash on Delivery
          </label>
        </div>
        <button
          type="submit"
          className="w-1/2 bg-blue-800 text-white py-3 rounded-md text-lg cursor-pointer"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};
