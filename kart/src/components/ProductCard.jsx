import React, { useState } from "react";
import useOrderKart from "../orderContext/OrderContext";
import useKart from "../kartcontext/KartContext";

function ProductCard({ title, image, price, description, category, id }) {
  const {
    increaseProductCount,
    decreaseProductCount,
    orderProducts,
    setOrderProducts,
    addToKart,
  } = useOrderKart();
  const { products } = useKart();
  const [isAddedToKart, setIsAddedToKart] = useState(false);
  
  return (
    <div
      className="max-w-sm rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
      key={id}
    >
      {/* Image */}
      <div className="aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-slate-100">
        <img
          src={image}
          alt={`Product ${id}`}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/600x450.png?text=No+Image";
          }}
        />
      </div>

      {/* Content */}
      <div className="space-y-2 p-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </div>

        <p className="text-sm text-slate-700 line-clamp-3">{description}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white">
            {category}
          </span>
          <span className="text-lg font-bold text-slate-900">${price}</span>
        </div>

        <div className="flex items-center gap-3">
          {/* addbutton */}
          {isAddedToKart? (
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white shadow-sm transition hover:bg-slate-800 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label="Remove from cart"
            onClick={() => {
              decreaseProductCount(id,setIsAddedToKart);
            }}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          ): ("")}


          {/* addtokart */}
          <button
            type="button"
            className="inline-flex mx-auto block items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 my-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label={`Add product ${id} to cart`}
            onClick={() => {
              setIsAddedToKart((prev) => !prev);
              // setOrderProducts((prev) => ({
              //   ...prev,
              //   [id]: {
              //     id: id,
              //     title: title,
              //     image: image,
              //     price: price,
              //     description: description,
              //     category: category,
              //     count: 1,
              //   },
              // }));
              addToKart(id ,title, image, price, description, category,);
            }}
          >
            {isAddedToKart ? (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6" />
                <path d="M16 11V7" />
                <path d="M14 9h4" />
              </svg>
            )}

            {isAddedToKart ? " Added" : "Add to Cart"}
          </button>

          {/* minusbutton */}
            {isAddedToKart ? (          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white shadow-sm transition hover:bg-slate-800 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label="Add to cart"
            onClick={() => {
              increaseProductCount(id);
            }}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>): ("")}




        </div>
      </div>
    </div>
  );
}

export default ProductCard;
