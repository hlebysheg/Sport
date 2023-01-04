import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutUs, Article, Preview, History, Gallery } from "./pages/index";
import { routes } from "./entity";
import { Header } from "./widget";
import styled from "styled-components";

const CustomBody = styled.div`
  padding-top: 60px;
  padding-left: 65px;
  padding-right: 65px;
  @media (max-width: 768px) {
    padding: 60px;
  }
  @media (max-width: 400px) {
    padding: 20px;
  }
`;
const App = () => (
  <div>
    <Header />
    <CustomBody>
      <Routes>
        <Route element={<AboutUs />} path={routes.aboutUs} />
        <Route element={<Article />} path={routes.article} />
        <Route element={<Preview />} path={routes.preview} />
        <Route element={<History />} path={routes.history} />
        <Route element={<Gallery />} path={routes.gallery} />
      </Routes>
    </CustomBody>
  </div>
);

export default App;
