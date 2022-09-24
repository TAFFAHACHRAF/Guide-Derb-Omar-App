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

const AddGuide = () => {

  const [id, setId] = React.useState(null);
  const [first_name, setFirst_name] = React.useState(null);
  const [family_name, setFamily_name] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [fax_number, setFax_number] = React.useState(null);
  const [phone_number, setPhone_number] = React.useState(null);
  const [adresse, setAdresse] = React.useState(null);
  const [nationality, setNationality] = React.useState(null);
  const [speciality, setSpeciality] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [passwordConf, setPasswordConf] = React.useState(null);
  const [verified, setVerified] = React.useState(null);
  const [messageError, setMessageError] = React.useState("");

  const handleChange = () => { 
    setVerified(!verified); 
  }; 


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

    setMessageError("")
      const url = "http://localhost:5000/guides/"
      try {
        axios({
          method: "post",
          url: url,
          data: Guide,
        }).then(res => {
          window.location.href = "/#/dachbord/guides"
        })  
      } catch(error) {console.log(error)}

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
              Add {first_name + " " + family_name} informartions
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

                  <FormGroup className="col">
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="Email"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
};

export default AddGuide;
