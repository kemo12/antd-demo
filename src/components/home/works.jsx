import { Button, Modal } from "antd";
import React, { useState } from "react";

const Works = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div id="works" className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Lorem ipsum dolor sit,Lorem ipsum dolor sit.</p>
                </div>
                <div className="contentHolder">
                    <Button type="primary" onClick={showModal}>
                        <i className="fas fa-play"></i>
                    </Button>
                </div>

                <Modal
                    title="kamel dawoud"
                    open={isModalOpen}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/rIEGqPmPaSM"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </Modal>
            </div>
        </div>
    );
};

export default Works;
