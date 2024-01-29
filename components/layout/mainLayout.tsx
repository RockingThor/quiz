"use client";
import React from "react";
import { RecoilRoot } from "recoil";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <div>{children}</div>
    </RecoilRoot>
  );
};

export default MainLayout;
