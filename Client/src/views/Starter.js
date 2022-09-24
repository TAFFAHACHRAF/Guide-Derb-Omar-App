import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import TopCards from "../components/dashboard/TopCards";
import axios from 'axios'
import React,{ useEffect , useState} from "react"
import { useCookies } from "react-cookie";

const Starter = () => {
  const [countGuides,setCountGuides] = useState(null);
  const [countVisitors,setCountVisitors] = useState(null);
  const [countTransporters,setCountTransporters] = useState(null);
  const [countImporters,setCountImporters] = useState(null);
  const [countSellers,setCountSellers] = useState(null);
  const [countTrainings,setCountTrainings] = useState(null);
  const [countCoachs,setCountCoachs] = useState(null);
  const [countSource_products,setCountSource_products] = useState(null);
  const [countPlans,setCountPlans] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/guides/count/count')
        .then(function(response) {
          setCountGuides(response.data.guides)
      }).catch(function(error) {
        console.log('error')
    })
  
    axios.get('http://localhost:5000/visitors/count/count')
      .then(function(response) {
        setCountVisitors(response.data.visitors)
    }).catch(function(error) {
        console.log('error')
    })

    axios.get('http://localhost:5000/transporters/count/count')
        .then(function(response) {
          setCountTransporters(response.data.transporters)
      }).catch(function(error) {
          console.log('error')
    })

    axios.get('http://localhost:5000/importers/count/count')
        .then(function(response) {
          setCountImporters(response.data.importers)
      }).catch(function(error) {
          console.log('error')
    })
    

    axios.get('http://localhost:5000/sellers/count/count')
        .then(function(response) {
          setCountSellers(response.data.sellers)
      }).catch(function(error) {
          console.log('error')
    })

    axios.get('http://localhost:5000/trainings/count/count')
    .then(function(response) {
      setCountTrainings(response.data.trainings)
    }).catch(function(error) {
        console.log('error')
    })

    axios.get('http://localhost:5000/coachs/count/count')
    .then(function(response) {
      setCountCoachs(response.data.coachs)
    }).catch(function(error) {
      console.log('error')
    })

    axios.get('http://localhost:5000/source_products/count/count')
    .then(function(response) {
      setCountSource_products(response.data.source_products)
      }).catch(function(error) {
          console.log('error')
    })

    axios.get('http://localhost:5000/plans/count/count')
    .then(function(response) {
      setCountPlans(response.data.plans)
      }).catch(function(error) {
          console.log('error')
    })
    
  }, []);

  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Guides"
            earning={countGuides || 0}
            icon="bi bi-question-circle"
          />
        </Col>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Visitors"
            earning={countVisitors || 0}
            icon="bi bi-people"
          />
        </Col>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Transporters"
            earning={countTransporters || 0}
            icon="bi bi-truck"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Importers"
            earning={countImporters || 0}
            icon="bi bi-person-plus-fill"
          />
        </Col>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-success text-success"
            title="Sales"
            subtitle="Sellers"
            earning={countSellers || 0}
            icon="bi bi-shop"
          />
        </Col>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Trainings"
            earning={countTrainings || 0}
            icon="bi bi-youtube"
          />
        </Col>

        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Coches"
            earning={countCoachs || 0}
            icon="bi bi-person-video3"
          />
        </Col>

        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Source product"
            earning={countSource_products || 0}
            icon="bi bi-link-45deg"
          />
        </Col>

        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Plans"
            earning={countPlans || 0}
            icon="bi bi-currency-dollar"
          />
        </Col>

      </Row>
      {/***Sales & Feed***/}
      <Row>
        <Col>
          <SalesChart />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
