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
          "w-full h-fit gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ",
        )}
      >
        {datas.map((data, dataIdx) => (
          <li className="" key={data._id + dataIdx}>
            <ArticleListItem data={data}></ArticleListItem>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ArticleList;
