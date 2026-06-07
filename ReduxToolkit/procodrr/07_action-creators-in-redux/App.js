import React from "react";
import { Outlet } from "react-router"; 
import Header from "./components/Header";
import "./App.css";

export default function App() {
  return (
    <>
      {/* This Header stays visible on EVERY page view automatically */}
      <Header />

      <main className="page-shell">
        {/* React Router will inject the correct page component down here */}
        <Outlet />
      </main>
    </>
  );
}
