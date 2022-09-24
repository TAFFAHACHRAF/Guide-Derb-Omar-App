import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import React from "react";
import axios from 'axios';
import { useCookies } from "react-cookie";



const UpdateGuide = () => {

  const [cookies, setCookie,removeCookie] = useCookies(['Guide']);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [id, setId] = React.useState(cookies.Guide._id);
  const [first_name, setFirst_name] = React.useState(cookies.Guide.first_name ? cookies.Guide.first_name : "company");
  const [family_name, setFamily_name] = React.useState(cookies.Guide.family_name ? cookies.Guide.family_name : "");
  const [email, setEmail] = React.useState(cookies.Guide.email ? cookies.Guide.email : "");
  const [fax_number, setFax_number] = React.useState(cookies.Guide.fax_number ? cookies.Guide.fax_number : "");
  const [phone_number, setPhone_number] = React.useState(cookies.Guide.phone_number ? cookies.Guide.phone_number : "");
  const [adresse, setAdresse] = React.useState(cookies.Guide.adresse ? cookies.Guide.adresse : "");
  const [nationality, setNationality] = React.useState(cookies.Guide.nationality ? cookies.Guide.nationality : "");
  const [speciality, setSpeciality] = React.useState(cookies.Guide.speciality ? cookies.Guide.speciality : "");
  const [password, setPassword] = React.useState(cookies.Guide.password ? cookies.Guide.password : "");
  const [passwordConf, setPasswordConf] = React.useState(cookies.Guide.password ? cookies.Guide.password : "");
  const [verified, setVerified] = React.useState(cookies.Guide.verified ? cookies.Guide.verified : "");
  const [hasLogo, setHasLogo] = React.useState(cookies.Guide.hasLogo ? cookies.Guide.hasLogo : "");
  const [messageError, setMessageError] = React.useState("");

  const changeImage = (event) => {
    event.preventDefault()

    if((selectedFile.type === 'image/png' || selectedFile.type === 'image/jpg' || selectedFile.type === 'image/jpeg')){
      setMessageError("")
      const formData = new FormData();
      formData.append("myfile", selectedFile);
      const url_patch = "http://localhost:5000/images/update/"+cookies.Guide._id
      const url_post = "http://localhost:5000/images/upload/"+cookies.Guide._id
      
    if(hasLogo == "false"){

      const guide = {
        hasLogo :  "true"
      }
      
      const url = "http://localhost:5000/guides/"+id
      axios({
        method: "patch",
        url: url,
        data: guide,
      }).then(res => {})  

      try {
        axios({
          method: "post",
          url: url_post,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then(res => {})  
      } catch(error) {console.log(error)}

      window.location.href = "/#/dachbord/guides"
    }
    else{
      try {
        axios({
          method: "patch",
          url: url_patch,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then(res => {
          window.location.href = "/#/dachbord/guides"
        })  
      } catch(error) {}
    }
  }
  else{
    setMessageError("You must upload png or jpg image file "+selectedFile.type)
  }
}

const handleChange = () => { 
    
  setVerified(!verified); 
  
}; 
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const changeTexteInformations = (event) => {
    event.preventDefault()

    const Guide = {
      first_name : first_name,
      family_name : family_name,
      email : email,
      fax_number : fax_number,
      phone_number : phone_number,
      adresse : adresse,
      nationality : nationality,
      speciality : speciality,
      password : password,
      verified : verified
    }

    if(1){
      const url = "http://localhost:5000/guides/"+id
      try {
        axios({
          method: "patch",
          url: url,
          data: Guide,
        }).then(res => {
          window.location.href = "/#/dachbord/guides"
        })  
      } catch(error) { alert('error') }
    }
    else{ console.error(); }
}


  return (
    <Row className="col-lg-12">
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Update {first_name + " " + family_name} informartions
          </CardTitle>
          <CardBody>
            <form onSubmit={changeTexteInformations}>
              <div className="row">
                <FormGroup className="col">
                  <Label for="exampleFirst_name">First name</Label>
                  <Input
                    id="exampleFirst_name"
                    name="email"
                    placeholder="with a placeholder"
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="col">
                  <Label for="exampleFamily_name">Family name</Label>
                  <Input
                    id="exampleFamily_name"
                    name="family_name"
                    placeholder="with a placeholder"
                    type="text"
                    value={family_name}
                    onChange={(e) => setFamily_name(e.target.value)}
                  />
                </FormGroup>

              </div>
              <div className="row">
              <FormGroup className="col">
                  <Label for="exampleNationality">Nationality</Label>
                  <Input
                    id="exampleNationality"
                    name="nationality"
                    placeholder="Nationality"
                    type="text"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  />
                </FormGroup>
              
                <FormGroup className="col">
                  <Label for="exampleSpeciality">Speciality</Label>
                  <Input
                    id="exampleSpeciality"
                    name="Speciality"
                    placeholder="Speciality"
                    type="text"
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                  />
                </FormGroup>
               
              </div>
              <div className="row">

              <FormGroup className="col">
                  <Label for="exampleEmail">Password</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                
                <FormGroup className="col">
                  <Label for="examplePasswordConf">Password confirmation</Label>
                  <Input
                    id="examplePasswordConf"
                    name="passwordConf"
                    placeholder="password placeholder"
                    type="password"
                    value={passwordConf}
                    onChange={(e) => setPasswordConf(e.target.value)}
                  />
                </FormGroup>
              </div>

              <FormGroup className="col">
                  <Label for="exampleAdresse">Adresse</Label>
                  <Input
                    id="exampleAdresse"
                    name="adresse"
                    placeholder="Adresse"
                    type="text"
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)}
                  />
                </FormGroup>
             
              <FormGroup check>
                <Input 
                  type="checkbox"  
                  id='verified' 
                  name='verified' 
                  onChange={handleChange}                />
                <Label for="verfied" check>Verification</Label>
              </FormGroup>
              <div className="d-flex justify-content-center">
                <Button className="d-flex justify-content-center" type="submit" color="primary">Save</Button>
              </div>
            </form>
            <form onSubmit={changeImage}>
              <FormGroup className="col">
                    <Label for="exampleFile">Logo</Label>
                    <Input id="exampleFile" type="file" name='myfile' onChange={handleFileSelect} />
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

export default UpdateGuide;
