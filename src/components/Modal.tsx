import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { FC } from "react";

const UserModal: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal: () => void = () => {
    setIsModalOpen(true);
  };

  const handleOk: () => void = () => {
    setIsModalOpen(false);
  };

  const handleCancel: () => void = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button style={{ width: "100px" }} type="primary" onClick={showModal}>
        Add User
      </Button>
      <Modal
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="add-user-form">
          <div className="add-user-form-content">
            <div className="user-form-field">
              <h3>First Name:</h3>
              <input placeholder="Name..." className="user-form-field-input" />
            </div>
            <div className="user-form-field">
              <h3>Last Name:</h3>
              <input
                placeholder="Surname..."
                className="user-form-field-input"
              />
            </div>
            <div className="user-form-field">
              <h3>Age:</h3>
              <input placeholder="Age..." className="user-form-field-input" />
            </div>
            <div className="user-form-field">
              <h3>Address:</h3>
              <textarea
                placeholder="Address..."
                className="user-form-field-input"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserModal;
