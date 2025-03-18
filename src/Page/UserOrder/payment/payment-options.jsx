import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PaymentOptions = ({ currency }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [paymentRequest, setPaymentRequest] = useState(null);
  const [canUseGPay, setCanUseGPay] = useState(false);
  const [paymentIntent, setPaymentIntent] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const { data } = await axios.post(
          "http://127.0.0.1:5000/create-payment-intent",
          {
            currency,
            amount: 50000,
          }
        );
        setPaymentIntent(data?.clientSecret);
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    };

    if (currency) createPaymentIntent();
  }, [currency]);

  useEffect(() => {
    if (!stripe || !currency) return;

    const pr = stripe.paymentRequest({
      country: "IN",
      currency,
      total: {
        label: "Total Amount",
        amount: 50000,
      },
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
  }, [stripe, currency]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || !paymentIntent) {
      toast.error("Stripe is not ready. Please try again.");
      return;
    }

    setIsProcessing(true);
    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentIntent: confirmedPaymentIntent } =
        await stripe.confirmCardPayment(paymentIntent, {
          payment_method: { card: cardElement },
        });

      if (error) {
        toast.error(`Payment failed: ${error.message}`);
      } else if (confirmedPaymentIntent?.status === "succeeded") {
        toast.success("Payment successful!");
        navigate("/");
      }
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full md:w-3/4 m-auto py-6 px-4 space-y-4">
      {/* Debit & Credit Card */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Debit / Credit Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleSubmit}>
            <CardElement options={{ hidePostalCode: true }} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Pay with Card"}
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
          <Button variant="contained" color="secondary">
            Confirm Order
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PaymentOptions;
