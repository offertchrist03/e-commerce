import Main from "@/components/pages/main/Main";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tsena",
  description: "La page d'accueil de Tsena",
};

function page() {
  return <Main></Main>;
}

export default page;
