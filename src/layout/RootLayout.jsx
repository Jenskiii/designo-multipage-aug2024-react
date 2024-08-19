import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export default function RootLayout() {
  return (
    <>
      {/* header */}
      <Header />

      {/* outlet */}
 
        <Outlet />
    </>
  );
}
