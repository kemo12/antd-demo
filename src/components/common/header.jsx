import { Menu } from "antd";
import React from "react";

const AppHeader = () => {
    const menuList = [
        {
            key: "home",
            value: "Home",
        },
        {
            key: "about",
            value: "About",
        },
        {
            key: "features",
            value: "Features",
        },
        {
            key: "howitworks",
            value: "How it works",
        },
        {
            key: "faq",
            value: "FAQ",
        },
        {
            key: "pricing",
            value: "Pricing",
        },
        {
            key: "contact",
            value: "Contact",
        },
    ];
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a href="http://www.google.com">Tech</a>
                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={["home"]}
                    items={menuList.map((item) => ({
                        key: item.key,
                        label: item.value,
                    }))}
                />
            </div>
        </div>
    );
};

export default AppHeader;
