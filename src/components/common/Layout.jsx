import React from "react";
import { Layout } from "antd";
import AppHeader from "./header";
const { Header } = Layout;
const SiteLayout = () => {
    return (
        <Layout className="mainLayout">
            <Header>
                <AppHeader />
            </Header>
        </Layout>
    );
};

export default SiteLayout;
