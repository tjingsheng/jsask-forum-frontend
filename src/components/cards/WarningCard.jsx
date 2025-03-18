import { Card, Table, Button, Typography } from "antd";
import { useState } from "react";

export function WarningCard() {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const dataSource = [
    {
      key: "1",
      field: "Username",
      value: "demo",
    },
    {
      key: "2",
      field: "Password",
      value: "demo",
    },
  ];

  const columns = [
    {
      title: "Field",
      dataIndex: "field",
      key: "field",
      width: "40%",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      width: "60%",
    },
  ];

  return (
    <>
      {visible ? (
        <Card
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
            maxWidth: 400,
            background: "#fff5f5",
            border: "1px solid red",
          }}
          title="Security Warning"
          extra={
            <Button type="text" onClick={toggleVisibility}>
              Hide
            </Button>
          }
        >
          <Typography style={{ fontSize: "14px", marginBottom: "10px" }}>
            This site is no longer actively maintained and may not be secure. Do
            not enter any sensitive information. Feel free to use the demo
            account below.
          </Typography>
          <Table
            showHeader={false}
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            size="small"
            bordered
          />
        </Card>
      ) : (
        <Button
          type="primary"
          onClick={toggleVisibility}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          Show Warning
        </Button>
      )}
    </>
  );
}
