import React from "react";
import Header from "../components/Header";
import BacktoHomePageButton from "./BacktoHomePageButton";
import { useLocation } from "react-router-dom";

const Layout = ({ title, description, children }) => {
  const location = useLocation();

  // URL'de "/projects" bulunuyorsa backButtonVisible true, yoksa false olacak
  const backButtonVisible = location.pathname === "/projects";
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      {backButtonVisible ?

      (  <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-gray-900 dark:text-white">
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-between">
            {" "}
            <BacktoHomePageButton />
            <Header />
          </div>
          {children}
        </div>
      </div>) : (
    <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-gray-900 dark:text-white">
    <div className="w-full h-full">
        <Header />
        {children}
    </div>
</div>
      )
      }
    </>
  );
};

export default Layout;
