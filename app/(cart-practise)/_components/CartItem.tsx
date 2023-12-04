'use client'

import Image from "next/image";
import React from "react";
import { Plus, Minus, Trash } from "lucide-react";
import { useShoppingContext } from "@/context/ShoppingContext";
import { Button } from "@/components/ui/button";


interface cartItemsProps {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  qty: number;
}

const CartItem = ({ id, name, price, thumbnail, qty }: cartItemsProps) => {

    const {increaseQty, decreasetQty, removeCartItem} = useShoppingContext();

  return (
    <div className="flex  w-[350px] h-22 justify-between border">
      <div className="">
        <Image src={thumbnail} alt="image" width={80} height={80} />
        <span className="pl-4">{name}</span>
      </div>
      <div className="flex justify-between h-full w-full p-5">
        <div className="flex items-center space-x-2">
          <Minus className="h-4 w-4 text-sm" onClick={() => increaseQty(id)}/>
          <span>{qty}</span>
          <Plus className="h-4 w-4 text-sm" onClick={() => increaseQty(id)}/>
        </div>
        <Button variant="destructive" onClick={() => removeCartItem(id)}>
            <Trash/>
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
