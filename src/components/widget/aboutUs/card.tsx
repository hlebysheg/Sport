import { Avatar, Card, Col, Row } from "antd"
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Meta from "antd/es/card/Meta"
import * as React from "react"
import { $article } from "../../features/article";
import {useStore} from "effector-react";

export const CardBody = () => {
  const articles = useStore($article);
    return <Row gutter={[16, 24]} align='middle' justify={'start'}>
    {articles.map(el=> <Col xl={6} key={el.id} sm={12} xs={24}>
        <Card
        hoverable={true}
        style={{ width: 200, marginLeft: 'auto', marginRight: 'auto' }}
        
        cover={
          <img
            alt="example"
            src={el.img}
          />
        }
        actions={true?[
          <EditOutlined key="edit" />,
          <DeleteOutlined key="delete" />,
        ]:null}
        //loading={true}
      >
        <Meta
          title={el.title}
          description={el.descriptipn}
          style={{height: 105, whiteSpace: "pre-line"}}
        />
      </Card>
    </Col>)}
    </Row>
}