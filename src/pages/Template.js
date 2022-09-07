import React, { useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export function BlankPage() {
  return (
    <>
      <Outlet />
    </>
  )
}


export default function Template() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  
  return (
    <main className="content">
      <Navbar />
      <Sidebar />
        <Outlet />
      <Footer/>
    </main>
  )
}