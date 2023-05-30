import React, { useState } from "react";
import { Button, Modal } from "antd";
import SelectFile from "../selectLocalFile/SelectFile";

type ScriptModal = {
  addShpFileButtonActive: boolean;
  setAddShpFileButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScriptModal: React.FC<ScriptModal> = ({
  addShpFileButtonActive,
  setAddShpFileButtonActive,
}) => { 

  const handleCancel = () => {
    setAddShpFileButtonActive(false);
  };

  return (
    <>     
      <Modal
        className="script-modal"
        title="Add Shapfile"
        open={addShpFileButtonActive}      
        onCancel={handleCancel}
        footer={null}
      >
        <SelectFile setAddShpFileButtonActive={setAddShpFileButtonActive} />
      </Modal>
    </>
  );
};

export default ScriptModal;
