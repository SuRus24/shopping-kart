
import React from "react";
import useOrderKart from "../orderContext/OrderContext"; // if you need it, otherwise remove
import usePayment from "../PaymentsContext/PaymentsContext";
import OrderedProducts from "../components/OrderedProducts";

function MyOrders() {
  const {
    myOrders = {},       // default to an empty object so Object.values works
    address1 = "",
    address2 = "",
    zip = "",
    country = "",
    state = "",
    city = "",
    fullName = "",
  } = usePayment();

  // Build address safely: ignore empty parts and join with ", "
  const totalAddress = [address1, address2, city, state, zip, country]
    .map((p) => p?.toString().trim())
    .filter(Boolean)
    .join(", ");

  // Safe first name extraction
  const firstName = (fullName || "").trim().split(" ")[0] || "there";

  const ordersArray = Object.values(myOrders);

  return (
    <>

<h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
  Hey, {firstName}
</h1>


      <div className="mt-4 grid gap-4">
        {ordersArray.length === 0 ? (
          <p className="text-gray-600">No orders yet.</p>
        ) : (
          ordersArray.map((myord, idx) => (
            <OrderedProducts
              key={myord.id || myord.title || idx} // ensure a stable key
              image={myord.image}
              title={myord.title}
              price={myord.price}
              count={myord.count}
              description={myord.description}
              address={totalAddress}
              id={myord.id}
            />
          ))
        )}
      </div>
    </>
  );
}

export default MyOrders;
