
import React from "react";
import { Link } from "react-router-dom"; // remove if not using react-router

const OrderedProducts = ({ image, title, price, count, description, address, id }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden" key={id}>
      {/* Rectangle layout: image left (30%), details right (70%) */}
      <div className="flex">
        {/* Left: Image block (30%) */}
        <div className="flex-[0_0_30%] p-3">
          <div className="w-full aspect-square rounded-md overflow-hidden border border-gray-100">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right: Details block (70%) */}
        <div className="flex-[0_0_70%] p-4 flex flex-col">
          {/* Top row: title + price/qty */}
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <div className="text-right">
              <span className="text-green-600 font-bold text-lg">$ {(price * count).toFixed(2)}</span>
              <div className="text-gray-500 text-sm">Qty: {count}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mt-2">{description}</p>

          {/* Address: inline and left-aligned */}
          <div className="mt-4 text-gray-700 text-sm text-left">
            <p className="font-medium">
              Delivery Address:&nbsp;
              <span className="font-normal">{address}</span>
            </p>
          </div>

          {/* Spacer to push the bottom row to the bottom */}
          <div className="flex-1" />

          {/* Bottom row: buttons (left) + delivery badge (right), same baseline */}
          <div className="mt-4 flex items-center justify-between">
            {/* Left: actions */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Continue shopping */}
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {/* cart icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M16 6a2 2 0 012 2v1H7V8a2 2 0 012-2h7z" />
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h2a1 1 0 011 1v1h10a1 1 0 011 1v8a3 3 0 01-3 3H7a3 3 0 01-3-3V6H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Continue shopping
              </Link>

              {/* View details (UI only) */}
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 3a7 7 0 017 7 7 7 0 01-14 0 7 7 0 017-7zm0 4a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
                View details
              </button>

              {/* Reorder (UI only) */}
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M4 4a6 6 0 0111.31-1.876l-1.58.632A4 4 0 006 6H4zm12 12a6 6 0 01-11.31 1.876l1.58-.632A4 4 0 0014 14h2z" />
                </svg>
                Reorder
              </button>
            </div>

            {/* Right: delivery badge */}
            <span className="inline-flex items-center gap-2 text-gray-700 text-sm bg-gray-50 border border-gray-200 px-3 py-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v6a2 2 0 002 2h12a2 2 0 002-2V9zM7 12a1 1 0 112 0v2a1 1 0 11-2 0v-2zm4 0a1 1 0 112 0v2a1 1 0 11-2 0v-2z"
                  clipRule="evenodd"
                />
              </svg>
              Expected: in 5 days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedProducts;
``
