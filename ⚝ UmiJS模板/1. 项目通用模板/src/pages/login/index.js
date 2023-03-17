import { useAuth } from "@/hooks";
import { Button, Form, Input } from "antd";
import { useCallback, useState } from "react";

const LoginPage = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const onLogin = useCallback(async (values) => {
    setLoading(true);
    try {
      await login(values);
    } catch (err) {
      setLoading(false);
    }
  });

  return (
    <div
      style={{
        backgroundColor: "#2d3a4b",
        width: "100%",
        height: "100%",
        margin: "0",
      }}
    >
      <div
        style={{
          width: "520px",
          height: "520px",
          margin: "0 auto",
          padding: "160px 35px 0",
        }}
      >
        <Form name="login" onFinish={onLogin}>
          <h3
            style={{
              fontSize: "26px",
              color: "#eee",
              margin: "0 auto 40px auto",
              textAlign: "center",
              fontWeight: "700",
            }}
          >
            XX系统登录
          </h3>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入域账号" }]}
          >
            <Input
              placeholder="域账号"
              style={{ lineHeight: "36px" }}
              autoComplete="off"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password
              placeholder="域密码"
              style={{ lineHeight: "36px" }}
              autoComplete="off"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%", borderRadius: "4px", fontSize: "14px" }}
              loading={loading}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
