import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./Pages/HomeView";
import NotFoundView from "./Pages/NotFoundView";
import StaffDetailsView from "./Pages/StaffDetailsView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/staff/:id" element={<StaffDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
