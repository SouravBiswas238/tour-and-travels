import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, Form, Input } from 'antd';

const CreateBlogButton = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [modalVisible, setModalVisible] = React.useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const onSubmit = (data) => {
    console.log('Submitted:', data);
    // Reset form after successful submission
    reset();
    // Close the modal
    hideModal();
  };

  return (
    <div className='mx-auto container'>
      <div className='text-black text-end mt-5 me-10 '>
        <Button className='' onClick={showModal}>
          Create Blog
        </Button>
      </div>

      <Modal
        title="Create Blog"
        visible={modalVisible}
        onCancel={hideModal}
        footer={null}
      >
        <Form onFinish={handleSubmit(onSubmit)}>
          <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Title is required' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Content is required' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Cover Image" name="coverImage" rules={[{ required: true, message: 'Cover Image is required' }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button className='text-black bg-grey-500' type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateBlogButton;
