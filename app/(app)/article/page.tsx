import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "tsena | Articles",
  description: "Les Articles recherchees",
};

function page() {
  return (
    <div>
      <div className="">params du recherche url</div>
      <ul className="">article</ul>
      <div className="">related search</div>
    </div>
  );
}

export default page;
