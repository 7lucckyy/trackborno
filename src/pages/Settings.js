import React from "react";
import { FaUserAlt, FaUserAstronaut, FaChevronDown,  FaPlus } from 'react-icons/fa';
import { Col, Row, Button, Dropdown } from 'react-bootstrap';

import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import CenteredModal from "./custom/Modal"
import UserForm from "./custom/UserForm";
import Profile1 from "../assets/img/team/profile-picture-1.jpg";


export default function Settings() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-flex">
          <Dropdown>
            <Dropdown.Toggle as={Button} variant="primary">
              <FaPlus className="me-2" /> New
              <span className="icon icon-small ms-1"><FaChevronDown /></span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-5">
            <Dropdown.Item onClick={()=>setModalShow(true)}>
              <FaUserAlt className="me-2" /> Admin 1
            </Dropdown.Item>
            <Dropdown.Item>
              <FaUserAstronaut className="me-2" /> Partner (Admin 2)
            </Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <Row>
        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget />
            </Col>
            <Col xs={12}>
              <ChoosePhotoWidget
                title="Select profile photo"
                photo={Profile1}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <CenteredModal show={modalShow} size="lg" heading="Create User" onHide={() => setModalShow(false)} render={() => (<UserForm /> )}/>
    </>
  );
};
