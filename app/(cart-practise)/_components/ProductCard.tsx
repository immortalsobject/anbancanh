'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useShoppingContext } from "@/context/ShoppingContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
}

const ProductCard = ({ id, name, thumbnail, price }: ProductCardProps) => {
  const { addCartItem } = useShoppingContext();
  const handleAddProduct = () => {
    const product = { id, name, price, thumbnail };
    addCartItem(product);
  };
  
  return (
    <div className="">
      <Card className="w-[350px]">
        <CardContent className="mt-4 space-y-4">
          <div className="relative w-[300px] h-[300px] flex items-center justify-center">
            <Image src={thumbnail} alt={name} fill />
          </div>

          <div className="">
            <h2 className="font-bold text-lg">{name}</h2>
            <div>Giá tiền: {price}</div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleAddProduct}>Add</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
