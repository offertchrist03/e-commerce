import Cart from "@/components/pages/cart/Cart";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "tsena | Panier",
  description: "Liste des articles dans le panier",
};

function page() {
  return <Cart></Cart>;
}

export default page;
