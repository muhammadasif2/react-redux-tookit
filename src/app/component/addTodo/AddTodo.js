import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../redux/feature/todoSlice";
import { useLocation, useNavigate } from "react-router-dom";
const AddTodo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    if (state) {
      form.setFieldsValue({
        text: state.text,
      });
    }
  }, [state]);
  console.log("item", state);
  const onFinish = (values) => {
    if (!state) {
      dispatch(addTodo(values.text));
      form.resetFields();
      navigate("/");
    }
    if (state) {
      dispatch(updateTodo({ id: state.id, text: values.text }));
      form.resetFields();
      navigate("/");
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
