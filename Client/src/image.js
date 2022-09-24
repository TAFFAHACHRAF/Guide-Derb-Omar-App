import React from 'react';
import axios from 'axios';
import { exist } from 'joi';

const Form = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [messageError, setMessageError] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault()
    if((selectedFile.type === 'image/png' || selectedFile.type === 'image/jpg' || selectedFile.type === 'image/png')){
      const formData = new FormData();
      formData.append("myfile", selectedFile);
      console.log(formData)
      try {
        axios({
          method: "post",
          url: "http://localhost:5000/images/upload/62f69a3bb33f52f04c11f3cc",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then(res => {
          console.log(res)
          setMessageError("Yees")
        })  
      } catch(error) {
        console.log(error)
      }
    }
    else{
      setMessageError("You must upload png or jpg image file")
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name='myfile' onChange={handleFileSelect}/>
      <input type="submit" value="Upload File" />
      <img src={image}  alt="image" />
      <span className='text-danger'>{messageError}</span>
    </form>
  )
};

export default Form;