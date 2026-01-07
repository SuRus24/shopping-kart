import React, { useState } from "react";
import useOrderKart from "../orderContext/OrderContext";
import OrderCard from "../components/orderCard";
import { Link } from "react-router-dom";

function Kart() {
  const {
    orderProducts,
    increaseProductCount,
    decreaseProductCount,
    increaseTotalProductCount,
    decreaseTotalProductCount,
    totalOrderCount,
    setTotalOrderCount,
    addToKart,
    removeFromKart,
    totalPriceCount,
    taxes,
    shipping,
    discount,
    setDiscount,
    discountValue,
    setDiscountValue,
  } = useOrderKart();

  const items = orderProducts ? Object.values(orderProducts) : [];
  const [showError, setShowError] = React.useState(false);
  const [nullError, setNullError] = useState(false);

  function checkDiscountValidity() {
    if (discount.trim().toLowerCase() === "suvan20") {
      // Valid code
      setDiscountValue(20);
    } else {
      // Show error message
      setDiscount("NOT APPLICABLE");
      setShowError(true);
      setDiscountValue(0)

      // After 2 seconds, clear everything
      setTimeout(() => {
        setDiscount("");
        setShowError(false);
      }, 2000);
    }
  }

  console.log("here is items", items);
  const subTotal = totalPriceCount + taxes + shipping - discountValue;
  if (totalPriceCount > 0) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT: Your Cart (sticky header, scrollable list, scrollbar hidden) */}
          <div className="relative mb-10 rounded-2xl border border-slate-200 bg-white">
            {/* Sticky header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-slate-200 px-4 py-3">
              <h2 className="text-lg font-semibold text-[#0A0A0A]">
                Your Cart
              </h2>
            </div>

            {/* Scrollable content (cards stacked) */}
            <div
              className="max-h-[calc(100vh-220px)] overflow-y-auto px-4 py-4
                   [scrollbar-width:none] 
                   [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex flex-col gap-4">
                {items.map((orderprod) => (
                  <div className="w-full">
                    <OrderCard
                      key={orderprod.id}
                      id={orderprod.id}
                      title={orderprod.title}
                      image={orderprod.image}
                      price={orderprod.price}
                      description={orderprod.description}
                      category={orderprod.category}
                      count={orderprod.count}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Checkout (sticky panel within viewport) */}
          <div className="relative">
            <div className=" lg:top-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[#0A0A0A]">Checkout</h2>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Subtotal</span>
                  <span className="text-base font-semibold text-[#0A0A0A]">
                    $ {totalPriceCount.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Shipping</span>
                  <span className="text-base font-semibold text-[#0A0A0A]">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">Taxes</span>
                  <span className="text-base font-semibold text-[#0A0A0A]">
                    ${taxes.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">DISCOUNT</span>
                  <span className="text-base font-semibold text-[#0A0A0A]">
                    ${discountValue.toFixed(2)}
                  </span>
                </div>

                <div className="h-px bg-slate-200 my-2" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#0A0A0A]">
                    Total
                  </span>
                  <span className="text-xl font-bold text-[#0A0A0A]">
                    ${subTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <label className="text-sm text-left font-medium text-[#0A0A0A]">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  {/* <input
                  type="text"
                  id=""
                  placeholder="Enter code"
                  className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0A0A0A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  onChange={(val) => {
                    setDiscount(val);
                  }}
                  value={discount}
                /> */}

                  <input
                    id="promoCodeInput"
                    type="text"
                    placeholder="Enter code"
                    className={`flex-1 rounded-lg border px-3 py-2 text-sm ${
                      showError
                        ? "text-red-600 border-red-400 animate-shake"
                        : ""
                    }`}
                    onChange={(e) => setDiscount(e.target.value)}
                    value={discount}
                  />

                  <button
                    type="button"
                    className="rounded-lg bg-[#0A0A0A] px-4 py-2 text-sm font-semibold text-white"
                    onClick={() => {
                      if (totalPriceCount !== 0) {
                        checkDiscountValidity();
                      } else {
                        setNullError(true);
                        setTimeout(() => {
                          setDiscount("");
                          setNullError(false);
                          setDiscountValue(0);
                        }, 2000);
                      }
                    }}
                  >
                    Apply
                  </button>
                </div>
                {showError && (
                  <p className="mt-1 text-sm text-red-600 animate-shake">
                    Invalid code
                  </p>
                )}

                {nullError && (
                  <p className="mt-1 text-sm text-red-600 animate-shake">
                    Nothing added to kart
                  </p>
                )}
                <p className="text-xs text-slate-500">
                  Free delivery eligible • Secure checkout
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <Link
                  to="/checkout/payment"
                  className="block w-full rounded-lg bg-[#0A0A0A] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Proceed to Payment
                </Link>

                <Link
                  to="/products"
                  className="block w-full rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-[#0A0A0A] hover:bg-slate-50"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                By placing your order, you agree to our Terms and Privacy
                Policy.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        {/* Running Trolley Icon */}
        <svg
          className="mx-auto h-24 w-24 text-gray-300 animate-trolley-run"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 8h8l8 24h28l4-16H20" />
          <circle cx="24" cy="52" r="4" />
          <circle cx="48" cy="52" r="4" />
          <path d="M6 20 h6" />
          <path d="M4 26 h8" />
          <path d="M10 32 h6" />
        </svg>

        <h2 className="mt-4 text-lg font-semibold text-[#0A0A0A]">
          Hey, your cart is empty
        </h2>
        <p className="mt-1 text-sm text-slate-600">Add items to get started.</p>

        {/* Link instead of button */}
        <Link
          to="/products" // <-- Change this to your desired route
          className="mt-6 inline-block rounded-lg bg-[#0A0A0A] px-4 py-2 text-sm font-semibold text-white"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}

export default Kart;

//  title, image, price, description, category, id
