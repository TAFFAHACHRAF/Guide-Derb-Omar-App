import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import axios from 'axios'
import React,{ useEffect , useState} from "react"
import { useCookies } from "react-cookie";
import Loader from "../../layouts/loader/Loader.js"

const Sellers = () => {
  const [Sellers,setSellers] = useState([]);
  const [rowMaped,setRowMaped] = useState(null);
  const [searchText,setSearchText] = useState("");
  const [cookies, setCookie] = useCookies(['seller']);

  function deleteSeller(id,hasLogo,e){
    axios.delete(`http://localhost:5000/sellers/${id}`)
    .then(function(response) {
      window. location. reload()
    }).catch(function(error) {
        alert('Error')
    })

    if(hasLogo){
      axios.delete(`http://localhost:5000/images/deleteSeller/${id}`)
      .then(function(response) {
        console.log(response)
      }).catch(function(error) {
        console.log(error)
      })
    }

    window.location.reload()
  }

  function updateSeller(seller,e){
    setCookie('Seller',seller)
    window. location.href ='http://localhost:3000/#/dachbord/updateSeller/'
  }
  
  useEffect(() => {
    axios.get('http://localhost:5000/sellers/')
          .then(function(response) {
            setSellers(response.data)
            console.log(response.data)
        }).catch(function(error) {
            console.log('error')
      })
  }, []);
  
  if(Sellers == null){return(<Loader />)}
  else{
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Sellers list</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of our transportation companies
          </CardSubtitle>

          <CardSubtitle className="d-flex justify-content-end me-4">
            <a href="/#/dachbord/addSeller">
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
                <th>Logo</th>
                <th>Social reason</th>
                <th>Nationality</th>
                <th>Speciality</th>
                <th>Trade register</th>
                <th>Juridical statute</th>
                <th>Fax</th>
                <th>Phone</th>
                <th>Adresse</th>
                <th>Email</th>
                <th>Verfied</th>
              </tr>
            </thead>
            <tbody>
              {Sellers.slice(0,(rowMaped || 5 || 0)).filter(function(e){return (searchText ? e.adresse.includes(searchText) || e.email.includes(searchText) || e.createdAt.includes(searchText) || e.updatedAt.includes(searchText) || e.phone_number.includes(searchText) || e.fax_number.includes(searchText) || e.juridical_statute.includes(searchText) || e.trade_register.includes(searchText) || e.speciality.includes(searchText) || e.nationality.includes(searchText) || e.social_reason.includes(searchText) : true)}).map((Seller, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={("http://localhost:5000/images/"+Seller._id) ? ("http://localhost:5000/images/"+Seller._id) : user1}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                    </div>
                  </td>
                  <td>{Seller.social_reason}</td>
                  <td>{Seller.nationality}</td>
                  <td>{Seller.speciality}</td>
                  <td>{Seller.trade_register}</td>
                  <td>{Seller.juridical_statute}</td>
                  <td>{Seller.fax_number}</td>
                  <td>{Seller.phone_number}</td>
                  <td>{Seller.adresse}</td>
                  <td>{Seller.email}</td>
                  <td>{Seller.verified == "true" ? "Yes" : "No"}</td>
                  <td><a onClick={(e) => deleteSeller(Seller._id,Seller.hasLogo, e)}><img src='delete.svg' style={{width:'24px',height:'24px'}}/></a></td>
                  <td><a className="mt-2"  onClick={(e) => updateSeller(Seller,e)}><img src='update.svg' style={{width:'24px',height:'24px'}}/></a></td>
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

export default Sellers

