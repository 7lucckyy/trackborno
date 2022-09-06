
import React from "react";
import { Col, Row, Button, Dropdown } from 'react-bootstrap';
import { FaPlus, FaProjectDiagram, FaUserAlt } from "react-icons/fa";

import { CardWidget, PieChartWidget, BarChartWidget } from "../../components/Widgets";
import UserForm from "../custom/UserForm";
import CenteredModal from "../custom/Modal"
import ProjectForm from "../custom/ProjectForm";
import { monitoredProjects, themanticPillarProjects } from "../../data/charts";



export default function DashboardOverview() {
  const [showProjectModal, setProjectModal] = React.useState(false);
  const [showUserModal, setUserModal] = React.useState(false);
  
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
            <FaPlus className="me-2"/>New
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2" container="body">
            <Dropdown.Item className="fw-bold" onClick={()=>setProjectModal(true)} as="button">
                <FaProjectDiagram className="me-2"/>New Project
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold" onClick={()=>setUserModal(true)} as="button">
              <FaUserAlt className="me-2" /> New User
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4">
          <BarChartWidget title="Project Statistics" value="10,567" percentage={10.57} data={monitoredProjects}/>
        </Col>
        {themanticPillarProjects.map(pillar =>
          <Col key={pillar.code} xs={12} sm={6} xl={3} className="mb-4">
            <CardWidget title={`${pillar.label}`} period="Feb 1 - Apr 1"
              icon={<pillar.icon />} iconColor="shape-tertiary"/>
          </Col>

        )}
        
      </Row>

      <Row>
        <Col xs={12} sm={6} xl={6} className="mb-4">
          <BarChartWidget title="Monitored Project across LGAs" data={monitoredProjects} />
        </Col>
        <Col xs={12} sm={6} xl={6} className="mb-4">
          <PieChartWidget title="Projects by Themantic Pillars" data={themanticPillarProjects} />
        </Col>
      </Row>
      <CenteredModal show={showProjectModal} size="lg" heading="Create new Project" onHide={() => setProjectModal(false)} render={() => (<ProjectForm /> )}/>
      <CenteredModal show={showUserModal} size="lg" heading="Create User" onHide={() => setUserModal(false)} render={() => (<UserForm /> )}/>
    </>
  );
};
