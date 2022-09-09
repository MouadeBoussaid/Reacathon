import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { LaunchPage } from "./LaunchPage/LaunchPage";
import { NotFound } from "./NotFound/NotFound";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/launch/:launchId" element={<LaunchPage/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
