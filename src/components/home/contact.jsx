import React from "react";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;
const Contact = () => {
    return (
        <div id="faq" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Get in Touch</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </p>
                </div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 30 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        name="fullname"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Full Name!",
                            },
                        ]}
                    >
                        <Input placeholder="Full Name" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input Your Email!",
                            },
                        ]}
                    >
                        <Input type="email" placeholder=" Email Address" />
                    </Form.Item>
                    <Form.Item
                        name="subject"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Subject!",
                            },
                        ]}
                    >
                        <Input placeholder="Subject" />
                    </Form.Item>
                    <Form.Item
                        name="message"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Message!",
                            },
                        ]}
                    >
                        <TextArea placeholder="Message" />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 0 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Contact;
