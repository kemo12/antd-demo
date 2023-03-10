import { BackTop, FloatButton } from "antd";
import React from "react";

const AppFooter = () => {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a href="#">Kamel Dawoud</a>
                    <ul className="socials">
                        <li>
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">Copyright &copy; 2020 Tech</div>
                    <FloatButton.BackTop>
                        <div className="goTop">
                            <i className="fas fa-arrow-circle-up"></i>
                        </div>
                    </FloatButton.BackTop>
                </div>
            </div>
        </div>
    );
};

export default AppFooter;
