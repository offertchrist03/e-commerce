import ContainerComponent from "@/components/common/ContainerComponent";
import AppLayout from "@/components/layouts/AppLayout";
import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppLayout>
      <ContainerComponent classes="min-h-screen py-5 flex flex-col gap-5">
        {children}
      </ContainerComponent>
    </AppLayout>
  );
}

export default layout;
