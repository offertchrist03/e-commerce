import ContainerComponent from "@/components/common/ContainerComponent";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <ContainerComponent classes="">
      <div className="w-full h-40 mb-7 bg-theme rounded-md block  "></div>

      {children}
    </ContainerComponent>
  );
}

export default layout;
