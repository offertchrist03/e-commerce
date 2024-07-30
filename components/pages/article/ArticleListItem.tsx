import { SimpleAlternation } from "@/components/common/alternate-strings";
import { ReadRatedComponent } from "@/components/packages/rating/react-stars";
import { ArticleProps } from "@/types";
import { stringFuse, threesomeString } from "@/utils/functions";
import {
  Container,
  ExternalLink,
  Heart,
  LucideChevronsDown,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArticleTags } from "./article-components";

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
    // <div className="relative w-full h-fit py-3 overflow-hidden bg-snow border border-zinc-200 flex-center gap-3 flex-col hover:border-theme hover:ring-2 ring-theme/40 transition-all ">
    //   <Link
    //     href={"/article/id"}
    //     className="group w-full h-fit flex-center gap-3 flex-col cursor-pointer "
    //   >
    //     <h3
    //       className="w-full h-fit flex-center flex-col "
    //       style={{ lineHeight: 1 }}
    //     >
    //       <span className="flex items-baseline gap-2">
    //         <span className="max-w-36 truncate">{name}</span>
    //       </span>

    //       <SimpleAlternation
    //         items={tags}
    //         interval={2000}
    //         classes="max-w-36 truncate text-xs uppercase font-semibold text-theme "
    //       ></SimpleAlternation>
    //     </h3>

    //     <div className="w-full h-fit relative">
    //       <div
    //         className={stringFuse("w-2/3 mx-auto aspect-square flex-center ")}
    //       >
    //         <span className="">
    //           <Container size={50} strokeWidth={1} />
    //         </span>
    //       </div>

    //       <div className="group-hover:block hidden absolute top-0 left-0 w-full h-full bg-snow/90 px-3 ">
    //         <div className="w-full h-full p-3 border border-zinc-100 flex flex-col justify-between ">
    //           <p className="">{name}</p>

    //           <div className="">
    //             <ReadRatedComponent rate={5}></ReadRatedComponent>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </Link>

    //   <div className="w-full h-fit flex-center flex-col gap-2 ">
    //     <h6 className={"flex items-baseline gap-1 relative uppercase "}>
    //       <span className="font-semibold text-blue-600 ">{`${threesomeString(
    //         resPrice,
    //       )} mga`}</span>

    //       {discount > 0 ? (
    //         <span
    //           className={
    //             "article-previous-price absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[70%] "
    //           }
    //         >
    //           <span className="">{`${threesomeString(price)} mga`}</span>
    //           <span className=" text-xs "></span>
    //         </span>
    //       ) : (
    //         <></>
    //       )}
    //     </h6>

    //     <div className="w-fit flex-center gap-3">
    //       <span className="w-10 h-10 button red active rounded-full ">
    //         <Heart size={16} strokeWidth={2.5} />
    //       </span>

    //       <span className="w-10 h-10 button emerald rounded-full ">
    //         <ShoppingBag size={16} strokeWidth={2.5} />
    //       </span>
    //     </div>
    //   </div>

    //   {discount > 0 ? (
    //     <span className="absolute top-1 right-1 p-1 bg-yellow-400 text-black font-semibold block mb-1 ">
    //       {`- ${discount} %`}
    //     </span>
    //   ) : (
    //     <></>
    //   )}
    // </div>

    <div className="group w-full h-fit relative bg-white rounded overflow-hidden shadow ">
      <div className="w-full aspect-[16/10] relative bg-gradient-to-t from-theme to-theme/80 ">
        <Image
          alt=""
          src={`/uploads/${images[0]}`}
          fill
          className="w-full h-full object-contain object-center "
        ></Image>

        {discount > 0 ? (
          <span className="absolute top-3 left-3 p-1 bg-yellow-400 text-black font-semibold block mb-1 ">
            {`- ${discount} %`}
          </span>
        ) : (
          <></>
        )}

        <span className="w-10 h-10 flex-center button red active rounded-full absolute bottom-3 right-3 ">
          <Heart size={16} strokeWidth={2.5} />
        </span>
      </div>

      <ul className="w-full flex flex-col gap-1 p-3 pb-4 ">
        <li className="w-full h-fit flex justify-between items-center gap-3 ">
          <span className="truncate" style={{ lineHeight: 16 + "px" }}>
            <span className="block">{name}</span>
            <span className="text-sm uppercase font-semibold text-green-600 ">
              {category}
            </span>
          </span>

          {/* <span className="w-10 h-10 hidden group-hover:flex flex-center hover:text-theme ">
            <ExternalLink size={16} strokeWidth={2.5} />
          </span> */}
        </li>

        <li className="">
          <ArticleTags tags={tags}></ArticleTags>
        </li>

        <li className="w-full truncate ">
          <span className="w-full h-fit flex items-baseline gap-1 truncate uppercase ">
            <span className="text-lg font-medium ">{`${threesomeString(
              resPrice,
            )}`}</span>
            <span className="text-xs">{`mga`}</span>
          </span>
        </li>

        <li className="w-full h-fit flex-center">
          <Link
            href={"/article/id"}
            className="w-fit h-7 font-semibold button theme active rounded-full p-1 px-3 gap-1 text-xs uppercase flex-center "
          >
            <span className="">{`plus de details`}</span>
            <span className="">
              <LucideChevronsDown size={16} strokeWidth={2.5} />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ArticleListItem;
