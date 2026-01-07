import React from "react";
import { Link } from "react-router-dom"; // For Next.js: use `next/link` and `href`
import usePayment from "../PaymentsContext/PaymentsContext";
import { useState, useRef, useEffect } from "react";
import useOrderKart from "../orderContext/OrderContext";

const macBlack = "#0A0A0A";

export default function Payments() {
  const {
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
    setMyOrders,

  } = usePayment();

  const {orderProducts,setOrderProducts, totalPriceCount, shipping, taxes,discountValue}=useOrderKart();
    const subTotal = totalPriceCount + taxes + shipping - discountValue;
  let flag = true;
  function isValidated() {

if (
  upiId.trim() &&
  fullName.trim() &&
  phoneNo.trim() &&
  email.trim() &&
  address1.trim() &&
  address2.trim() &&
  country.trim() &&
  state.trim() &&
  city.trim() &&
  zip.trim()
) {
  flag = true;
} else {
  flag = false;
}

  }



  const [showNotice, setShowNotice] = useState(false);
  const timerRef = useRef(null);


const checkFlagAndFlash = () => {
  setShowNotice(true);
  clearTimeout(timerRef.current);
  timerRef.current = setTimeout(() => setShowNotice(false), 2000);
};


  useEffect(() => () => clearTimeout(timerRef.current), []);
  const items = orderProducts ? Object.values(orderProducts) : [];




const allRequiredFilled = ({
  upiId, fullName, phoneNo, email,
  address1, country, state, city, zip
}) => {
  const required = [upiId, fullName, phoneNo, email, address1, country, state, city, zip];
  return required.every(v => (v ?? "").trim() !== "");
};



  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Heading / Banner */}
        <section className="mb-6">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 lg:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Russell Shop
                </p>
                <h1
                  className="mt-2 text-3xl sm:text-4xl font-bold"
                  style={{ color: macBlack }}
                >
                  Payment & Details
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                  Enter your UPI ID to approve payment and fill in contact &
                  address details.
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  to="/kart"
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-[#0A0A0A] hover:bg-slate-50"
                >
                  Back to Cart
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Layout: Form (left) + Summary (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* ===== Left: Payment + Contact + Address (Design only) ===== */}
          <form className="space-y-8">
            {/* Payment (UPI) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold" style={{ color: macBlack }}>
                Payment
              </h2>
              <p className="mt-1 text-sm text-slate-600">Approve via UPI</p>

              <div className="mt-4 grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="upiId"
                    className="block text-sm font-medium text-[#0A0A0A]"
                  >
                    UPI ID
                  </label>
                  <input
                    id="upiId"
                    name="upiId"
                    type="text"
                    inputMode="email"
                    placeholder="yourname@bank"
                    onChange={(e) => {
                      setUpiId(e.target.value);
                    }}
                    value={upiId}
                    className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    Example: <span className="font-mono">username@upi</span> or{" "}
                    <span className="font-mono">name@bank</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Secure approval request will be sent to your UPI app.
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold" style={{ color: macBlack }}>
                Contact Details
              </h2>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-[#0A0A0A]"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    value={fullName}
                    placeholder="John Appleseed"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  />

        {showNotice && (
          <p className="mt-1 text-xs text-red-600">
            Please check and try again
          </p>
        )}

                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#0A0A0A]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  />

        {showNotice && (
          <p className="mt-1 text-xs text-red-600">
            Please check and try again
          </p>
        )}

                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#0A0A0A]"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={(e) => {
                      setPhoneNo(e.target.value);
                    }}
                    value={phoneNo}
                    placeholder="+1 555 000 1234"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  />

        {showNotice && (
          <p className="mt-1 text-xs text-red-600">
            Please check and try again
          </p>
        )}

                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold" style={{ color: macBlack }}>
                Shipping Address
              </h2>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="address1"
                    className="block text-sm font-medium text-[#0A0A0A]"
                  >
                    Address Line 1
                  </label>
                  <input
                    id="address1"
                    name="address1"
                    type="text"
                    onChange={(e) => {
                      setAddress1(e.target.value);
                    }}
                    value={address1}
                    placeholder="Street, building, area"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  />

        {showNotice && (
          <p className="mt-1 text-xs text-red-600">
            Please check and try again
          </p>
        )}

                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="address2"
                    className="block text-sm font-medium text-[#0A0A0A]"
                  >
                    Address Line 2 (optional)
                  </label>
                  <input
                    id="address2"
                    name="address2"
                    type="text"
                    onChange={(e) => {
                      setAddress2(e.target.value);
                    }}
                    value={address2}
                    placeholder="Apartment, suite, landmark"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  />

        {showNotice && (
          <p className="mt-1 text-xs text-red-600">
            Please check and try again
          </p>
        )}

                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-[#0A0A0A]"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                    value={country}
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  
                  >
                    <option>United States</option>
                    <option>India</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-[#0A0A0A]"
                  >
                    State / Province
                  </label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                    value={state}
                    placeholder="California"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  />

        {showNotice && (
          <p className="mt-1 text-xs text-red-600">
            Please check and try again
          </p>
        )}

                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-[#0A0A0A]"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    value={city}
                    placeholder="San Francisco"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  />

        {showNotice && (
          <p className="mt-1 text-xs text-red-600">
            Please check and try again
          </p>
        )}

                </div>
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-[#0A0A0A]"
                  >
                    ZIP / Postal Code
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    onChange={(e) => {
                      setZip(e.target.value);
                    }}
                    value={zip}
                    placeholder="94107"
                    className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  />

        {showNotice && (
          <p className="mt-1 text-xs text-red-600">
            Please check and try again
          </p>
        )}

                </div>
              </div>
            </div>

            {/* Actions (Design only) */}
            <div className="flex flex-col sm:flex-row gap-3">


<Link
  to="/checkout/payment/upi"


  onClick={(e) => {
    // compute validity at click time

const ok = allRequiredFilled({
  upiId, fullName, phoneNo, email,
  address1, /* address2, */ country, state, city, zip,
});


    if (!ok) {
      e.preventDefault();      
      checkFlagAndFlash();     
      return;
    }

setMyOrders(prev => ({
  ...prev,
  ...orderProducts, // merge new fields into existing
}));

      setOrderProducts({})
    
    
  }}


  className="rounded-lg bg-[#0A0A0A] px-5 py-3 text-sm font-semibold text-white hover:bg-black"
>
  Approve &amp; Pay via UPI
</Link>



              <Link
                to="/shop"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-[#0A0A0A] hover:bg-slate-50"
              >
                Continue Shopping
              </Link>
            </div>
          </form>

          {/* ===== Right: Order Summary (USD, static) ===== */}
          <aside className="lg:sticky lg:top-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold" style={{ color: macBlack }}>
              Order Summary
            </h2>

            <div className="mt-4 space-y-4">
              {/* Items (dummy, USD) */}
              { items.map((prod)=>(


<div className="flex items-start justify-between py-3 border-b border-slate-200">
  {/* Left column gets flexible width */}
  <div className="flex-1 pr-3">
    <p className="text-sm font-medium text-slate-900 whitespace-normal">
      {prod.title}
    </p>
    <p className="text-xs text-slate-500">Qty: {prod.count}</p>
  </div>

  <span className="text-sm font-semibold text-slate-900">
    ${prod.count * prod.price}
  </span>
</div>


              ))}



              {/* Subtotals (USD, static) */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Subtotal</span>
                <span className="text-sm font-semibold text-[#0A0A0A]">
                 $ {totalPriceCount.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Shipping</span>
                <span className="text-sm font-semibold text-[#0A0A0A]">
                  $ {shipping.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Taxes</span>
                <span className="text-sm font-semibold text-[#0A0A0A]">
                  $ {taxes.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">discount</span>
                <span className="text-sm font-semibold text-[#0A0A0A]">
                  $ {discountValue.toFixed(2)}
                </span>
              </div>

              {/* Total */}
              <div className="h-px bg-slate-200" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#0A0A0A]">
                  Total
                </span>
                <span className="text-xl font-bold text-[#0A0A0A]">
                  $ {subTotal.toFixed(2)}
                </span>
              </div>

              {/* Note */}
              <p className="mt-2 text-xs text-slate-500">
                Prices shown in <strong>USD</strong>. UPI approval will appear
                in your UPI app.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
``;
