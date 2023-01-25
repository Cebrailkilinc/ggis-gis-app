import React, { FC } from "react";
import { CloseOutlined, HolderOutlined } from "@ant-design/icons";

//Import Css
import "../App.css";

const Item: FC = () => {
  return (
    <div className="table-drag-item">
      <div className="drag-item-left">
        <HolderOutlined />
        <div>kashfsa</div>
      </div>
      <CloseOutlined className="item-close-button" />
    </div>
  );
};

export default Item;
