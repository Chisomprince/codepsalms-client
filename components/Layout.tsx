import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Nav />
      <div className="dark:bg-gray-800">
        <div className="container mx-auto ">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
