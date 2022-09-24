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

const UpdateSource_product = () => {

  const [cookies, setCookie,removeCookie] = useCookies(['Source_product']);
  const [id, setId] = React.useState(cookies.Source_product._id);
  const [link, setLink] = React.useState(cookies.Source_product.link ? cookies.Source_product.link : "");
  const [categorie, setCategorie] = React.useState(cookies.Source_product.categorie ? cookies.Source_product.categorie : "");
  const [messageError, setMessageError] = React.useState("");

  function isValidURL (string){
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    var hasHttp = string.includes("https://") || string.includes("http://")
    return (res !== null && hasHttp)
  };

  const changeTexteInformations = (event) => {
    event.preventDefault()
    
    if(isValidURL(link)){
      const price_package = {
        link : link,
        categorie : categorie
      }

      setMessageError("")
      const url = "http://localhost:5000/source_products/"+id
      try {
        axios({
          method: "patch",
          url: url,
          data: price_package,
        }).then(res => {
          window.location.href = "/#/dachbord/source_products"
        })  
      } catch(error) {}
    }
    else{
      alert('Link is not valide, you must tap another validate link');
    }
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
                  <Label for="exampleCategorie">Categorie</Label>
                  <Input
                    id="exampleCategorie"
                    name="categorie"
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

export default UpdateSource_product;
