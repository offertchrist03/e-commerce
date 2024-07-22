import { dataTestArticles } from "@/test/data-test";
import { ArticleCartProps } from "@/types";
import { compareArrays, threesomeString } from "@/utils/functions";
import { Check, X } from "lucide-react";
import React from "react";
import CartListItem from "./CartListItem";

function CartList({ datas }: { datas: string[] }) {
  const articles: ArticleCartProps[] | null = dataTestArticles
    .filter((article) => compareArrays([article._id], datas))
    .map((article) => ({ ...article, quantity: 7 }));

  const totalQuantity: number = articles
    .map((article) => article.quantity)
    .reduce((prev, value) => (prev += value));

  const totalPrice: number = articles
    .map(
      (article) =>
        article.quantity *
        (article.price - (article.price * (article.discount || 0)) / 100),
    )
    .reduce((prev, value) => (prev += value));

  return (
    <div className="w-full h-fit bg-snow border border-zinc-200 flex flex-col ">
      <table className="w-full">
        <thead className="w-full h-14 ">
          <tr className="w-full h-full ">
            <th className="w-[45%] max-w-[45%] ">
              <div className="w-full h-full px-3 truncate text-start flex items-center gap-2 uppercase italic text-sm font-semibold ">
                <span className="">nom</span>
              </div>
            </th>

            <th className="w-[10%] max-w-[10%] ">
              <div className="w-full h-full px-3 truncate text-start flex items-center uppercase italic text-sm font-semibold ">
                quantite
              </div>
            </th>

            <th className="w-1/5 max-w-[20%] ">
              <div className="w-full h-full px-3 truncate text-start flex items-center uppercase italic text-sm font-semibold ">
                prix unitaire
              </div>
            </th>
            <th className="w-1/5 max-w-[20%] ">
              <div className="w-full h-full px-3 truncate text-start flex items-center uppercase italic text-sm font-semibold ">
                prix total
              </div>
            </th>

            <th className="w-[5%] max-w-[5%] "></th>
          </tr>
        </thead>

        <tbody className="">
          {articles.map((article) => (
            <CartListItem key={article._id} data={article}></CartListItem>
          ))}
        </tbody>
      </table>

      <ul className="relative mt-3 w-full h-fit py-3 bg-zinc-100 flex items-baseline font-semibold   ">
        <li className="bg-before before:bg-theme "></li>

        <li className="w-[45%] max-w-[45%] text-green-600 px-3 ">
          <span className="block uppercase italic ">total a payer</span>
        </li>
        <li className="w-[30%] max-w-[30%] px-3 ">
          <span className="block text-theme">{`${totalQuantity} article${
            totalQuantity > 1 ? "s" : ""
          }`}</span>
        </li>
        <li className="relative w-[25%] max-w-[25%] h-full flex justify-between items-baseline px-3 ">
          <span className="w-fit h-fit block uppercase text-theme ">{`${threesomeString(
            totalPrice,
          )} mga`}</span>

          <span className="w-10 max-w-10 h-10 max-h-10 button green active rounded-full flex-center ">
            <Check size={16} strokeWidth={2.5} />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CartList;
