import React from "react";
import MainLayout from "./MainLayout";

import "@/assets/globals.css";
import "@/assets/animations.css";
import "@/assets/index.css";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="">
      <body className="">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

export default AppLayout;
