import { Link } from "react-router-dom";
import { routes } from "../../entity";
import * as React from "react";
import { Button, Layout, Menu } from "antd";
import styled from "styled-components";

const buttonAbout = () => {
  return (
    <Link to={routes.aboutUs}>
      <Button type="text">О нас</Button>
    </Link>
  );
};

const buttonHistory = () => {
  return (
    <Link to={routes.history}>
      <Button type="text">История</Button>
    </Link>
  );
};
const buttonPreview = () => {
  return (
    <Link to={routes.preview}>
      <Button type="text">Главная</Button>
    </Link>
  );
};
const buttonArticle = () => {
  return (
    <Link to={routes.article}>
      <Button type="text">Новости</Button>
    </Link>
  );
};

const buttonGallery = () => {
  return (
    <Link to={routes.gallery}>
      <Button type="text">Галлерея</Button>
    </Link>
  );
};

export const Header: React.FC = () => {
  const headerButtons = [
    buttonAbout,
    buttonArticle,
    buttonHistory,
    buttonPreview,
    buttonGallery,
  ];

  return (
    <Layout.Header>
      <div className="logo" />
      <Menu
        theme={"light"}
        mode="horizontal"
        color="blue"
        style={{ minWidth: 0, flex: "auto", justifyContent: "center" }}
        defaultSelectedKeys={["0"]}
        items={headerButtons.map((el, index) => {
          const key = index + 1;
          return {
            key,
            label: el(),
          };
        })}
      />
    </Layout.Header>
  );
};
