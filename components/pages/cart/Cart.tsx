import { ShoppingCart } from "lucide-react";
import React from "react";
import CartList from "./CartList";
import { dataTestArticles } from "@/test/data-test";

function Cart() {
  return (
    <div className="w-full h-fit py-3 flex flex-col gap-5 ">
      <h3 className="">
        <span className="w-fit h-fit flex justify-center items-center gap-2 text-lg uppercase font-bold text-emerald-600 ">
          <span className="">
            <ShoppingCart size={25} strokeWidth={2.5} />
          </span>
          <span className="underline underline-offset-4 decoration-emerald-600 ">
            Panier
          </span>
        </span>
      </h3>

      <CartList
        datas={dataTestArticles.map((article) => article._id)}
      ></CartList>
    </div>
  );
}

export default Cart;
