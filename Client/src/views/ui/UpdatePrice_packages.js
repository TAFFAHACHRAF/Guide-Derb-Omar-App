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

const UpdatePlan = () => {

  const [cookies, setCookie,removeCookie] = useCookies(['Plan']);
  const [id, setId] = React.useState(cookies.Plan._id);
  const [title, setTitle] = React.useState(cookies.Plan.title ? cookies.Plan.title : "");
  const [prix, setPrix] = React.useState(cookies.Plan.prix ? cookies.Plan.prix : "");
  const [type, setType] = React.useState(cookies.Plan.type ? cookies.Plan.type : "");
  const [messageError, setMessageError] = React.useState("");

  const changeTexteInformations = (event) => {
    event.preventDefault()

    const price_package = {
      title : title,
      prix : prix,
      type : type
    }

    setMessageError("")
    const url = "http://localhost:5000/plans/"+id
    try {
      axios({
        method: "patch",
        url: url,
        data: price_package,
      }).then(res => {
        window.location.href = "/#/dachbord/price_packages"
      })  
    } catch(error) {}
}

  return (
    <Row className="col-lg-12">
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Update  informartions  
          </CardTitle>
          <CardBody>
            <form onSubmit={changeTexteInformations}>
              <div className="row">
                <FormGroup className="col">
                  <Label for="exampleTitle">Title</Label>
                  <Input
                    id="exampleTitle"
                    name="title"
                    placeholder="with a placeholder"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="col">
                  <Label for="examplePrix">Prix</Label>
                  <Input
                    id="examplePrix"
                    name="prix"
                    placeholder="with a placeholder"
                    type="text"
                    value={prix}
                    onChange={(e) => setPrix(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="col">
                  <Label for="exampleType">Type</Label>
                  <Input
                    id="exampleType"
                      name="type"
                      placeholder="with a placeholder"
                      type="text"  
                      value={type}
                    onChange={(e) => setType(e.target.value)}
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

export default UpdatePlan;
