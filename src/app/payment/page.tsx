
"use client"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { MyCheckoutForm } from "./MyCheckoutForm";



// const stripePromise = loadStripe("YOUR_PUBLIC_KEY_HERE");

const stripePromise =loadStripe('pk_live_51PyDlJRsyKScRTtSw9zSnk1qySDxK6CeHY5a4o7luV3IdPb5gJdNDXaNP1aI4lGOHiFleJJlEJFMFHEbCoaLqhqi00lgHX4OZs');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <MyCheckoutForm />
    </Elements>
  );
}

export default App;