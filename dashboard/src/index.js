import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { saveTokenFromURL } from "./utils/auth";

import "./index.css";

import { GeneralContextProvider } from "./components/GeneralContext";
import ProtectedDashboard from "./components/ProtectedDashboard";

saveTokenFromURL();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GeneralContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ProtectedDashboard />} />
        </Routes>
      </BrowserRouter>
    </GeneralContextProvider>
  </React.StrictMode>
);
