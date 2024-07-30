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
    <div className={stringFuse("relative container mx-auto ", classes || "")}>
      {children}
    </div>
  );
}

export default ContainerComponent;
