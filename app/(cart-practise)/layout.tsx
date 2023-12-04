"use client";

import { ShoppingContextProvider } from "@/context/ShoppingContext";
// import { ShoppingContextProvider } from "@/context/ShoppingContext";
import Header from "./_components/Header";

export default function ContextLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <ShoppingContextProvider>
        <Header />
        {children}
      </ShoppingContextProvider>
    </div>
  );
}
