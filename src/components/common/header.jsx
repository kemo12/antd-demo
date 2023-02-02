import React from "react";
import { Anchor } from "antd";
const menuList = [
    {
        title: "Home",
        href: "#home",
    },
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Features",
        href: "#features",
    },
    {
        title: "How it works",
        href: "#works",
    },
    {
        title: "FAQ",
        href: "#faq",
    },
    {
        title: "Pricing",
        href: "#pricing",
    },
    {
        title: "Contact",
        href: "#contact",
    },
];
const AppHeader = () => {
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a href="http://www.google.com">Tech</a>
                </div>

                <Anchor targetOffset={65} items={menuList} />
            </div>
        </div>
    );
};

export default AppHeader;
