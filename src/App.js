import React from "react";
// import Card from './components/Card';
// import CardPage from './components/CardPage';
// import CardDetail from './components/CardDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./Pages/HomeView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        {/* <Route path="/cards/:title" component={CardDetail} /> */}
        {/* <Route path={["/not-found", "*"]} component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
