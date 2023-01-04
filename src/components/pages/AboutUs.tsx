import { Content } from "antd/es/layout/layout";
import * as React from "react";
import { AboutCarousel, HistoryBody } from "../widget";

export const AboutUs = () => {
  return (
    <div style={{ width: "100%" }}>
      <AboutCarousel />
      <Content
        style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
      >
        <HistoryBody />
      </Content>
    </div>
  );
};
