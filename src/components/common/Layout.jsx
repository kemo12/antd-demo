import React from "react";
import { Layout } from "antd";
import AppHeader from "./header";
import Home from "../../pages/home";
import AppFooter from "./footer";
const { Header, Content, Footer } = Layout;
const SiteLayout = () => {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader />
            </Header>
            <Content>
                <Home />
            </Content>
            <Footer>
                <AppFooter />
            </Footer>
        </Layout>
    );
};

export default SiteLayout;
