import React from "react";
import Header from "../components/Header";
import BacktoHomePageButton from "./BacktoHomePageButton";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const backButtonVisible = location.pathname === "/projects";
  return (
    <>
      {backButtonVisible ? (
        <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-gray-900 dark:text-white">
          <div className="w-full h-full flex flex-col">
            <div className="flex justify-between">
              <BacktoHomePageButton />
              <Header />
            </div>
            {children}
          </div>
        </div>
      ) : (
        <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-gray-900 dark.text-white">
          <div className="w-full h-full">
            <Header />
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
