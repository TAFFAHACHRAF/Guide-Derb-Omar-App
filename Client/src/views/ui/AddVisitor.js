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

const AddVisitor = () => {

  const [id, setId] = React.useState(null);
  const [first_name, setFirst_name] = React.useState(null);
  const [family_name, setFamily_name] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [messageError, setMessageError] = React.useState("");



  const changeTexteInformations = (event) => {
    event.preventDefault()

    const visitor = {
      first_name : first_name,
      family_name : family_name,
      password : password,
      email : email
    }

    setMessageError("")
      const url = "http://localhost:5000/visitors/"
      try {
        axios({
          method: "post",
          url: url,
          data: visitor,
        }).then(res => {
          window.location.href = "/#/dachbord/visitors"
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

                  <FormGroup className="col">
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="examplePassword"
                      name="Password"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
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

export default AddVisitor;
