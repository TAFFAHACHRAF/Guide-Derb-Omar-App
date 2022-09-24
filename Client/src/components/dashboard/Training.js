import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import axios from 'axios'
import React,{ useEffect , useState} from "react"
import { useCookies } from "react-cookie";
import Loader from "../../layouts/loader/Loader";
import { func } from "joi";

const Trainings = () => {
  const [trainings,setTrainings] = useState([]);
  const [rowMaped,setRowMaped] = useState(null);
  const [searchText,setSearchText] = useState("");
  const [showVideo,setShowVideo] = useState(null);
  const [cookies, setCookie] = useCookies(['Training']);

  function deletetraining(id,e){
    axios.delete(`http://localhost:5000/trainings/${id}`)
    .then(function(response) {
      window. location.reload()
    }).catch(function(error) {
      alert('Error')
    })
  }

  function updateTraining(training,e){
    setCookie('Training',training)
    window.location.href ='http://localhost:3000/#/dachbord/updateTraining/'
  }

  function showTraining(id,e){
    setShowVideo(id)
  }
  
  useEffect(() => {
    axios.get('http://localhost:5000/trainings/')
          .then(function(response) {
            setTrainings(response.data)
        }).catch(function(error) {
            console.log('error')
      })
    
    document.addEventListener('keydown', function(event){
        if(event.key === "Escape"){
          window.location.reload()
        }
    });
  }, []);

  if(trainings == null){return(<Loader />)}
  else if(showVideo != null){
      return(
        <div>
          <video width="90%" height="90%" controls >
            <source src={"http://localhost:5000/videos/" + showVideo} type="video/mp4" />
            <source src={"http://localhost:5000/videos/" + showVideo} type="video/x-matroska" />
            Your browser does not support the video tag.
          </video>
        </div>
    )}
  else{ 
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">trainings list</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of our transportation companies
          </CardSubtitle>

          <CardSubtitle className="d-flex justify-content-end me-4">
            <a href="/#/dachbord/addTraining">
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
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead> 
              <tr>
                {/* <th>Miniature</th> */}
                <th>Title</th>
                <th>Description</th>
                <th>Published</th>
              </tr>
            </thead>
            <tbody>
              {trainings.slice(0,(rowMaped || 5 || 0)).filter(function(e){return (searchText ? e.title.includes(searchText) || e.description.includes(searchText) || e.published.includes(searchText): true)}).map((training, index) => (
                <tr key={index} className="border-top">
                  <td>{training.title}</td>
                  <td>{training.description}</td>
                  <td>{(training.published).substr(0,10)}</td>
                  <td>
                    <a className="m-4" onClick={(e) => deletetraining(training._id, e)}><img src='delete.svg' style={{width:'24px',height:'24px'}}/></a>
                    <a className="m-4"  onClick={(e) => updateTraining(training,e)}><img src='update.svg' style={{width:'24px',height:'24px'}}/></a>
                    <a className="m-4" style={{color:"black"}}  onClick={(e) => showTraining(training._id,e)}><i class="bi bi-camera-reels"></i></a>
                  </td>
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

export default Trainings

