import { Col, Button, Row } from "antd";
import { useState } from "react";

export function ButtonComponent() {
  const [button, setButton] = useState({
    type: "text",
    shape: "default",
    size: "default",
    text:"initial state",
  });
  const buttons = [
    {
      type: "default",
      shape: "round",
      size: "small",
      text:"index 0",
    },
    {
      type: "dashed",
      shape: "circle",
      size: "large",
      text:"index 1",
    },
    {
      type: "primary",
      shape: "round",
      size: "small",
      text:"index 2",
    },
    {
      type: "text",
      shape: "circle",
      size: "default",
      text:"index 3",
    },
  ];
  function handleOnButtonChange() {
    var index = Math.floor(Math.random() * buttons.length);
    setButton(buttons[index])
  };
  return (
    <Row>
      <Col offset={10} className="mt-5">
        <Button type={button.type} shape={button.shape} size={button.size} onClick={handleOnButtonChange} >{button.text}</Button>
        <br />button.type: {button.type}
      </Col>
    </Row>
  );
}
