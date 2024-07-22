import React from "react";
import { dataTestArticles } from "@/test/data-test";
import DiscoveryList from "../main/DiscoveryList";
import { Container } from "lucide-react";

function ArticleSimilars() {
  return (
    <DiscoveryList
      color="rgb(3 83 164)"
      title={
        <span className="flex-center gap-2 text-theme ">
          <span className="">
            <Container size={20} strokeWidth={3} />
          </span>
          <span className="">{`article similaires:`}</span>
        </span>
      }
      datas={dataTestArticles}
    ></DiscoveryList>
  );
}

export default ArticleSimilars;
