import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "next-themes";
import "./index.css";
import App from "./App";
import ProjectsPage from "./pages/Projects";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./Apollo/ApolloClient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <ThemeProvider attribute="class">
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/projects"
              element={
                <ApolloProvider client={client}>
                  <ProjectsPage />
                </ApolloProvider>
              }
            />
            <Route path="/" element={<Navigate replace to="/" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
