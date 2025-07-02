import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavTopMenu from "./NavTopMenu";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavTopMenu />
      <NavMenu />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
