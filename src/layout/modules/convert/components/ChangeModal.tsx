import React, { useState } from "react";
import { Button, Modal, Input, Divider, List, Typography } from "antd";
import allCoordinateSystem from "../service/swapper";
import { useAppSelector } from "../../../../app/hooks";

interface MyOtherComponentProps {
  isModalOpen: boolean;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
}

const { Search } = Input;

const ChangeModal = ({
  showModal,
  isModalOpen,
  handleOk,
  handleCancel,
}: MyOtherComponentProps) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([
    {
      name: "",
      epsgCode: "",
      swapperCode: "",
    },
  ]);

  const handlefilteredData = () => {
    allCoordinateSystem.filter((item) => item.name.includes(query));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Search
          onChange={handleInputChange}
          placeholder="input search text"
          enterButton
        />
        <List
          style={{ marginTop: "10px" }}
          size="small"
          bordered
          dataSource={filteredData}       
          renderItem={(item) => <List.Item>{item.name}</List.Item>}
        />
      </Modal>
    </>
  );
};

export default ChangeModal;
