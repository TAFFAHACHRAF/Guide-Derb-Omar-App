import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import React from "react";
import axios from 'axios';
import { useCookies } from "react-cookie";

  const UpdateTraining = () => {

    const [cookies, setCookie,removeCookie] = useCookies(['Training']);
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [id, setId] = React.useState(cookies.Training._id);
    const [title, setTitle] = React.useState(cookies.Training.title ? cookies.Training.title : "");
    const [description, setDescription] = React.useState(cookies.Training.description ? cookies.Training.description : "");
    const [hasVideo, setHasViedo] = React.useState(cookies.Training.hasVideo);
    const [messageError, setMessageError] = React.useState("");

    const changeVideo = (event) => {
      event.preventDefault()

      if((selectedFile.type === 'video/x-matroska') || (selectedFile.type === 'video/mp4')){
      setMessageError("")
      const formData = new FormData();
      formData.append("myvideo", selectedFile);
      const url_patch = "http://localhost:5000/videos/update/"+cookies.Training._id
      const url_post = "http://localhost:5000/videos/upload/"+cookies.Training._id
      
      if(hasVideo === 'false'){
          
          const training = {
            hasVideo :  "true"
          }

          const url = "http://localhost:5000/trainings/"+id
          axios({
            method: "patch",
            url: url,
            data: training,
          }).then(res => { console.log(res)})  

          axios({
            method: "post",
            url: url_post,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(res => {}) 

          window.location.href = "/#/trainings"
      }
      else{
        try {
          axios({
            method: "patch",
            url: url_patch,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(res => {
            alert("patched")
            window.location.href = "/#/dachbord/trainings"
          })  
        } catch(err) {console.log({err})}
      }

    }
    else{
      setMessageError("You must upload png or jpg image file "+selectedFile.type)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const changeTexteInformations = (event) => {
    event.preventDefault()

    const training = {
      title : title,
      description : description
    }

    if(1){
      // setMessageError("")
      const url = "http://localhost:5000/trainings/"+id
      try {
        axios({
          method: "patch",
          url: url,
          data: training,
        }).then(res => {
          window.location.href = "/#/trainings"
        })  
      } catch(error) {}
  }
  else{
    alert('error')
  }
}


  return (
    <Row className="col-lg-12">
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Update {title} informartions
          </CardTitle>
          <CardBody>
            <form onSubmit={changeTexteInformations}>
              <div className="row">
                <FormGroup className="col">
                  <Label for="exampleTitle">Title</Label>
                  <Input
                    id="exampleTitle"
                    name="title"
                    placeholder="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="exampleDescription">Description</Label>
                  <Input
                    id="exampleDescription"
                    name="description"
                    placeholder="description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FormGroup>
              </div>
              <div className="d-flex justify-content-center">
                <Button className="d-flex justify-content-center" type="submit" color="primary">Save</Button>
              </div>
            </form>
            <form onSubmit={changeVideo}>
              <FormGroup className="col">
                    <Label for="exampleFile">Logo</Label>
                    <Input id="exampleFile" type="file" name='myvideo' onChange={handleFileSelect} />
                    <div className="row d-flex justify-content-center">
                      <Button type="submit" value="Upload File" className="mt-2 btn btn-success text-lite col-2 col-sm-2 col-md-2 col-lg-2 col-xl-1  ms-4">Send</Button>
                      <Button className="mt-2 btn btn-danger text-lite col-2 col-sm-2 col-md-2 col-lg-2 col-xl-1 ms-4">Drop</Button>
                      <Input type="text" style={{display : 'none'}} name="id" value="4656785421" />
                      <span>{messageError}</span>
                    </div>
              </FormGroup>
            </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default UpdateTraining;
