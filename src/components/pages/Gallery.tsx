import { Typography, Image, Row, Col, Pagination } from "antd";
import { Content } from "antd/es/layout/layout";
import { useStore } from "effector-react";
import { $galleryImg } from "../features/gallery";

export const Gallery = () => {
  const gallery = useStore($galleryImg);

  return (
    <Content>
      {gallery.map((el) => (
        <Typography key={el.theme}>
          <Typography.Title level={1}>{el.theme}</Typography.Title>
          <Row gutter={[16, 24]} align="middle" justify={"start"}>
            {el.imgs.map((el, id) => (
              <Col xl={6} key={el.id} sm={12} xs={24}>
                <Image src={el.src} />
              </Col>
            ))}
          </Row>
        </Typography>
      ))}
      <Pagination
        style={{ textAlign: "center", paddingTop: "2rem" }}
        simple
        defaultCurrent={2}
        total={50}
        pageSize={5}
      />
    </Content>
  );
};
