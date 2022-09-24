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
import { useCookies } from "react-cookie";



const UpdateCompany = () => {

  const [cookies, setCookie,removeCookie] = useCookies(['Seller']);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [id, setId] = React.useState(cookies.Seller._id);
  const [social_reason, setSocial_reason] = React.useState(cookies.Seller.social_reason ? cookies.Seller.social_reason : "company");
  const [nationality, setNationality] = React.useState(cookies.Seller.nationality ? cookies.Seller.nationality : "");
  const [speciality, setSpeciality] = React.useState(cookies.Seller.speciality ? cookies.Seller.speciality : "");
  const [trade_register, setTrade_register] = React.useState(cookies.Seller.trade_register ? cookies.Seller.trade_register : "");
  const [juridical_statute, setJuridical_statute] = React.useState(cookies.Seller.juridical_statute ? cookies.Seller.juridical_statute : "");
  const [fax_number, setFax_number] = React.useState(cookies.Seller.fax ? cookies.Seller.fax : "");
  const [phone_number, setPhone_number] = React.useState(cookies.Seller.phone_number ? cookies.Seller.phone_number : "");
  const [adresse, setAdresse] = React.useState(cookies.Seller.adresse ? cookies.Seller.adresse : "");
  const [email, setEmail] = React.useState(cookies.Seller.email ? cookies.Seller.email : "");
  const [hasLogo, setHasLogo] = React.useState(cookies.Seller.hasLogo ? cookies.Seller.hasLogo : "");
  const [password, setPassword] = React.useState(cookies.Seller.password ? cookies.Seller.password : "");
  const [passwordConf, setPasswordConf] = React.useState(cookies.Seller.password ? cookies.Seller.password : "");
  const [verified, setVerified] = React.useState(cookies.Seller.verified ? cookies.Seller.verified : "");
  const [messageError, setMessageError] = React.useState("");

  const changeImage = (event) => {
    event.preventDefault()

    if((selectedFile.type === 'image/png' || selectedFile.type === 'image/jpg' || selectedFile.type === 'image/jpeg')){
      setMessageError("")
      const formData = new FormData();
      formData.append("myfile", selectedFile);
      const url_patch = "http://localhost:5000/images/update/"+cookies.Seller._id
      const url_post = "http://localhost:5000/images/upload/"+cookies.Seller._id
      
      if(hasLogo == "false"){

        const seller = {
          hasLogo :  "true"
        }
        
        const url = "http://localhost:5000/sellers/"+id
        axios({
          method: "patch",
          url: url,
          data: seller,
        }).then(res => {})  

        try {
          axios({
            method: "post",
            url: url_post,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(res => {})  
        } catch(error) {console.log(error)}

        window.location.href = "/#/dachbord/sellers"

      }
      else{
        try {
          axios({
            method: "patch",
            url: url_patch,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(res => {
            window.location.href = "/#/dachbord/sellers"
          })  
        } catch(error) {}
      }
  }
  else{
    setMessageError("You must upload png or jpg image file "+selectedFile.type)
  }
}

const handleChange = () => { 
    
  setVerified(!verified); 
  
}; 
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const changeTexteInformations = (event) => {
    event.preventDefault()

    const Seller = {
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
      verified : verified,
    }

    if(1){
      const url = "http://localhost:5000/sellers/"+id
      try {
        axios({
          method: "patch",
          url: url,
          data: Seller,
        }).then(res => {
          // setMessageError("")
          // window.location.reload()
          window.location.href = "/#/dachbord/sellers"
        })  
      } catch(error) { alert('error') }
    }
    else{ alert('error') }
}

  if(!cookies.Seller){return(<div >loading</div>)}
  else{
  return (
    <Row className="col-lg-12">
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Update {social_reason} informartions  {messageError} 
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
            <form onSubmit={changeImage}>
              <FormGroup className="col">
                    <Label for="exampleFile">Logo</Label>
                    <Input id="exampleFile" type="file" name='myfile' onChange={handleFileSelect} />
                    <div className="row d-flex justify-content-center">
                      <Button type="submit" value="Upload File" className="mt-2 btn btn-success text-lite col-2 col-sm-2 col-md-2 col-lg-2 col-xl-1  ms-4">Send</Button>
                      <Button className="mt-2 btn btn-danger text-lite col-2 col-sm-2 col-md-2 col-lg-2 col-xl-1 ms-4">Drop</Button>
                      <Input type="text" style={{display : 'none'}} name="id" value="4656785421" />
                      <span>{messageError}</span>
                    </div>
              </FormGroup>
            </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
}

export default UpdateCompany;
