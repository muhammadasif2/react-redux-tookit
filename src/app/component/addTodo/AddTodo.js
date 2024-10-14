import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../redux/feature/todoSlice";
const AddTodo = (props) => {
  const { setUpdatedData, updatedData } = props;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    if (updatedData) {
      form.setFieldsValue({
        text: updatedData.text,
      });
    }
  }, [updatedData]);
  const onFinish = (values) => {
    if (!updatedData) {
      dispatch(addTodo(values.text));
      form.resetFields();
      setUpdatedData();
    }
    if (updatedData) {
      alert("update");
      dispatch(updateTodo({ id: updatedData.id, text: values.text }));
      form.resetFields();
      setUpdatedData();
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="text"
          rules={[
            {
              required: true,
              message: "Please enter value!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddTodo;
