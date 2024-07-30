import { stringFuse } from "@/utils/functions";
import { Search } from "lucide-react";
import React from "react";

export function ArticleTags({
  tags,
  withSearch = false,
  classes,
}: {
  tags: string[];
  withSearch?: boolean;
  classes?: string;
}) {
  return (
    <div className={"flex flex-wrap gap-1 " + classes || ""}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={stringFuse(
            "px-2 p-1 rounded-full text-sm ring-zinc-200 flex-center gap-1 ",
            withSearch
              ? "bg-snow hover:ring-2 cursor-pointer "
              : "bg-zinc-100 ",
          )}
        >
          {withSearch && (
            <span className="">
              <Search size={12} strokeWidth={2.5} />
            </span>
          )}

          <span className="">{tag}</span>
        </span>
      ))}
    </div>
  );
}
