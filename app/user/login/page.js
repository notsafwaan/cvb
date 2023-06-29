"use client";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function UserLogin() {
  const router = useRouter();

  const onFinish = (values) => {
    console.log("Success:", values);
    router.push("/user/vaccine-centre");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.main}>
      <h1>User Login</h1>
      <Button
        type="link"
        onClick={() => router.push("/user/signup")}
        className={styles.link}
      >
        Go to Sign Up Page
      </Button>
      <Form
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
