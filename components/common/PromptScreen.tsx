"use client";

import React from "react";
import ContainerComponent from "./ContainerComponent";
import { stringFuse } from "@/utils/functions";

function PromptScreen({
  children,
  classes,
  display,
  setDisplay,
}: {
  children: React.ReactNode;
  classes?: string;
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      {display && (
        <section className="w-screen h-screen z-20 fixed top-0 left-0 bg-zinc-100/50 backdrop-blur-md ">
          <ContainerComponent
            classes={stringFuse("mx-auto h-full ", classes || "")}
          >
            <i
              className="w-full h-full block absolute top-0 left-0"
              onClick={() => {
                setDisplay(false);
              }}
            ></i>

            {children}
          </ContainerComponent>
        </section>
      )}
    </>
  );
}

export default PromptScreen;
