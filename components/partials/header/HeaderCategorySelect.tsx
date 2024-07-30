"use client";

import { dataTestCategories } from "@/test/data-test";
import { stringFuse } from "@/utils/functions";
import React, { useState } from "react";

export function HeaderCategorySelect() {
  const [open, setOpen] = useState(false);
  const [categorySelected, setCategorySelected] = useState("tout");

  return (
    <div
      onMouseLeave={() => {
        setOpen(false);
      }}
      className="w-fit h-fit absolute right-2 "
    >
      <span
        onMouseOver={() => {
          setOpen(true);
        }}
        className={stringFuse(
          "w-28 max-w-28 h-6 px-3 truncate cursor-pointer text-xs font-semibold uppercase button theme active rounded-full flex-center gap-3 ",
          open ? "ring-2 ring-theme/40 " : "",
        )}
      >
        <span className="w-full text-center block truncate ">
          {categorySelected}
        </span>
      </span>

      {open && (
        <div className="w-fit h-fit absolute top-6 left-1/2 -translate-x-1/2 ">
          <ul className="w-fit h-fit mt-2 ring-1 ring-theme/40 bg-zinc-100 p-3 flex flex-col gap-1 rounded-md ">
            <li className="p-1 px-2 truncate italic underline ">categories</li>

            {dataTestCategories
              // .filter((category) => category !== categorySelected)
              .map((category) => (
                <li
                  key={category}
                  onClick={() => {
                    if (category !== categorySelected) {
                      setCategorySelected(category);
                      setOpen(false);
                    }
                  }}
                  className={stringFuse(
                    "p-1 px-2 truncate cursor-pointer rounded-md ",
                    category !== categorySelected
                      ? "hover:bg-zinc-200 "
                      : "bg-theme/20 ",
                  )}
                >
                  <span className="text-xs font-semibold uppercase">
                    {category}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
