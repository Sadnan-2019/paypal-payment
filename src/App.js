import logo from './logo.svg';
import './App.css';
import { Route, Routes,   } from "react-router-dom";
import Checkout from './Components/Checkout';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
  return (
    <PayPalScriptProvider 
    options={{ "client-id":process.env.PAY_PAL_CLIENT_ID}}
    >

<div className="App">
       <Routes>
        <Route path='/' element={<Checkout></Checkout>}></Route>
       </Routes>
    </div>
    </PayPalScriptProvider>
  
  );
}

export default App;
