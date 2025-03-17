import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { post } from "../../../feature/api";
import axios from "axios";

const PaymentOptions = ({ currency }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [canUseGPay, setCanUseGPay] = useState(false);
  const [paymentIntent, setpaymentIntent] = useState("");
  const data = {
    currency: currency,
    amount: 50000,
  };

  const createPaymentIntent = async () => {
    try {
      const res = axios.post(
        "http://127.0.0.1:5000/create-payment-intent",
        data
      );
      setpaymentIntent(res?.data?.clientSecret);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    createPaymentIntent();
  }, []);

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "IN",
      currency: currency,
      amount: 50000,
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
        setCanUseGPay(true);
      } else {
        console.log("Google Pay is not available");
      }
    });
  }, [stripe]);

  const handleCardPayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Payment Successful! 🎉");
      console.log(paymentMethod);
    }
  };

  return (
    <div className="w-full md:w-3/4  m-auto py-6 px-4 space-y-4 ">
      {/* Debit & Credit Card */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Debit / Credit Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleCardPayment}>
            <CardElement options={{ hidePostalCode: true }} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Pay with Card
            </Button>
          </form>
        </AccordionDetails>
      </Accordion>

      {/* Google Pay */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Google Pay</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {canUseGPay && paymentRequest ? (
            <Button
              variant="contained"
              color="success"
              onClick={() => paymentRequest.show()}
            >
              Pay with Google Pay
            </Button>
          ) : (
            <Typography>Google Pay is not available</Typography>
          )}
        </AccordionDetails>
      </Accordion>

      {/* Net Banking */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Net Banking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            fullWidth
            label="Enter Bank Name"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary">
            Pay via Net Banking
          </Button>
        </AccordionDetails>
      </Accordion>

      {/* Cash on Delivery */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Cash on Delivery</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="contained" color="secondary" className="pt-6">
            Confirm Order
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PaymentOptions;
