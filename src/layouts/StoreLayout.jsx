import React from "react";
import Header from "../components/Header"; // your new header/navbar component
import { Outlet } from "react-router-dom";

export default function StoreLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </>
  );
}
