import Favoris from "@/components/pages/favoris/Favoris";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tsena | Favoris",
  description: "Liste des articles favoris",
};

function page() {
  return <Favoris></Favoris>;
}

export default page;
