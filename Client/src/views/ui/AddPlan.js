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

const AddPlan = () => {

  const [id, setId] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [prix, setPrix] = React.useState(null);
  const [type, setType] = React.useState(null);
  const [messageError, setMessageError] = React.useState("");


  const changeTexteInformations = (event) => {
    event.preventDefault()

    const plan = {
      title : title,
      prix : prix,
      type : type
    }

    setMessageError("")
      const url = "http://localhost:5000/plans/"
      try {
        axios({
          method: "post",
          url: url,
          data: plan,
        }).then(res => {
          window.location.href = "/#/dachbord/price_packages"
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
              Add {title} informartions
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
                      name="title"
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

export default AddPlan;
