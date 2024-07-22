import { HeartHandshake } from "lucide-react";
import React from "react";
import ArticleList from "../article/ArticleList";
import { dataTestArticles } from "@/test/data-test";
import { RatingComponent } from "@/components/packages/rating/react-stars";

function Favoris() {
  return (
    <div className="w-full h-fit py-3 flex flex-col gap-5 ">
      <h3 className="">
        <span className="w-fit h-fit flex justify-center items-center gap-2 text-lg uppercase font-bold text-red-500 ">
          <span className="">
            <HeartHandshake size={25} strokeWidth={2.5} />
          </span>
          <span className="underline underline-offset-4 decoration-red-500 ">
            Favoris
          </span>
        </span>
      </h3>

      <ArticleList datas={dataTestArticles}></ArticleList>
    </div>
  );
}

export default Favoris;
