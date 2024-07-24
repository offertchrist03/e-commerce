import Main from "@/components/pages/main/Main";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "tsena",
  description: "La page d'accueil de tsena",
};

function page() {
  return <Main></Main>;
}

export default page;
