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

const AddTraining = () => {

  const [id, setId] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [description, setDescription] = React.useState(null);
  const [messageError, setMessageError] = React.useState("");

  const changeTexteInformations = (event) => {
    event.preventDefault()

    const training = {
      title : title,
      description : description
    }

    setMessageError("")
      const url = "http://localhost:5000/trainings/"
      try {
        axios({
          method: "post",
          url: url,
          data: training,
        }).then(res => {
          window.location.href = "/#/dachbord/trainings"
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
                    <Label for="exampleFirst_name">Title</Label>
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
                    <Label for="exampleFamily_name">Description</Label>
                    <Input
                      id="exampleDescription"
                      name="decription"
                      placeholder="with a placeholder"
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
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
};

export default AddTraining;
