import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import { Button } from "reactstrap";
import axios from 'axios'
import React,{ useEffect , useState} from "react"
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import Loader from "../../layouts/loader/Loader";




const GuideConsultation = () => {
  const [guideConsultations,setGuideConsultations] = useState([]);
  const [rowMaped,setRowMaped] = useState(null);
  const [searchText,setSearchText] = useState("");
  const [cookies, setCookie] = useCookies(['GuideConsultations']);


  function deleteGuideConsultation(id,e){
    axios.delete(`http://localhost:5000/guideConsultations/${id}`)
    .then(function(response) {
      window.location.reload()
    }).catch(function(error) {
        alert('Error')
    })
  }

  function updateGuideConsultation(guideConsultation,e){
      setCookie('GuideConsultations',guideConsultation)
      window.location.href='http://localhost:3000/#/dachbord/updateGuideConsultations/'
  }
  
  useEffect(() => {
    axios.get('http://localhost:5000/guideConsultations/')
          .then(function(response) {
            setGuideConsultations(response.data)
        }).catch(function(error) {
            console.log('error')
      })
  }, []);

  if(guideConsultations == null){return(<Loader />)}
  else{
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Transporters list</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of our transportation companies
          </CardSubtitle>

          <CardSubtitle className="d-flex justify-content-end me-4">
            <a href="/#/dachbord/addGuideConsultation">
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
                      placeholder={'Guide derb omar...'}
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
            <Table className="no-wrap mt-3 align-middle mt-2" responsive borderless>
              <thead>
                <tr>
                  <th>Follower</th>
                  <th>Guide</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Validation</th>
                </tr>
              </thead>
              <tbody>
                {guideConsultations.slice(0,(rowMaped || 5 || 0)).filter(function(e){return (searchText ? e.follower.includes(searchText) || e.guide.includes(searchText) || e.title.includes(searchText) || e.description.includes(searchText) || e.date.includes(searchText) : true)}).map((guideConsultation, index) => (
                  <tr key={index} className="border-top">
                    <td>{guideConsultation.follower}</td>
                    <td>{guideConsultation.guide}</td>
                    <td>{guideConsultation.title}</td>
                    <td>{guideConsultation.description}</td>
                    <td>{guideConsultation.date.substr(0,10)}</td>
                    <td>{guideConsultation.validation}</td>
                    <td><a onClick={(e) => deleteGuideConsultation(guideConsultation._id, e)}><img src='delete.svg' style={{width:'24px',height:'24px'}}/></a></td>
                    <td><a onClick={(e) => updateGuideConsultation(guideConsultation,e)}><img src='update.svg' style={{width:'24px',height:'24px'}}/></a></td>
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

export default GuideConsultation

