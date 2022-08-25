import React from "react";
import CheckoutPaypalButton from "./CheckoutPaypalButton";

const Checkout = () => {
  const product = {
    description: "new product its was good",
    price: 29,
  };
  return (
    <div>
      <h2 className="font-bold text-2xl">Checkout</h2>
      <div className="  max-w-3xl mx-auto	">
        <img
          className=" "
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
        />
      </div>
      <div>
     <CheckoutPaypalButton product={product}></CheckoutPaypalButton>
      </div>
    </div>
  );
};

export default Checkout;
