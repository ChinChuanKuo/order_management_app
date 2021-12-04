import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuBar from "../models/MenuBar";
import Home from "../views/Home";

const Routers = () => {
  return (
    <>
      <MenuBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
