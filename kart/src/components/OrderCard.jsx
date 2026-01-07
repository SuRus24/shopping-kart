import React, { useEffect } from "react";
import { useState } from "react";
import useOrderKart from "../orderContext/OrderContext";

// Pure presentational card (no functionality)
function OrderCard({ title, image, price, description, category, id, count }) {
  const trimToWords = (text = "", limit = 50) => {
    const words = text.split(/\s+/).filter(Boolean);
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(" ") + "…";
  };

  const [prodCount, setprodCount] = useState(count);
  
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
  } = useOrderKart();

  useEffect(() => {

    setprodCount(orderProducts[id].count);
    console.log(id);
    console.log(count);
    console.log(prodCount);




  }, [orderProducts,count, prodCount]);

    useEffect(()=>{    
      if(prodCount==0 && count==0){
    removeFromKart(id);
    }},[prodCount])


  return (
    <div className="w-full h-[300px] rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow overflow-hidden">
      {/* Top split: image (40%) + info (60%) */}
      <div className="grid grid-cols-[40%_60%] w-full h-[160px]">
        {/* Image left */}
        <div className="bg-slate-100 overflow-hidden">
          <img
            src={image}
            alt={title || "Product image"}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/400x400.png?text=No+Image";
            }}
          />
        </div>

        {/* Info right */}
        <div className="p-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold text-[#0A0A0A] leading-tight line-clamp-2 pr-1">
              {title}
            </h3>
            <div className="text-right shrink-0">
              <p className="text-[11px] text-slate-500">Price</p>
              <p className="text-base font-bold text-[#0A0A0A]">₹{price}</p>
            </div>
          </div>

          {category ? (
            <div className="mt-1 flex justify-start">
              <span className="inline-block rounded-full bg-[#0A0A0A] px-2 py-0.5 text-[11px] font-medium text-white">
                {category}
              </span>
            </div>
          ) : (
            /* keep layout height consistent if category is missing */
            <div className="mt-1 h-[18px]" />
          )}

          {/* Description (limit ~50 words + clamp 3 lines) */}
          <p className="mt-1 text-xs text-slate-700 line-clamp-3">
            {(description || "").split(/\s+/).slice(0, 50).join(" ") +
              ((description || "").split(/\s+/).length > 50 ? "…" : "")}
          </p>
        </div>
      </div>

      {/* Bottom section (fixed height) */}
      <div className="h-[140px] px-3 py-2 flex flex-col gap-2">
        {/* Quantity + Total */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center rounded-lg border border-slate-200 overflow-hidden">
            <button
              type="button"
              className="px-2.5 py-1.5 text-xs text-[#0A0A0A] hover:bg-slate-50"
              onClick={() =>  decreaseProductCount(id) }
            >
              −
            </button>
            <input
              type="number"
              min={1}
              readOnly
              className="w-12 border-x border-slate-200 py-1.5 text-center text-xs font-medium text-[#0A0A0A] focus:outline-none"
              value={prodCount}
            />
            <button
              type="button"
              className="px-2.5 py-1.5 text-xs text-[#0A0A0A] hover:bg-slate-50"
              onClick={() => {
                increaseProductCount(id);
              }}
            >
              +
            </button>
          </div>

          <div className="text-right">
            <p className="text-[11px] text-slate-500">Total</p>
            <p className="text-base font-bold text-[#0A0A0A]">
              ₹{price * (prodCount ?? 1)}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200" />

        {/* Meta + Actions */}
        <div className="flex items-center justify-between">
          <div className="text-[11px] text-slate-600">
            Items in cart:{" "}
            <span className="font-semibold">{prodCount ?? 1}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-[12px] font-medium text-[#0A0A0A] hover:bg-slate-50"
            >
              Save
            </button>
            <button
              type="button"
              className="rounded-lg bg-rose-50 text-rose-600 px-2.5 py-1.5 text-[12px] font-semibold hover:bg-rose-100"
              onClick={()=>removeFromKart(id)}
            >
              Remove
            </button>
          </div>
        </div>

        <div className="text-[11px] text-slate-500">
          Free delivery eligible • Secure checkout
        </div>
      </div>
    </div>
  );
}

export default OrderCard;

// import React from 'react'

// function OrderCard({title, image, price, description, category, id, key}) {
//   return (

// <div class="max-w-xl w-full rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
//   <div class="flex items-start gap-4">
//     {/* <!-- Product Image --> */}
//     <div class="h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-lg border border-gray-200">
//       <img src={image} alt="Product Image" class="h-full w-full object-cover" />
//     </div>

//     {/* <!-- Product Details --> */}
//     <div class="flex-1">
//       {/* <!-- Name + Price Row --> */}
//       <div class="flex items-start justify-between gap-3">
//         <div>
//           <h3 class="text-base sm:text-lg font-semibold text-gray-900">
//             {title}
//           </h3>
//           <p class="mt-1 text-sm text-gray-600 line-clamp-2">
//             Short description of the product goes here. It can be two lines max.
//           </p>
//         </div>

//         {/* <!-- Unit Price --> */}
//         <div class="text-right">
//           <p class="text-sm text-gray-500">Price</p>
//           <p class="text-lg sm:text-xl font-bold text-gray-900">
//             {price}
//           </p>
//         </div>
//       </div>

//       {/* <!-- Quantity + Total --> */}
//       <div class="mt-4 flex flex-wrap items-center justify-between gap-4">
//         {/* <!-- Quantity Control --> */}
//         <div class="inline-flex items-center rounded-lg border border-gray-200 overflow-hidden">
//           <button type="button" class="px-3 py-2 text-gray-700 hover:bg-gray-50">−</button>
//           <input type="number" value="1" class="w-14 border-x border-gray-200 py-2 text-center text-sm font-medium text-gray-900 focus:outline-none" />
//           <button type="button" class="px-3 py-2 text-gray-700 hover:bg-gray-50">+</button>
//         </div>

//         {/* <!-- Total Price --> */}
//         <div class="text-right sm:text-left">
//           <p class="text-sm text-gray-500">Total</p>
//           <p class="text-xl font-bold text-gray-900">₹3,499</p>
//         </div>
//       </div>

//       {/* <!-- Actions --> */}
//       <div class="mt-4 flex flex-wrap items-center gap-3">
//         <button type="button" class="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
//           Save for later
//         </button>
//         <button type="button" class="rounded-lg bg-rose-50 text-rose-600 px-3 py-2 text-sm font-semibold hover:bg-rose-100">
//           Remove
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

//   )
// }

// export default OrderCard
