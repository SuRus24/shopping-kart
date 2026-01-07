import React from "react";
import useKart from "../kartcontext/KartContext";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function Products() {
  const { products, setProducts } = useKart();
  const [isSearch, setIsSearch] = useState("");

  useEffect(() => {
    if (products && Object.keys(products).length > 0) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const productDetails = await res.json();

        const filteredProductDetails = productDetails.products.reduce((acc, prod) => {
          const id = uuidv4();
          acc[id] = {
            id: id,
            title: prod.title,
            description: prod.description,
            category: prod.category,
            image: prod.images?.[0] ?? "",
            price: prod.price,
          };
          return acc;
        }, {});

        setProducts(filteredProductDetails);
      } catch (err) {
        console.error("this is error", err);
      }
    };

    fetchProduct();
  }, [products, setProducts]);






return (
  <div>
    <SearchBar isSearch={isSearch} setIsSearch={setIsSearch} />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {isSearch === ""
        ? Object.values(products).map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
              category={product.category}
              id={product.id}
            />
          ))
        : Object.values(products)
            .filter((prod) =>
              prod.title.toLowerCase().includes(isSearch.toLowerCase())
            )
            .map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                description={product.description}
                category={product.category}
                id={product.id}
              />
            ))}
    </div>
  </div>
);



}

export default Products;


