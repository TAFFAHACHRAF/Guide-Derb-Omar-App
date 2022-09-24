import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import axios from 'axios'
import React,{ useEffect , useState} from "react"
import { useCookies } from "react-cookie";
import Loader from "../../layouts/loader/Loader";


const Source_products = () => {
  const [Source_products,setSource_products] = useState(null);
  const [rowMaped,setRowMaped] = useState(null);
  const [searchText,setSearchText] = useState("");
  const [cookies, setCookie,removeCookie] = useCookies(['Source_product']);

  function deleteSource_product(id,e){
    axios.delete(`http://localhost:5000/source_products/${id}`)
    .then(function(response) {
      window. location. reload()
    }).catch(function(error) {
      alert('Error')
    })
  }

  function updateSource_product(id,e){
    axios.get(`http://localhost:5000/source_products/${id}`)
        .then(function(response) {
          setCookie('Source_product',response.data)
          window.location.href='http://localhost:3000/#/dachbord/updateSource_product/'
        }).catch(function(error) {
          console.log('error')
    })
  }
  
  useEffect(() => {
    axios.get('http://localhost:5000/source_products/')
          .then(function(response) {
            setSource_products(response.data)
        }).catch(function(error) {
            console.log(error)
      })
  }, []);

  if(Source_products == null){return(<Loader />)}
  else{
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Source_products list</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of our transportation companies
          </CardSubtitle>

          <CardSubtitle className="d-flex justify-content-end me-4">
            <a href="/#/dachbord/addSource_product">
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
            <Table className="no-wrap mt-3 align-middle mt-4" responsive borderless>
              <thead>
                <tr>
                  <th>Link</th>
                  <th>Categorie</th>
                  <th>Create at</th>
                  <th>Update at</th>
                </tr>
              </thead>
              <tbody>
                {Source_products.slice(0,(rowMaped || 5 || 0)).filter(function(e){return (searchText ? e.categorie.includes(searchText) || e.link.includes(searchText) || e.createdAt.includes(searchText) : true)}).map((Source_product, index) => (
                  <tr key={index} className="border-top">
                    <td><a href={Source_product.link} target="_blank">{Source_product.link}</a></td>
                    <td>{Source_product.categorie}</td>
                    <td>{Source_product.createdAt.slice(0,10)}</td>
                    <td>{Source_product.updatedAt.slice(0,10)}</td>
                    <td><a onClick={(e) => deleteSource_product(Source_product._id, e)}><img src='delete.svg' style={{width:'24px',height:'24px'}}/></a></td>
                    <td><a onClick={(e) => updateSource_product(Source_product._id, e)}><img src='update.svg' style={{width:'24px',height:'24px'}}/></a></td>
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

export default Source_products

