import { ArticleProps } from "@/types";
import React from "react";
import ArticleListItem from "./ArticleListItem";
import { stringFuse } from "@/utils/functions";

function ArticleList({
  datas,
  isDetail = false,
}: {
  datas: ArticleProps[];
  isDetail?: boolean;
}) {
  return (
    <>
      <ul
        className={stringFuse(
          "w-full h-fit gap-3 grid ",
          isDetail ? "grid-cols-4 " : "grid-cols-5 ",
        )}
      >
        {datas.map((data) => (
          <li className="" key={data._id}>
            <ArticleListItem data={data}></ArticleListItem>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ArticleList;
