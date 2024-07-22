import { SimpleAlternation } from "@/components/common/alternate-strings";
import { ReadRatedComponent } from "@/components/packages/rating/react-stars";
import { ArticleProps } from "@/types";
import { stringFuse, threesomeString } from "@/utils/functions";
import { Container, Heart, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

function ArticleListItem({ data }: { data: ArticleProps }) {
  const {
    _id,
    createdAt,
    updatedAt,
    archive,
    name,
    images,
    description,
    category,
    tags,
    price,
    discount = data.discount || 0,
  } = data;

  const resPrice = price - (price * discount) / 100;

  return (
    <div className="relative w-full h-fit py-3 overflow-hidden bg-snow border border-zinc-200 flex-center gap-3 flex-col hover:border-theme hover:ring-2 ring-theme/40 transition-all ">
      <Link
        href={"/article/id"}
        className="group w-full h-fit flex-center gap-3 flex-col cursor-pointer "
      >
        <h3
          className="w-full h-fit flex-center flex-col "
          style={{ lineHeight: 1 }}
        >
          <span className="flex items-baseline gap-2">
            <span className="max-w-36 truncate">{name}</span>
          </span>

          <SimpleAlternation
            items={tags}
            interval={2000}
            classes="max-w-36 truncate text-xs uppercase font-semibold text-theme "
          ></SimpleAlternation>
        </h3>

        <div className="w-full h-fit relative">
          <div
            className={stringFuse("w-2/3 mx-auto aspect-square flex-center ")}
          >
            <span className="">
              <Container size={50} strokeWidth={1} />
            </span>
          </div>

          <div className="group-hover:block hidden absolute top-0 left-0 w-full h-full bg-snow/90 px-3 ">
            <div className="w-full h-full p-3 border border-zinc-100 flex flex-col justify-between ">
              <p className="">{name}</p>

              <div className="">
                <ReadRatedComponent rate={5}></ReadRatedComponent>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="w-full h-fit flex-center flex-col gap-2 ">
        <h6 className={"flex items-baseline gap-1 relative uppercase "}>
          <span className="font-semibold text-blue-600 ">{`${threesomeString(
            resPrice,
          )} mga`}</span>

          {discount > 0 ? (
            <span
              className={
                "article-previous-price absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[70%] "
              }
            >
              <span className="">{`${threesomeString(price)} mga`}</span>
              <span className=" text-xs "></span>
            </span>
          ) : (
            <></>
          )}
        </h6>

        <div className="w-fit flex-center gap-3">
          <span className="w-10 h-10 button red active rounded-full ">
            <Heart size={16} strokeWidth={2.5} />
          </span>

          <span className="w-10 h-10 button emerald rounded-full ">
            <ShoppingBag size={16} strokeWidth={2.5} />
          </span>
        </div>
      </div>

      {discount > 0 ? (
        <span className="absolute top-1 right-1 p-1 bg-yellow-400 text-black font-semibold block mb-1 ">
          {`- ${discount} %`}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ArticleListItem;
