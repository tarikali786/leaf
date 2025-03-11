import { useState } from "react";
import { PaymentType } from "./payment-type";
import { CreditCard } from "./creditcard";
import { DebitCard } from "./debitcard";
import { NetBanking } from "./netbanking";
import { CashOnDelivery } from "./cod";

export const Payment = () => {
  const [value, setValue] = useState(0);

  return (
    <div className=" bg-[#f5f5f5] w-full flex gap-2">
      <PaymentType setValue={setValue} value={value} />

      {value === 0 && <CreditCard />}
      {value === 1 && <DebitCard />}
      {value === 2 && <NetBanking />}
      {value === 3 && <CashOnDelivery />}
    </div>
  );
};
