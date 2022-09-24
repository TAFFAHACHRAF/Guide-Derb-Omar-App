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

const AddSource_product = () => {

  const [id, setId] = React.useState(null);
  const [link, setLink] = React.useState(null);
  const [categorie, setCategorie] = React.useState(null);
  const [messageError, setMessageError] = React.useState("");


  const changeTexteInformations = (event) => {
    event.preventDefault();

    function isValidURL (string){
      var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      var hasHttp = string.includes("https://") || string.includes("http://")
      return (res !== null && hasHttp)
    };

    if(isValidURL(link)){
      const Source_product = {
        link : link,
        categorie : categorie
      }

      setMessageError("")
        const url = "http://localhost:5000/source_products/"
        try {
          axios({
            method: "post",
            url: url,
            data: Source_product,
          }).then(res => {
            window.location.href = "/#/dachbord/source_products"
          })  
        } catch(error) {console.log(error)}
      }
      else{
        alert('Link is not valide, you must tap another validate link');
      }
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
              Add informartions
            </CardTitle>
            <CardBody>
              <form onSubmit={changeTexteInformations}>
                <div className="row">
                  <FormGroup className="col">
                    <Label for="exampleLink">Link</Label>
                    <Input
                      id="exampleLink"
                      name="link"
                      placeholder="with a placeholder"
                      type="text"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className="col">
                    <Label for="examplePrix">Categorie</Label>
                    <Input
                      id="exampleCategorie"
                      name="title"
                      placeholder="with a placeholder"
                      type="text"
                      value={categorie}
                      onChange={(e) => setCategorie(e.target.value)}
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

export default AddSource_product;
