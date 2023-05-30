import React, { useState, useCallback } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { BsUpload } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { getSelectLocalShpFile } from "../../../../../features/gis/gis.slice";
import { Button, Space } from 'antd';

import "../../gisLayout.css";
type SelectFileTypes = {
   setAddShpFileButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
};
const SelectFile: React.FC<SelectFileTypes> = ({setAddShpFileButtonActive }) => {
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.gis);

  //Drop & Select file
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (selectedFile) {
      console.log(selectedFile);
    }
    const formData = new FormData();
    formData.append("shapefile", selectedFile);
    try {
      // Backend'e POST isteği gönder
      await axios
        .post("http://localhost:5000/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response.data);
          dispatch(getSelectLocalShpFile(response.data));
        });
    } catch (error) {
      console.error("Dosya yükleme hatası:", error);
    }
    setAddShpFileButtonActive(false)
  };

  return (
    <form className="select-file-area-content" onSubmit={handleSubmit}>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="select-file-area">Dosyayı buraya bırakın...</p>
        ) : (
          <p className="select-file-area">
            Dosyayı sürükleyin veya buraya tıklayın.
          </p>
        )}
      </div>
      
      <Button type="primary" htmlType="submit" >Send File</Button>
    </form>
  );
};

export default SelectFile;
