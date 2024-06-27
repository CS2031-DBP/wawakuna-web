import { useState } from "react";
import { API_URL, getToken } from "../../utils/Utils";
import axios from "axios";
import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../alert/SuccessAlert";

const UploadFile = (props) => {
  const { path , text} = props
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate()

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    console.log(formData)
    setUploadStatus("Uploading...");
    axios({
      method:'post',
      url: API_URL + `${path}/csv`,
      data: formData,
      headers:{
        "Authorization": `Bearer ${getToken()}`,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(response => {
      setUploadStatus("Upload successful!");
      setAlert(true);
      setTimeout(() => navigate("/dashboard"), 2000)
    })
    .catch(error => {
      console.log(error)
      setUploadStatus("Upload failed. Please try again.");
    })
  };

  return (
    <div>
      <h2>Upload CSV</h2>
      <Input type="file" accept=".csv" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Upload</Button>
      <p>{uploadStatus}</p>
      {
        alert ? 
        <SuccessAlert text={text}/>
        :
        null
      }
    </div>
  );
}

export default UploadFile
