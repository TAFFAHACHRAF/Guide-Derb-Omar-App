import Visitors from "../../components/dashboard/Visitors"

import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Visitor = () => {
    return (
      <Row>
        <Col lg="12">
          <Visitors />
        </Col>
      </Row>
    )
};

export default Visitor;
