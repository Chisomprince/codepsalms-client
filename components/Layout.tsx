import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-100 dark:bg-zinc-800">
      <Nav />
      <div className=" max-w-7xl mx-auto">
        <div className=" mx-auto ">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
