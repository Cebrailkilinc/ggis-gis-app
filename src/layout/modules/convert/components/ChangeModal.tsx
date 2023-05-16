import React, { useState } from "react";
import { Button, Modal, Input, Divider, List, Typography } from "antd";
import allCoordinateSystem from "../service/swapper";

import {  getInputProjectionInfo, getOutputProjectionInfo } from "../../../../features/convert/convert.slice";
import { useAppDispatch,useAppSelector } from "../../../../app/hooks";

interface MyOtherComponentProps {
  isModalOpen: boolean;  
  handleOk: () => void;
  handleCancel: () => void;
}

const { Search } = Input;

const ChangeModal = ({ 
  isModalOpen,
  handleOk,
  handleCancel,
}: MyOtherComponentProps) => {
  const [query, setQuery] = useState("");

  const filteredData = allCoordinateSystem.filter((item) => item.name.includes(query));
   
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const dispatch = useAppDispatch();
  const {modelControl} = useAppSelector(state => state.convert)
  
  const handleProjectionName = (name: string, swapperCode: string, epsgCode: string ):void =>{
     //console.log(espsgCode)
      const projectionInfo={
        name:name,
        swapperCode:swapperCode,
        epsgCode:epsgCode
      }
      dispatch(modelControl ? getInputProjectionInfo(projectionInfo) :  getOutputProjectionInfo(projectionInfo))    
  }

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
        />
        {
          filteredData.length < 3 ?
          <List
            style={{ marginTop: "30px", marginBottom:"30px" }}
            size="small"
            bordered
            dataSource={filteredData}
            renderItem={(item) => <List.Item 
               onClick={()=>handleProjectionName(item.name, item.swapperCode, item.epsgCode)} 
               style={{cursor:"pointer"}}
               >
                {item.name}
                </List.Item>}
          /> : null
        }

      </Modal>
    </>
  );
};

export default ChangeModal;
