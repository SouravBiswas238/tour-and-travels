import React, { useContext, useState } from 'react';
import { Button, Modal, Form, Input, Select, DatePicker, InputNumber, Row, Col } from 'antd';
import { UserContext } from '../../../../UserContext/userContext';
import { useNavigate } from "react-router-dom"
import { MdPayment } from 'react-icons/md';


const PayMentModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { userData } = useContext(UserContext);
    const email = userData?.email
    const navigate = useNavigate();


    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };



    return (
        <div className="mx-auto container">
            <div className="text-end">
                <div
                    className='flex justify-center items-center text-blue-500 hover:text-blue-700 ' onClick={() => {
                        email
                            ? showModal()
                            : navigate("/login");
                    }}><span className='px-1'>Pay</span> <MdPayment className='text-xl' />
                </div>
            </div>

            <Modal
                title="Make Payment"
                visible={modalVisible}
                onCancel={hideModal}
                footer={null}
            >
                Payment



            </Modal>
        </div>
    );
};

export default PayMentModal;
