import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { FC, ChangeEvent } from "react";
import { addUser } from "../features/home/home.slice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const UserModal: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("false");
  const [age, setAge] = useState<number>(1);
  const [address, setAddress] = useState<string>("false");

  const columns = useAppSelector((state) => state.table.columns);
  const dispatch = useAppDispatch();

  const newUserFromModal = {
    name: name,
    surname: surname,
    age: age,
    address: address,
  };

  //TEST AREA START
  //console.log(name, surname, age, address);
  //console.log(columns);
  //TEST AREA END

  const showModal: () => void = () => {
    setIsModalOpen(true);
  };

  const handleOk: () => void = () => {
    setIsModalOpen(false);
    dispatch(addUser(newUserFromModal));
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
            {columns.map((item: any, i) => (
              <div key={i} className="user-form-field">
                <h3>{item}:</h3>
                <input
                  onChange={(e: any): void => {
                    if (item === "First Name") {
                      setName(e.target.value);
                      // eslint-disable-next-line no-dupe-else-if
                    } else if (item === "Last Name") {
                      setSurname(e.target.value);
                    } else if (item === "Age") {
                      setAge(e.target.value);
                    } else if (item === "Address") {
                      setAddress(e.target.value);
                    }
                  }}
                  placeholder={item.colName}
                  className="user-form-field-input"
                  type={item === "Age" ? "number" : "text"}
                />
              </div>
            ))}

            {/* <div className="user-form-field">
              <h3>Last Name:</h3>
              <input
                placeholder="Surname..."
                className="user-form-field-input"
                onChange={(e: any): void => {
                  setSurname(e.target.value);
                }}
              />
            </div>
            <div className="user-form-field">
              <h3>Age:</h3>
              <input
                onChange={(e: any): void => {
                  setAge(e.target.value);
                }}
                placeholder="Age..."
                className="user-form-field-input"
              />
            </div>
            <div className="user-form-field">
              <h3>Address:</h3>
              <textarea
                placeholder="Address..."
                className="user-form-field-input"
                onChange={(e: any): void => {
                  setAddress(e.target.value);
                }}
              />
            </div> */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserModal;
