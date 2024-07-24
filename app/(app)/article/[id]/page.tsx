import Article from "@/components/pages/article/Article";
import { dataTestArticles } from "@/test/data-test";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "tsena | Article",
  description: "Details sur l'Article",
};

function page() {
  return <Article data={dataTestArticles[0]}></Article>;
}

export default page;
