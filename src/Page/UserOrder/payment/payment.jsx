import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentOptions from "./payment-options";
import useGeoLocation from "react-ipgeolocation";
import axios from "axios";
const stripePromise = loadStripe(
  "pk_test_51NLfpWSGdaY5SfT3CFhW6bnCEMKOhbHXBqpC5Egbl8eIGXkZ4eIIyNPU0krWT0vtCVjERT5q72lPbc03p2mfMyIS00YMxJojrx"
);

export const Payment = () => {
  const location = useGeoLocation();
  const [currency, setCurrency] = useState(null);
  const fetchCountryCurrency = async () => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/alpha/${location.country}`
      );

      if (res.data && res.data.length > 0) {
        const currencyCode = Object.keys(res.data[0].currencies)[0];
        setCurrency(currencyCode.toLowerCase());
        console.log("Currency:", currencyCode);
      } else {
        console.error("Invalid API response");
      }
    } catch (error) {
      console.error("Error fetching currency:", error);
    }
  };

  useEffect(() => {
    if (location.country) {
      fetchCountryCurrency();
    }
  }, [location]);

  return (
    <div className=" bg-[#f5f5f5] w-full flex gap-2">
      <Elements stripe={stripePromise}>
        <PaymentOptions currency={currency} />
      </Elements>
    </div>
  );
};
