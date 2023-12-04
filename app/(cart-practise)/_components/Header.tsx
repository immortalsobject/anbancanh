"use client";

import React from "react";
import CartSheet from "./CartSheet";
import { useShoppingContext } from "@/context/ShoppingContext";

const Header = () => {
  const {cartQty} = useShoppingContext();
  return (
    <div className="flex justify-between items-center mt-2">
      <div>VinhSHOPPING</div>
      <div>
        <div className="relative group ">
          <CartSheet />
          <div
            className="
          bg-red-500 rounded-full absolute top-0 -right-4 p-1 w-6 h-6 
          flex items-center justify-center group-hover:bg-red-300"
          >
            {cartQty}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
