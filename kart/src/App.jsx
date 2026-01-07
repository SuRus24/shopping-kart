import { useState, useEffect } from "react";
import { KartProvider } from "./kartcontext/KartContext";
import { OrderProvider } from "./orderContext/OrderContext.jsx";
import { PaymentContextProvider } from "./PaymentsContext/PaymentsContext.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Categories from "./pages/Categories.jsx";
import Deals from "./pages/Deals.jsx";
import Kart from "./pages/Kart.jsx";
import Products from "./pages/Products.jsx";
import Payments from "./pages/Payments.jsx";
import MyOrders from "./pages/MyOrders.jsx";

import { v4 as uuidv4 } from "uuid";
import "./App.css";
import UpiPayments from "./pages/UpiPayments.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "categories", element: <Categories /> },
        { path: "deals", element: <Deals /> },
        { path: "kart", element: <Kart /> },
        { path: "products", element: <Products /> },
        { path: "checkout/payment", element: <Payments /> },
        { path: "checkout/payment/upi", element: <UpiPayments /> },
        { path: "myorders", element: <MyOrders /> }
      ],
    },
  ]);

  const [products, setProducts] = useState([]);
  const [orderProducts, setOrderProducts] = useState({});
  const [totalOrderCount, setTotalOrderCount] = useState(0);
  const [totalPriceCount, setTotalPriceCount] = useState(0);
  const [taxes, setTaxes] = useState(3);
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState("");
  const [discountValue, setDiscountValue] = useState(0);
  const [upiId, setUpiId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [myOrders,setMyOrders]= useState({})

  const addToKart = (id, title, image, price, description, category) => {
    setOrderProducts((prev) => ({
      ...prev,
      [id]: {
        id: id,
        title: title,
        image: image,
        price: price,
        description: description,
        category: category,
        count: 1,
      },
    }));
  };

  const removeFromKart = (id) => {
    setOrderProducts((prev) => {
      const copy = { ...prev };
      delete copy[id]; // removes the key completely
      return copy;
    });
  };

  const increaseTotalProductCount = () => {
    setTotalOrderCount((prev) => prev + 1);
  };

  const decreaseTotalProductCount = () => {
    setTotalOrderCount((prev) => prev - 1);
  };

  const increaseProductCount = (id) => {
    setOrderProducts((prev) => {
      const current = prev[id]?.count ?? 0;
      return {
        ...prev,
        [id]: {
          ...(prev[id] || {}),
          count: current + 1,
        },
      };
    });
  };

  const decreaseProductCount = (id, setIsAddedToKart) => {
    //orderProducts[id].count-1;
    setOrderProducts((prev) => {
      const current = prev[id]?.count ?? 0;
      let next = current;
      if (current != 0) {
        next = current - 1;
      }
      if (current == 0) {
        setIsAddedToKart(false);
        removeFromKart(id);
      }
      return {
        ...prev,
        [id]: {
          ...(prev[id] || {}),
          count: next,
        },
      };
    });
  };

  const value = { products, setProducts };
  const orderValue = {
    orderProducts,
    setOrderProducts,
    totalOrderCount,
    totalPriceCount,
    taxes,
    setTaxes,
    shipping,
    setShipping,
    setTotalPriceCount,
    setTotalOrderCount,
    addToKart,
    removeFromKart,
    increaseProductCount,
    decreaseProductCount,
    increaseTotalProductCount,
    decreaseTotalProductCount,
    discount,
    setDiscount,
    discountValue,
    setDiscountValue,
  };

  const paymentValues = {
    upiId,
    setUpiId,
    fullName,
    setFullName,
    phoneNo,
    setPhoneNo,
    email,
    setEmail,
    address1,
    setAddress1,
    address2,
    setAddress2,
    country,
    setCountry,
    state,
    setState,
    city,
    setCity,
    zip,
    setZip,
    myOrders,
    setMyOrders
  };

  useEffect(() => {
    let allCount = 0;
    let allPriceCount = 0;
    Object.values(orderProducts).forEach(function (iop) {
      allCount += iop.count;
      allPriceCount += iop.count * iop.price;
    });
    setTotalOrderCount(allCount);
    setTotalPriceCount(allPriceCount);
  }, [orderProducts]);

  useEffect(() => {
    if (totalPriceCount < 50 && totalPriceCount != 0) {
      setShipping(0.2 * totalPriceCount);
    } else {
      setShipping(0);
    }
    setTaxes(0.1 * totalPriceCount);
  }, [totalPriceCount]);

  console.log(totalOrderCount);
  console.log(totalPriceCount);
  return (
    <KartProvider value={value}>
      <PaymentContextProvider value={paymentValues}>
        <OrderProvider value={orderValue}>
          <RouterProvider router={router} />
        </OrderProvider>
      </PaymentContextProvider>
    </KartProvider>
  );
}

export default App;
