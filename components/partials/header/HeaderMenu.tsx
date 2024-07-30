"use client";

import { HeartHandshake, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SimpleAlternation } from "../../common/alternate-strings";
import { usePathname } from "next/navigation";
import { stringFuse } from "@/utils/functions";

function HeaderMenu() {
  const path = usePathname();

  return (
    <ul className="w-full h-full flex justify-end items-center gap-3 ">
      <li className="">
        <Link
          href={"/favoris"}
          className={stringFuse(
            "w-10 h-10 button red rounded-full ",
            path.indexOf("/favoris") !== -1 ? "active" : "",
          )}
        >
          <HeartHandshake size={16} strokeWidth={2.5} />
        </Link>
      </li>

      {/* <li className="">
        <Link
          href={"/cart"}
          className={stringFuse(
            "w-10 h-10 button emerald rounded-full ",
            path.indexOf("/cart") !== -1 ? "active" : "",
          )}
        >
          <ShoppingCart size={16} strokeWidth={2.5} />
        </Link>
      </li> */}

      <li className=" ">
        <span className="w-fit h-10 button theme active rounded-full px-3 gap-2">
          <span className="">
            <User size={16} strokeWidth={2.5} />
          </span>

          <span className="opacity-50">|</span>

          <span className="relative w-fit truncate h-full flex-center ">
            <SimpleAlternation
              classes="w-24 text-center "
              items={[`se connecter`, `s'inscrire`]}
            ></SimpleAlternation>
          </span>
        </span>
      </li>
    </ul>
  );
}

export default HeaderMenu;
