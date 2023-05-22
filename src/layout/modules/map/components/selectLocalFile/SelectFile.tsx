import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { BsUpload } from "react-icons/bs";

const SelectFile = () => {

  const [selectedFile, setSelectedFile] = useState<any>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (selectedFile) {
      console.log(selectedFile);
    }
    const formData = new FormData();
    formData.append('shapefile', selectedFile);
    try {
      // Backend'e POST isteği gönder
      await axios.post('http://localhost:5000/upload', formData, { 
        headers: { 'Content-Type': 'multipart/form-data' }
       })
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        });
    } catch (error) {
      console.error('Dosya yükleme hatası:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Dosyayı buraya bırakın...</p>
          ) : (
            <p>Dosyayı sürükleyin veya buraya tıklayın.</p>
          )}
        </div>
        <button type="submit">Dosyayı Gönder</button>
      </form>
    </div>
  )
}

export default SelectFile