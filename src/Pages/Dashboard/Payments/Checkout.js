import React, { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { CircularProgress } from "@mui/material";

const Checkout = ({ orderDetails }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  const [message, setMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  const price = orderDetails.total_cost;
  useEffect(() => {
    fetch("http://127.0.0.1:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log(data);
      });
  }, [orderDetails.total_cost]);

  // useEffect(() => {
  //   if (!stripe) {
  //     return;
  //   }
  // const clientSecret = new URLSearchParams(window.location.search).get(
  //   "payment_intent_client_secret"
  // );

  // if (!clientSecret) {
  //   return;
  // }
  // stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //   switch (paymentIntent.status) {
  //     case "succeeded":
  //       setMessage("Payment succeeded!");
  //       break;
  //     case "processing":
  //       setMessage("Your payment is processing.");
  //       break;
  //     case "requires_payment_method":
  //       setMessage("Your payment was not successful, please try again.");
  //       break;
  //     default:
  //       setMessage("Something went wrong.");
  //       break;
  //   }
  // });
  // }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setMessage(error.message);
      setProcessing(false)
    } else {
      console.log("PaymentMethod", paymentMethod);
    }

    console.log("ACCTUAL clientSecret", clientSecret);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setMessage(intentError.message);
    } else {
      setMessage("Your payment successfully done.");
      console.log(paymentIntent);
      setProcessing(false);
    }
  };

  setTimeout(() => {
    setMessage("");
  }, 3000);

  return (
    <div>
      <p>Total Payment: {orderDetails.total_cost}</p>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (<CircularProgress></CircularProgress>):(<button
          className='text-sm px-3 mr-2 font-semibold py-1 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-30 my-2 md:my-0 text-white bg-yellow-800 bg-opacity-50 mt-4'
          type='submit'
          disabled={!stripe}
        >
          Pay
        </button>)}
      </form>

      <div className='mb-12 mt-4 flex justify-center items-center'>
        <p
          className={`absolute text-sm font-semibold mt-6 ${
            message.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default Checkout;
