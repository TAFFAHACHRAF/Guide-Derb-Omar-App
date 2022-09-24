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

const UpdateVisitor = () => {

  const [cookies, setCookie,removeCookie] = useCookies(['Visitor']);
  const [id, setId] = React.useState(cookies.Visitor._id);
  const [first_name, setFirst_name] = React.useState(cookies.Visitor.first_name ? cookies.Visitor.first_name : "");
  const [family_name, setFamily_name] = React.useState(cookies.Visitor.family_name ? cookies.Visitor.family_name : "");
  const [email, setEmail] = React.useState(cookies.Visitor.email ? cookies.Visitor.email : "");
  const [password, setPassword] = React.useState(cookies.Visitor.password ? cookies.Visitor.password : "");
  const [passwordConf, setPasswordConf] = React.useState(cookies.Visitor.password ? cookies.Visitor.password : "");
  const [messageError, setMessageError] = React.useState("");

  const changeTexteInformations = (event) => {
    event.preventDefault()

    const Visitor = {
      first_name : first_name,
      family_name : family_name,
      email : email,
      password : password
    }

    if(1){
      setMessageError("")
      const url = "http://localhost:5000/visitors/"+id
      try {
        axios({
          method: "patch",
          url: url,
          data: Visitor,
        }).then(res => {
          window.location.href = "/#/dachbord/visitors"
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
            Update {first_name + " " + family_name} informartions  {messageError} 
          </CardTitle>
          <CardBody>
            <form onSubmit={changeTexteInformations}>
              <div className="row">
                <FormGroup className="col">
                  <Label for="exampleFirst_name">First name</Label>
                  <Input
                    id="exampleFirst_name"
                    name="first_name"
                    placeholder="with a placeholder"
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="exampleNationality">Family name</Label>
                  <Input
                    id="exampleFamily_name"
                    name="family_name"
                    placeholder="password placeholder"
                    type="text"
                    value={family_name}
                    onChange={(e) => setFamily_name(e.target.value)}
                  />
                </FormGroup>
              </div>
              <div className="row">
                <FormGroup className="col">
                  <Label for="exampleSpeciality">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="password placeholder"
                    type="text"
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

export default UpdateVisitor;
