import GuideConsultation from "../../components/dashboard/GuideConsultations"; 

import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const GuideConsultations = () => {
    return (
      <Row>
        <Col lg="12">
          <GuideConsultation />
        </Col>
      </Row>
    )
};

export default GuideConsultations;
