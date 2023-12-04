"use client";

import { useProducts } from "@/hook/useProducts";
import React from "react";
import ProductCard from "../_components/ProductCard";

const ContextPractise = () => {
  const { products, isLoading } = useProducts();

  if (!products && !isLoading) {
    <div>NOT DATA</div>;
  }
  return (
    <div className="mt-20 flex flex-wrap gap-20 ">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
  );
};

export default ContextPractise;
