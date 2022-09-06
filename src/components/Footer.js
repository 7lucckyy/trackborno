import React from "react";
import { Row, Col, Card} from 'react-bootstrap';

export default (props) => {

  return (
    <div>
      <footer className="footer section py-1">
        <Row>
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <p className="mb-0 text-center text-xl-left">
              Copyright © {`${new Date().getFullYear()} `}
              <Card.Link href="https://vuetifysolutions.netlify.app" target="_blank" className="text-blue text-decoration-none fw-normal">
                Vuetify Solutions
              </Card.Link>
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
};
