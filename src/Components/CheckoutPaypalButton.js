import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CheckoutPaypalButton = ({product}) => {
     console.log(product)

     const [paidFor,setPaidFor] = useState(false);
     const [error,setError] = useState(null);
     

     const handleApprove = (orderId) =>{

          setPaidFor(true);


     }
     if(paidFor){
          alert("Thank you purchasing from  amar dokan")
     }
     if(error){
          alert(error)
     }
     return (
          <div>
              <div className='m-5'>
              <PayPalScriptProvider>
               
               <PayPalButtons 
               onClick={(data,actions) =>{

                    const hasAlreadyPurchase = false;
                    if(hasAlreadyPurchase){
                         setError("you already purchase")
                         return actions.reject();

                    }else{
                         return actions.resolve();
                    }
               }}
                createOrder = {(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                              description:product.description,
                                amount: {
                                    value: product.price,
                                },
                            },
                        ],
                    });
                }}

                onApprove = { async (data,actions) =>{

                    const order = await actions.order.capture();
                    console.log("order",order)

                    handleApprove(data.orderId)


                }}

                onCancel={() =>{}}
               onError={(error)=>{
                     setError(error)
                    console.log("checkout error",error)
               }}
               >
              



               </PayPalButtons>
               </PayPalScriptProvider> 
              </div>
          </div>
     );
};

export default CheckoutPaypalButton;