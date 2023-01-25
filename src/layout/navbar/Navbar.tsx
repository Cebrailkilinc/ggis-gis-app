import React, { FC } from "react";
import { Layout, Menu, theme } from "antd";

//Import Css
import "../../index.css";
import UserModal from "../../components/Modal";

const { Header, Content, Footer } = Layout;

const Navbar: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          backgroundColor: "white",
          borderBottom: "2px solid #f5f5f5",
        }}
      >
        <UserModal />
      </Header>
    </Layout>
  );
};

export default Navbar;
