import React, { useState } from "react";
import { Button, Drawer, Anchor } from "antd";

const menuList = [
    {
        key: "home",
        title: "Home",
        href: "#home",
    },
    {
        key: "about",
        title: "About",
        href: "#about",
    },
    {
        key: "features",
        title: "Features",
        href: "#features",
    },
    {
        key: "works",
        title: "How it works",
        href: "#works",
    },
    {
        key: "faq",
        title: "FAQ",
        href: "#faq",
    },
    {
        key: "pricing",
        title: "Pricing",
        href: "#pricing",
    },
    {
        key: "contact",
        title: "Contact",
        href: "#contact",
    },
];
const AppHeader = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a href="http://www.google.com">Tech</a>
                </div>
                <div className="mobileHidden">
                    <Anchor targetOffset={65} items={menuList} />
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <i className="fas fa-bars"></i>
                    </Button>
                    <Drawer
                        title="Basic Drawer"
                        placement="right"
                        onClose={onClose}
                        open={open}
                    >
                        <Anchor targetOffset={65} items={menuList} />
                    </Drawer>
                </div>
            </div>
        </div>
    );
};

export default AppHeader;
