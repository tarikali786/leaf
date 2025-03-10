import React, { useState } from "react";
import { PaymentType } from "./payment-type";
import { CreditCard } from "./creditcard";

export const Payment = () => {
  const [value, setValue] = useState(0);

  return (
    <div className=" bg-[#f5f5f5] w-full flex gap-2">
      <PaymentType setValue={setValue} value={value} />

      {value === 0 && <CreditCard />}
    </div>
  );
};
