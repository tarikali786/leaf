import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./checkoutform";
export const CreditCard = () => {
  const stripePromise = loadStripe(
    "pk_test_51NLfpWSGdaY5SfT3CFhW6bnCEMKOhbHXBqpC5Egbl8eIGXkZ4eIIyNPU0krWT0vtCVjERT5q72lPbc03p2mfMyIS00YMxJojrx"
  );
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm totalPrice={100} paymentIntentId={"e"} />
    </Elements>
  );
};
