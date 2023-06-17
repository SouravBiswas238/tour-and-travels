import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, Form, Input, Select } from 'antd';
import { toast } from 'react-toastify';
import { UserContext } from '../../../../UserContext/userContext';
import { useNavigate } from "react-router-dom"


const CreateTourButton = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [modalVisible, setModalVisible] = useState(false);
    const { Option } = Select;
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const onSubmit = async (data) => {
        // try {
        //     console.log(data);
        //     // Make a POST request to the API to save the tour plan data
        //     const response = await Api.post('/tourplan/create', { tourPlan: data });
        //     console.log(response); // You can replace this with your desired action

        //     if (response?.data) {
        //         reset();
        //         hideModal();
        //     }
        //     // Display success notification
        //     toast.success(response?.message);
        // } catch (error) {
        //     // Display error notification
        //     toast.error('Failed to create tour plan');
        // }
    };

    return (
        <div className="mx-auto container">
            <div className="text-end mt-5">
                <Button onClick={() => {
                    userData?.email
                        ? showModal()
                        : navigate("/login");
                }}>Create Tour Plan</Button>
            </div>

            <Modal
                title="Create Tour Plan"
                visible={modalVisible}
                onCancel={hideModal}
                footer={null}
            >
                <Form onFinish={handleSubmit(onSubmit)}>
                    <Form.Item
                        label="Where do you want to go?"
                        name="destination"
                        rules={[{ required: true, message: 'Destination is required' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Name is required' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Email is required' },
                            { type: 'email', message: 'Invalid email format' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Mobile Number"
                        name="mobileNumber"
                        rules={[{ required: true, message: 'Mobile number is required' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Additional Details"
                        name="additionalDetails"
                        rules={[{ required: true, message: 'Additional details are required' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Level" name="level" rules={[{ required: true, message: 'Level is required' }]}>
                        <Select>
                            <Option value="beginner">Beginner</Option>
                            <Option value="intermediate">Intermediate</Option>
                            <Option value="advanced">Advanced</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default CreateTourButton;
