import { Card } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Messages } from "../../constants";

const NoContentCard = ({ width, message = Messages.NO_CONTENT }) => {
  return (
    <Card
      style={{
        margin: "10px auto",
        width: width,
        textAlign: "center",
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
