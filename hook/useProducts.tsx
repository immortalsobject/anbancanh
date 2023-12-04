"use client";

import React, { useState, useEffect } from "react";
// npx json-server --watch C:\Users\immor\Downloads\cart-parctise\cart-parctise\data\product.json --port 3001
interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const res = await fetch("http://localhost:3001/products");
      
            const data = await res.json();
      
            setProducts(data);
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    };

    fetchProduct();
  }, []);

  return { products, isLoading };
};
