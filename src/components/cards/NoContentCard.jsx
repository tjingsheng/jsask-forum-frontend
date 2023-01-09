import { Card } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const NoContentCard = ({ width, message = "No Content Found" }) => {
  return (
    <Card
      style={{
        margin: "10px auto",
        width: width,
      }}
      bodyStyle={{
        padding: "0",
      }}
    >
      <Title
        level={3}
        style={{
          display: "inline-block",
          margin: "0px",
          padding: "10px",
        }}
      >
        {message}
      </Title>
    </Card>
  );
};

export default NoContentCard;
