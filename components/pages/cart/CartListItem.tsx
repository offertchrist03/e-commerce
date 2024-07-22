import { ArticleCartProps } from "@/types";
import { threesomeString } from "@/utils/functions";
import { X } from "lucide-react";
import React from "react";

function CartListItem({ data }: { data: ArticleCartProps }) {
  const {
    _id,
    createdAt,
    updatedAt,
    name,
    images,
    description,
    category,
    tags,
    price,
    discount = data.discount || 0,
    likes,
    quantity,
  } = data;

  const resPrice = price - (price * discount) / 100;

  return (
    <tr className="w-full h-14 hover:bg-zinc-100 " key={_id}>
      <td className="w-[45%] max-w-[45%] ">
        <div className="w-full h-full px-3 truncate flex items-center gap-2 ">
          <span className="h-12 aspect-square block border border-zinc-200 bg-zinc-100 relative "></span>
          <span className="">{name}</span>
        </div>
      </td>

      <td className="w-[10%] max-w-[10%] ">
        <div className="w-full h-full px-3 truncate ">{quantity}</div>
      </td>

      <td className="w-1/5 max-w-[20%] ">
        <div className="w-full h-full px-3 truncate flex flex-col ">
          {discount > 0 && (
            <span className="w-fit h-fit uppercase article-previous-price relative ">{`${threesomeString(
              price,
            )} mga`}</span>
          )}
          <span className="uppercase ">{`${threesomeString(
            resPrice,
          )} mga`}</span>
        </div>
      </td>
      <td className="w-1/5 max-w-[20%] ">
        <div className="w-full h-full px-3 truncate ">
          <span className="uppercase ">{`${threesomeString(
            resPrice * quantity,
          )} mga`}</span>
        </div>
      </td>

      <td className="w-[5%] max-w-[5%] ">
        <div className="w-full h-full flex-center ">
          <span
            className="w-8 max-w-8 h-8 max-h-8 button red rounded-full "
            style={{ minWidth: 0 + "px" }}
          >
            <X size={16} strokeWidth={2.5} />
          </span>
        </div>
      </td>
    </tr>
  );
}

export default CartListItem;
