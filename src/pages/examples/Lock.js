
import React, { useState } from "react";
import { FaUnlockAlt, FaEye } from "react-icons/fa";
import { Col, Row, Form, Image, Button, Container, InputGroup } from 'react-bootstrap';

import BgImage from "../../assets/img/illustrations/signin.svg";
import Profile1 from "../../assets/img/team/profile-picture-1.jpg";

export default function Lock() {
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputType = showPassword ? "text" : "password";
  const passwordIconColor = showPassword ? "#262B40" : "";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <section className="vh-lg-100 bg-soft d-flex align-items-center my-4">
        <Container>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border border-light rounded p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <div className="user-avatar large-avatar mx-auto mb-3 border-dark p-2">
                    <Image src={Profile1} className="rounded-circle" />
                  </div>
                  <h3 className="mb-3">Bonnie Green</h3>
                  <p className="text-gray">Better to be safe than sorry.</p>
                </div>
                <Form className="mt-5">
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaUnlockAlt />
                      </InputGroup.Text>
                      <Form.Control required type={passwordInputType} placeholder="Password" />
                      <InputGroup.Text onClick={togglePasswordVisibility}>
                        <FaEye color={passwordIconColor}/>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Unlock
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
