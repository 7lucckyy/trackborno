import React from "react";
import { FaCheck, FaCog, FaHome, FaSearch, FaMapPin, FaPlus, FaFileAlt, FaCommentDots, FaRocket } from "react-icons/fa";
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from 'react-bootstrap';

import { ProjectsTable } from "../components/Tables";
import CenteredModal from "../pages/custom/Modal"
import ProjectForm from "./custom/ProjectForm";
import DeleteProject from "./custom/DeleteProject";

export default function Projects() {
  const [showProjectModal, setShowProjectModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FaHome /></Breadcrumb.Item>
            <Breadcrumb.Item>Vuetify</Breadcrumb.Item>
            <Breadcrumb.Item active>Projects</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Projects</h4>
          <p className="mb-0">Your projects...</p>
        </div>

        <Dropdown>
          <Dropdown.Toggle as={Button} variant="primary" className="text-white me-2">
            <FaPlus className="me-2" />
            <span>New</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item onClick={() => setShowProjectModal(true)}>
              <FaFileAlt className="me-2" /> Project
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col>
          <Col xs={4} md={2} xl={1} className="d-flex justify-content-between ps-md-0 text-end me-8">
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm icon-gray">
                  <FaMapPin />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                <Dropdown.Item className="fw-bold">MMC</Dropdown.Item>
                <Dropdown.Item className="fw-bold">Biu</Dropdown.Item>
                <Dropdown.Item className="fw-bold">Baga</Dropdown.Item>
                <Dropdown.Item className="d-flex fw-bold text-dark">Jere
                  <span className="icon icon-small ms-auto"><FaCheck /></span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">Damboa</Dropdown.Item>
                <Dropdown.Item className="fw-bold">Bama</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm icon-gray"><FaCog /></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-md dropdown-menu-right">
                <Dropdown.Item className="fw-bold text-dark">Filter</Dropdown.Item>
                <Dropdown.Item className="fw-bold">Location</Dropdown.Item>
                <Dropdown.Item className="fw-bold">STI Pillars Code</Dropdown.Item>
                <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                <Dropdown.Item className="d-flex fw-bold">10
                  <span className="icon icon-small ms-auto"><FaCheck /></span></Dropdown.Item>
                <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                <Dropdown.Item className="fw-bold">30</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>

      <ProjectsTable toggleProjectModal={setShowProjectModal} deleteProjectModal={setShowDeleteModal}/>
      <CenteredModal show={showProjectModal} size="lg" heading="Create new Project" onHide={() => setShowProjectModal(false)} render={() => (<ProjectForm /> )}/>
      <CenteredModal show={showDeleteModal} size="sm" onHide={() => setShowDeleteModal(false)} render={() => (<DeleteProject /> )}/>
    </>
  );
};
