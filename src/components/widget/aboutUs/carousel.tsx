import { Carousel, Typography } from "antd";
import * as React from "react";
import styled from "styled-components";
import { $carouselImg } from "../../features/Carousel";
import { useStore } from "effector-react";

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  maxWidth: "100%",
  objectFit: "cover",
  objectPosition: "bottom",
  filter: "blur(4px)",
};

const CustomCarousel = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

type imgProps = {
  src: string;
};

const ImgOpac = styled.div`
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.14);
    position: absolute;
    filter: blur(10px);
  }
  background: inherit;
  overflow: hidden;
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
`;

const ImgSpan = styled.div`
  position: absolute;
  background: white;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  height: 10%;
  width: 90%;
  border-top-left-radius 16px;
  border-top-right-radius 16px;
`;

const ImageCustom = (props: imgProps) => {
  return (
    <img
      style={contentStyle}
      src="https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg"
      width={"100%"}
      height={"auto"}
      loading={"eager"}
    />
  );
};
export const AboutCarousel = () => {
  const imgs = useStore($carouselImg);

  const imgBody = imgs.map((el, i) => (
    <div key={el + i} style={{ width: "100%" }}>
      <ImgOpac />
      <ImageCustom src={el} />
    </div>
  ));

  return (
    <CustomCarousel>
      <Carousel dotPosition="top" autoplay={true} autoplaySpeed={1500}>
        {imgBody}
      </Carousel>
      <ImgSpan>
        <Typography.Title level={1}>Пермская федерация спорта</Typography.Title>
      </ImgSpan>
    </CustomCarousel>
  );
};
