import React from "react";
import ContainerComponent from "../common/ContainerComponent";
import { SimpleAlternation } from "../common/alternate-strings";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";
// import { threesomeString } from "@/utils/functions";

function Header() {
  return (
    <>
      <div className="w-full h-20 relative "></div>
      <div className="w-full h-20 bg-zinc-100/90 bg-before before:bg-theme fixed top-0 left-0 z-10 backdrop-blur ">
        <ContainerComponent classes="h-full flex">
          <h1 className="w-[35%] text-theme h-full flex items-center  ">
            <Link
              href={"/"}
              className="w-fit h-fit uppercase font-bold text-2xl "
            >
              tsena
            </Link>
          </h1>

          <div className=" w-[30%] flex justify-center items-center ">
            <div className="relative w-full h-fit flex items-center gap-1 bg-zinc-100 rounded-full ">
              <input
                type="text"
                className="text-base bg-snow w-full h-10 rounded-full border border-theme relative pl-9 pr-32 p-2 outline-none focus:ring-2 ring-theme/40 "
              />

              <span className="absolute left-2 w-6 h-6 text-theme flex-center ">
                <Search size={16} strokeWidth={2.5} />
              </span>
              <span className="absolute right-2 w-28 max-w-28 truncate h-6 px-3 cursor-pointer text-xs font-semibold uppercase button theme active rounded-full flex-center gap-3 ">
                categorie
              </span>
            </div>
          </div>

          <div className="w-[35%] h-full ">
            <HeaderMenu></HeaderMenu>
          </div>
        </ContainerComponent>
      </div>
    </>
  );
}

export default Header;
