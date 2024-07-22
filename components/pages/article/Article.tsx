import {
  RatingComponent,
  ReadRatedComponent,
  ReadRatedComponent2,
} from "@/components/packages/rating/react-stars";
import { ArticleProps } from "@/types";
import { threesomeString } from "@/utils/functions";
import { ArrowBigRightDash, Container, Search, Star } from "lucide-react";
import React from "react";
import ArticleSimilars from "./ArticleSimilars";
import ArticleImageDetails from "./article-image";
import { convertToStringDate } from "@/utils/dates";

function Article({ data }: { data: ArticleProps }) {
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
    quatity,
    ratings,
    discount = data.discount || 0,
  } = data;

  const calcRate = () => {
    if (ratings && ratings.length > 0) {
      let res =
        ratings
          .map((rating) => rating.note)
          .reduce((prev, val) => (prev += val)) / ratings.length;
      return res;
    }

    return 0;
  };
  const rate = calcRate();

  const resPrice = price - (price * discount) / 100;

  return (
    <div className="w-full h-fit grid grid-cols-4 gap-5 ">
      <div className="col-span-full mt-2 ">
        <p className="w-full ">{name}</p>

        <h6 className="italic opacity-75 ">{convertToStringDate(updatedAt)}</h6>
      </div>

      <div className="col-span-2 w-full h-fit border border-zinc-200 relative ">
        <ArticleImageDetails images={images}></ArticleImageDetails>
      </div>

      <ul className="col-span-2 flex flex-col gap-5 ">
        <li className="uppercase ">
          <ReadRatedComponent2
            rate={rate}
            raters={ratings ? ratings.length : 0}
          ></ReadRatedComponent2>
          {/* <div className="w-fit h-fit flex items-center gap-1 ">
            <span className="w-fit min-w-fit truncate">{`( ${
              ratings ? ratings.length : 0
            } avis ${rate})`}</span>
            <ReadRatedComponent rate={rate}></ReadRatedComponent>
          </div> */}

          {discount && discount > 0 ? (
            <h6 className="flex items-baseline gap-2 ">
              <span className="w-fit text-sm font-semibold ">{`remise:`}</span>
              <span className=""> {`- ${discount} %`}</span>
            </h6>
          ) : (
            <></>
          )}

          <h6 className="flex items-baseline gap-2 ">
            <span className="w-fit text-sm font-semibold ">{`prix:`}</span>

            {discount > 0 ? (
              <span
                className="article-previous-price relative "
                style={{ fontSize: 14 + "px" }}
              >{`${threesomeString(price)} mga`}</span>
            ) : (
              <></>
            )}

            <span className="text-green-600 font-semibold ">{`${threesomeString(
              resPrice,
            )} mga`}</span>
          </h6>
        </li>

        <li className="px-2 p-1 bg-emerald-600/5 text-emerald-600 ">
          quantite disponible: {quatity}
        </li>

        <li className="">
          <h6 className="w-fit text-sm uppercase font-semibold mb-1 ">
            description:
          </h6>
          <p className="">
            {description} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Distinctio beatae quas et labore, fugiat voluptas tempore
            iste, repellat inventore, commodi corrupti excepturi harum?
            Laboriosam odio soluta alias quod iusto porro.
          </p>
        </li>

        <li className="">
          <h6 className="w-fit mb-2 text-sm uppercase font-semibold flex items-center gap-1 text-theme bg-theme/10 px-2 p-1 rounded-full hover:ring-2 ring-theme/40 cursor-pointer ">
            <span className="">
              <ArrowBigRightDash size={20} strokeWidth={2.5} />
            </span>
            <span className="">{category}</span>
          </h6>

          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 p-1 bg-snow rounded-full text-sm hover:ring-2 ring-zinc-200 cursor-pointer flex-center gap-1 "
              >
                <span className="">
                  <Search size={12} strokeWidth={2.5} />
                </span>
                <span className="">{tag}</span>
              </span>
            ))}
          </div>
        </li>
      </ul>

      <div className="col-span-full w-full h-fit mb-3 ">
        <RatingComponent></RatingComponent>
      </div>

      <div className="col-span-full w-full h-fit ">
        <ArticleSimilars></ArticleSimilars>
      </div>
    </div>
  );
}

export default Article;
