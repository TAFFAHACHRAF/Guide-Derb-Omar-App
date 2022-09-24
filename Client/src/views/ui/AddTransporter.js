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

const AddTransporter = () => {

  const [id, setId] = React.useState(null);
  const [social_reason, setSocial_reason] = React.useState(null);
  const [nationality, setNationality] = React.useState(null);
  const [speciality, setSpeciality] = React.useState(null);
  const [trade_register, setTrade_register] = React.useState(null);
  const [juridical_statute, setJuridical_statute] = React.useState(null);
  const [fax_number, setFax_number] = React.useState(null);
  const [phone_number, setPhone_number] = React.useState(null);
  const [adresse, setAdresse] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [passwordConf, setPasswordConf] = React.useState(null);
  const [verified, setVerified] = React.useState(null);
  const [messageError, setMessageError] = React.useState("");

  const handleChange = () => { 
    setVerified(!verified); 
  }; 


  const changeTexteInformations = (event) => {
    event.preventDefault()

    const transporter = {
      social_reason : social_reason,
      nationality : nationality,
      speciality : speciality,
      trade_register : trade_register,
      juridical_statute : juridical_statute,
      fax_number : fax_number,
      phone_number : phone_number,
      adresse : adresse,
      email : email,
      password : password,
      verified : verified
    }

    setMessageError("")
      const url = "http://localhost:5000/transporters/"
      try {
        axios({
          method: "post",
          url: url,
          data: transporter,
        }).then(res => {
          window.location.href = "/#/dachbord/transporters"
        })  
      } catch(error) {}

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
              Add {social_reason} informartions
            </CardTitle>
            <CardBody>
              <form onSubmit={changeTexteInformations}>
                <div className="row">
                  <FormGroup className="col">
                    <Label for="exampleSocialReason">Social reason</Label>
                    <Input
                      id="exampleSocialReason"
                      name="email"
                      placeholder="with a placeholder"
                      type="text"
                      value={social_reason}
                      onChange={(e) => setSocial_reason(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="col">
                    <Label for="exampleNationality">Nationality</Label>
                    <Input
                      id="exampleNationality"
                      name="password"
                      placeholder="password placeholder"
                      type="text"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                    />
                  </FormGroup>
                </div>
                <div className="row">
                  <FormGroup className="col">
                    <Label for="exampleSpeciality">Speciality</Label>
                    <Input
                      id="exampleSpeciality"
                      name="password"
                      placeholder="password placeholder"
                      type="text"
                      value={speciality}
                      onChange={(e) => setSpeciality(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="col">
                    <Label for="exampleTrade">Trade register</Label>
                    <Input
                      id="exampleTrade"
                      name="email"
                      placeholder="with a placeholder"
                      type="text"
                      value={trade_register}
                      onChange={(e) => setTrade_register(e.target.value)}
                    />
                  </FormGroup>
                </div>
                <div className="row">
                <FormGroup className="col">
                    <Label for="exampleJuridical">Juridical statute</Label>
                    <Input
                      id="exampleJuridical"
                      name="password"
                      placeholder="password placeholder"
                      type="text"
                      value={juridical_statute}
                      onChange={(e) => setJuridical_statute(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="col">
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="password"
                      placeholder="password placeholder"
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
                <div className="row">
                  <FormGroup className="col">
                    <Label for="exampleFax">Fax</Label>
                    <Input
                      id="exampleFax"
                      name="fax"
                      placeholder="fax"
                      type="text"
                      value={fax_number}
                      onChange={(e) => setFax_number(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="col">
                    <Label for="examplePhone">Phone</Label>
                    <Input
                      id="examplePhone"
                      name="phone"
                      placeholder="06..."
                      type="text"
                      value={phone_number}
                      onChange={(e) => setPhone_number(e.target.value)}
                    />
                  </FormGroup>
                </div>

                <FormGroup>
                    <Label for="exampleAdresse">Adresse</Label>
                    <Input
                      id="exampleAdresse"
                      name="phone"
                      placeholder="City..."
                      type="textarea"
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

export default AddTransporter;
