import { useState } from "react";
import { API_URL, getToken } from "../../utils/Utils";
import axios from "axios";
import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../alert/SuccessAlert";

const UploadPublicacion = (props) => {
  const [foto, setFoto] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate()

  const handlefotoChange = (event) => {
    setFoto(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!foto) {
      setUploadStatus("Por favor, selecciona un .png");
      return;
    }

    const formData = new FormData();
    console.log(formData)
    formData.append("publicacion",{titulo: "titulo", descripcion: "descripcion", foto:"foto_string"});
    formData.append("foto", foto);
    setUploadStatus("Uploading...");
    axios({
      method:'post',
      url: API_URL + `/publicacion`,
      data: formData,
      headers:{
        "Authorization": `Bearer ${getToken()}`,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => {
      setUploadStatus("Upload successful!");
      setAlert(true);
      setTimeout(() => window.location.reload(), 2000)
    })
    .catch(error => {
      console.error(error)
      setUploadStatus("Upload failed. Please try again.");
    })
  };

  return (
    <div>
      <h2>Upload JPG</h2>
      <Input type="file" accept=".png" onChange={handlefotoChange} />
      <Button onClick={handleUpload}>Upload</Button>
      <p>{uploadStatus}</p>
      {
        alert ? 
        <SuccessAlert text={"envio exitoso"}/>
        :
        null
      }
    </div>
  );
}

export default UploadPublicacion
