import React, { FC } from "react";
import { Layout, Col, Row } from "antd";

//Import Component
import Navbar from "./navbar/Navbar";
import Menu from "./sidebar/Menu";
import Item from "../components/Item";
import Content from "./content/index";

//Import Css
import "../index.css";
import Field from "./sidebar/Field";

//const { Header, Footer, Sider, Content } = Layout;

const Container: FC = () => {
  return (
    <>
      <Row>
        <Col
          span={6}
          style={{
            height: "100vh",
            paddingTop: "30px",
            paddingLeft: "20px",
            paddingRight: "20px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Menu />
          <Field />
        </Col>
        <Col span={18} style={{ paddingLeft: "10px" }}>
          <Row>
            <Navbar />
          </Row>
          <Row>
            <Col>
              <Content />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Container;
