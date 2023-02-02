import React from "react";
import { Layout } from "antd";
import AppHeader from "./header";
import Home from "../../pages/home";
const { Header, Content } = Layout;
const SiteLayout = () => {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
                <Home />
            </Content>
        </Layout>
    );
};

export default SiteLayout;
