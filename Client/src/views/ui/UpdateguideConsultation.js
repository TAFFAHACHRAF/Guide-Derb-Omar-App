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
import axios from 'axios';
import { useCookies } from "react-cookie";
import React,{ useEffect , useState} from "react"
import Loader from "../../layouts/loader/Loader";


const UpdateguideConsultation = () => {
  
  const [cookies, setCookie,removeCookie] = useCookies(['GuideConsultations']);
  const [id, setId] = React.useState(cookies.GuideConsultations._id);
  const [follower, setFollower] = React.useState(null);
  const [guideService, setGuideServicer] = React.useState(null);
  const [guide, setGuide] = React.useState(cookies.GuideConsultations.guide ? cookies.GuideConsultations.guide : "");
  const [title, setTitle] = React.useState(cookies.GuideConsultations.title ? cookies.GuideConsultations.title : "");
  const [description, setDescription] = React.useState(cookies.GuideConsultations.description ? cookies.GuideConsultations.description : "");
  const [date, setDate] = React.useState(cookies.GuideConsultations.date ? cookies.GuideConsultations.date : "");
  const [validation, setValidation] = React.useState(false);
  const [messageError, setMessageError] = React.useState("");
  const [guides, setGuides] = React.useState(null);
  const [sellers, setSellers] = React.useState(null);
  const [transporters, setTransporters] = React.useState(null);
  const [importers, setImporters] = React.useState(null);
  const [type, setType] = React.useState(null);

  const handleChange = () => {  
    setValidation(!validation); 
  }; 

  const changeTexteInformations = (event) => {
    event.preventDefault()
    if(follower == null || guideService == null || title == null || description == null || date == null){
      alert('Vueillez remplire et sellectioner tous les champs obligatoires')
    }
    else{
      const guideConsultation = {
        follower : follower, guide : guideService, title : title, description : description, date : date, validation : validation
      }

      console.table(guideConsultation)
      // return 1;

      if(1){
        const url = "http://localhost:5000/guideConsultations/"+id
        try {
          axios({
            method: "patch",
            url: url,
            data: guideConsultation,
          }).then(res => {
            {res.data.error ? setMessageError(res.data.error) : window.location.href = "/#/dachbord/guideConsultations"}
          })  
        } catch(error) {setMessageError("Error 404")}
      }
      else{
        alert("error")
      }
    }
}

function handleFollower(event) {
  setFollower(event.target.value);
}

function handleGuide(event) {
  setGuideServicer(event.target.value)
}

function handleType(event) {  
  setType(event.target.value); 
}; 

function detectFollowerType(){
  if(type == "Guide"){
    return guides
  }
  else if(type == "Seller"){
    return sellers
  }
  else if(type == "Transporter"){
    return transporters
  }
  else{
    return importers
  }
}

useEffect(() => {
  axios.get('http://localhost:5000/guides/')
        .then(function(response) {
          setGuides(response.data)
      }).catch(function(error) {
    })

  axios.get('http://localhost:5000/sellers/')
      .then(function(response) {
        setSellers(response.data)
      }).catch(function(error) {
    })

  axios.get('http://localhost:5000/importers/')
    .then(function(response) {
      setImporters(response.data)
    }).catch(function(error) {
    })

  axios.get('http://localhost:5000/transporters/')
    .then(function(response) {
      setTransporters(response.data)
    }).catch(function(error) {
    })
    
}, []);
  
  if(!transporters && !importers && !sellers && !guides){return(<Loader />)}
  else{
  return (
    <Row className="col-lg-12">
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Update guide consultation  informartions 
          </CardTitle>
          <CardBody>
            <form onSubmit={changeTexteInformations}>
              <div className="row">
              <FormGroup className="col">
                  <Label for="exampleGuide">Guides</Label>
                  <select class="form-select" required value={follower} onChange={handleGuide}>
                  <option>...</option>
                  {guides != null ? guides.map((guide, index) => (
                      <option value={guide._id}>{guide.first_name + " " + guide.family_name}</option>
                  )) : <option>follower</option>
                  }
                  </select>
                </FormGroup>

                <FormGroup className="col">
                <Label for="exampleType">Consultation with ? </Label>
                  <select className="form-select" required value={type || "Guide"} onChange={handleType}>
                    <option>...</option>
                    <option>Seller</option>
                    <option>Transporter</option>
                    <option>Importer</option>
                  </select>
                </FormGroup>

                <FormGroup className="col">
                  <Label for="exampleSocialReason">{type || "Select consultation type"}s</Label>
                  <select class="form-select" required value={follower} onChange={handleFollower}>
                  <option>...</option>
                  {detectFollowerType()  != null ? detectFollowerType().map((follower, index) => (
                      <option value={follower._id}>{follower.social_reason || (follower.first_name + " " + follower.family_name) || ""}</option>
                  )) : <option>follower</option>
                  }
                  </select>
                </FormGroup>

              </div>
              <div className="row">
                <FormGroup className="col">
                  <Label for="exampleTitle">Title</Label>
                  <Input
                    id="exampleTitle"
                    name="text"
                    placeholder="password placeholder"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="col">
                  <Label for="exampleDescription">Description</Label>
                  <Input
                    id="exampleDescription"
                    name="description"
                    placeholder="with a placeholder"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FormGroup>
              </div>
              <div className="row">
              <FormGroup className="col">
                  <Label for="exampleDate">Date</Label>
                  <Input
                    id="exampleDate"
                    name="date"
                    placeholder="password placeholder"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </FormGroup>
              </div>
              <FormGroup check>
                <Input 
                  type="checkbox"  
                  id='validation' 
                  name='validation' 
                  onChange={handleChange}                />
                <Label for="validation" check>Validation</Label><br></br>
                {messageError}
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
}
export default UpdateguideConsultation;
