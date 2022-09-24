import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import axios from 'axios'
import React,{ useEffect , useState} from "react"
import { useCookies } from "react-cookie";
import Loader from "../../layouts/loader/Loader.js"


const Coachs = () => {
  const [Coachs,setCoachs] = useState([]);
  const [rowMaped,setRowMaped] = useState(null);
  const [searchText,setSearchText] = useState("");
  const [cookies, setCookie] = useCookies(['Coach']);

  function deleteCoach(id,hasLogo,e){
    axios.delete(`http://localhost:5000/coachs/${id}`)
    .then(function(response) {
      window.location.reload()
    }).catch(function(error) {
        alert('Error')
    })
    
    if(hasLogo){
      axios.delete(`http://localhost:5000/images/deleteCoach/${id}`)
      .then(function(response) {
        console.log(response)
      }).catch(function(error) {
        console.log(error)
      })
    }

    window.location.reload()
  }

  function updateCoach(Coach,e){
      setCookie('Coach',Coach)
      window.location.href='http://localhost:3000/#/dachbord/updateCoach/'
  }
  
  useEffect(() => {
    axios.get('http://localhost:5000/coachs/')
          .then(function(response) {
            setCoachs(response.data)
            console.log(response.data)
        }).catch(function(error) {
          console.log('wait')
      })
  }, []);

  if(Coachs == null){return(<Loader />)}
  else{
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Coachs list</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of our transportation companies
          </CardSubtitle>
        
          <CardSubtitle className="d-flex justify-content-end me-4">
            <a href="/#/dachbord/addCoach">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </a>
          </CardSubtitle>
          
          <div className="row d-flex justify-content-around">
            <div className="col-2 mt-4">
              <CardSubtitle>
                <span>
                Filter in a range:
                  <input
                      type="number"
                      min={0}
                      className="form-control"
                      placeholder={'All'}
                      value={rowMaped}
                      onChange={e => {
                        setRowMaped(e.target.value || undefined)
                    }}
                />
                </span>
              </CardSubtitle>
            </div>
            <div className="col-6 mt-4">
              <CardSubtitle>
              <span>
                Search:
                  <input
                      type="text"
                      className="form-control"
                      placeholder={'Coach derb omar...'}
                      value={searchText}
                      onChange={e => {
                        setSearchText(e.target.value || undefined)
                    }}
                  />
              </span>
              </CardSubtitle>
            </div>
          </div>

          <div className="m-4">
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead> 
              <tr>
                <th>Image</th>
                <th>Complete name</th>
                <th>Email</th>
                <th>Fax</th>
                <th>Phone</th>
                <th>Adresse</th>
                <th>Nationality</th>
                <th>Speciality</th>
                <th>Verification</th>
              </tr>
            </thead>
            <tbody>
              {Coachs.slice(0,(rowMaped || 5 || 0)).filter(function(e){return (searchText ? e.first_name.includes(searchText) || e.family_name.includes(searchText) || e.email.includes(searchText) || e.fax_number.includes(searchText) || e.phone_number.includes(searchText) || e.adresse.includes(searchText) || e.nationality.includes(searchText) || e.speciality.includes(searchText) || e.date_created.includes(searchText) : true)}).map((Coach, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={("http://localhost:5000/images/"+Coach._id) ? ("http://localhost:5000/images/"+Coach._id) : user1}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                    </div>
                  </td>
                  <td>{Coach.first_name + " " + Coach.family_name}</td>
                  <td>{Coach.email}</td>
                  <td>{Coach.fax_number}</td>
                  <td>{Coach.phone_number}</td>
                  <td>{Coach.adresse}</td>
                  <td>{Coach.nationality}</td>
                  <td>{Coach.email}</td>
                  <td>{Coach.verified == "true" ? "Yes" : "No"}</td>
                  <td><a  onClick={(e) => deleteCoach(Coach._id,Coach.hasLogo,e)}><img src='delete.svg' alt="" style={{width:'24px',height:'24px'}}/></a></td>
                  <td><a  className="mt-2"  onClick={(e) => updateCoach(Coach,e)}><img src='update.svg' alt="" style={{width:'24px',height:'24px'}}/></a></td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
  }
};

export default Coachs

