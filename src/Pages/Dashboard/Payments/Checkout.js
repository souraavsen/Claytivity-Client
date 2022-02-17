import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useHistory, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Icons from '../../../assets/Icons/Icons'


const Checkout = ({ orderDetails }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const history = useHistory();

  const id = useParams().id;
  console.log(id.id);

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
      });
  }, [orderDetails.total_cost]);

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
      setProcessing(false);
    } else {
      console.log("PaymentMethod", paymentMethod);
    }

    //Confirm Payment
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

      console.log("SPLIT", clientSecret.split("_secret_"));

      // save payment in database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: clientSecret.split("_secret")[0],
      };
      fetch(`http://127.0.0.1:5000/order-payment/update/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            history.push("/dashboard/myorders");
          }
        });
    }
  };

  if (!message == "") {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }

  return (
    <div>
      <p className='pb-4 my-6 font-semibold text-lg'>
        Total Payment: ${orderDetails.total_cost}
      </p>
      <form onSubmit={handleSubmit}>
        <CardElement
          className='w-7/12 my-10 mx-auto'
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
        {processing ? (
          <CircularProgress />
        ) : (
          <button
            className='text-sm px-3 mr-2 font-semibold py-1 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-30 my-2 md:my-0 text-white bg-yellow-800 bg-opacity-50 pt-8'
            type='submit'
            disabled={!stripe}
          >
            <Icons.payment/> Pay
          </button>
        )}
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
