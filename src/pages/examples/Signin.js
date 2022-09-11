import React from "react";
import { FaEnvelope, FaUnlockAlt } from "react-icons/fa";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import { NavigationRoutes } from "../../routes";
import BgImage from "../../assets/img/BOSGCover.jpg";
import BOSG from "../../assets/img/BOSG.jpeg";


export default function SignIn() {
  const navigate = useNavigate()
  return (
    <main>
      <section className="d-flex align-items-center justify-content-center my-3 mt-lg-3 mb-lg-5">
        <Container>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 pt-lg-0 w-100 fmxw-500">
                <div className="d-flex align-items-center justify-content-center">
                  <Image src={BOSG} className="rounded-full mb-0"/>
                </div>
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h1 className="mb-0">TrackBorno25</h1>
                  <h5 className="mb-0">Sign in to our platform</h5>
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="email" placeholder="example@company.com" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FaUnlockAlt />
                        </InputGroup.Text>
                        <Form.Control required type="password" placeholder="Password" />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                      </Form.Check>
                      <Card.Link className="small text-end">Lost password?</Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100" onClick={()=>navigate('/home')}>
                    Sign in
                  </Button>
                </Form>

                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link as={Link} to={NavigationRoutes.Signup.path} className="fw-bold">
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
