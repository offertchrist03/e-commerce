import React from "react";
import { ArrowRightCircle } from "lucide-react";
import { ArticleProps } from "@/types";
import ArticleList from "../article/ArticleList";

function DiscoveryList({
  color,
  title,
  datas,
  isDetail = false,
}: {
  color: string;
  title: React.ReactNode;
  datas: ArticleProps[];
  isDetail?: boolean;
}) {
  return (
    <div className={"w-full h-fit flex flex-col gap-5 "}>
      <div
        className={`w-full h-16 rounded-r-full overflow-hidden `}
        style={{ background: color }}
      >
        <div className="w-full h-full bg-gradient-to-r from-zinc-100 to-transparent flex items-center justify-between ">
          <h2
            className={`w-fit h-full text-lg flex-center uppercase font-bold `}
            style={{ color: color }}
          >
            {title}
          </h2>
          <span className="w-fit h-fit rounded-full uppercase font-semibold flex-center gap-2 mr-5 text-snow cursor-pointer ">
            <span className="">{`voir plus`}</span>
            <span className="">
              <ArrowRightCircle size={18} strokeWidth={2.5} />
            </span>
          </span>
        </div>
      </div>

      <ArticleList isDetail={isDetail} datas={datas}></ArticleList>
    </div>
  );
}

export default DiscoveryList;
