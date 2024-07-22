import { stringFuse } from "@/utils/functions";
import React from "react";

function ContainerComponent({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes?: string;
}) {
  return (
    <div
      className={stringFuse(
        "relative container max-w-7xl mx-auto px-3 ",
        classes || "",
      )}
    >
      {children}
    </div>
  );
}

export default ContainerComponent;
