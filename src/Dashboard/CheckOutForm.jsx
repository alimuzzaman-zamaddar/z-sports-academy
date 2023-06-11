import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../Pages/Providers/AuthProviders";

const CheckOutForm = ({ selectedClass, price }) => {
  const stripe = useStripe();
  const { user } = useContext(AuthContext);
  const elements = useElements();
  const [PayCardError, SetPayCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }
}, [price, axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      SetPayCardError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      SetPayCardError("");
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: selectedClass.length,
        selectedItems: selectedClass.map((item) => item._id),
        selectedId: selectedClass.map((item) => item.selectedClassId),
        status: "service pending",
        itemNames: selectedClass.map((item) => item.Name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // display confirm
        }
      });
    }
  };
  return (
    <>
      <form className="w-2/4 mx-auto mt-48" onSubmit={handleSubmit}>
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
        <button
          className="btn btn-qi-success mt-10"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {PayCardError && (
        <p className="text-warning text-center">{PayCardError}</p>
      )}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckOutForm;
