import React, { useState } from 'react'
import { Col, Row, Card, Form, Button, InputGroup } from 'react-bootstrap';
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FaCalendarAlt } from 'react-icons/fa';
import SDPPillars from '../../data/SDPPillars';
import stiCodes from '../../data/stiCodes';


function ProjectForm() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Project information</h5>
        <Form>
          <Row>
            <Col className="mb-3">
              <Form.Group id="basis">
                <Form.Label>Context or Basis of Project</Form.Label>
                <Form.Control required type="text" placeholder="The project is..." />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <Form.Group id="projectName">
                <Form.Label>Poject Name</Form.Label>
                <Form.Control required type="text" placeholder="E.g. Increasing acess to edcuation for Adolescent girls in Borno State" />
              </Form.Group>
            </Col>
          </Row>
					<Row>
            <Col md={6} className="mb-3">
              <Form.Group id="thematicSector">
                <Form.Label>Thematic Sector</Form.Label>
								<Form.Select defaultValue="0">
                  <option value="0">Education</option>
                  <option value="1">Agriculture</option>
                  <option value="2">Empowernment</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="SDPPillar">
                <Form.Label>SDP Pillar</Form.Label>
                <Form.Select defaultValue="0">
									{SDPPillars.map(pillar => (
										<option key={pillar.code} value={pillar.code}>{pillar.title}</option>
									))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
					<Row>
            <Col md={6} className="mb-3">
              <Form.Group id="stiCode">
                <Form.Label>STI Code</Form.Label>
								<Form.Select defaultValue="0">
									{stiCodes.map(sti => (
										<option key={sti.code} value={sti.code}>{`${sti.code}: ${sti.title}`}</option>
									))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="siteName">
                <Form.Label>Site Name (community and ward)</Form.Label>
                <Form.Control required type="text" placeholder="Shuwari garke" />
              </Form.Group>
            </Col>
          </Row>
					
					<Row>
            <Col md={6} className="mb-3">
              <Form.Group id="lgCoverage">
                <Form.Label>LG Coverage</Form.Label>
								<Form.Select defaultValue="0">
									<option value="0">Gender</option>
                  <option value="1">Female</option>
                  <option value="2">Male</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="targetBeneficiaries">
                <Form.Label>No of Target Beneficiaries</Form.Label>
                <Form.Control required type="number" />
              </Form.Group>
            </Col>
          </Row>

					<Row>
            <Col md={6} className="mb-3">
              <Form.Group id="completion">
                <Form.Label>% Completion</Form.Label>
									<Form.Control required type="number" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="targetBeneficiaries">
                <Form.Label>No of Target Beneficiaries</Form.Label>
                <Form.Control required type="number" />
              </Form.Group>
            </Col>
          </Row>

					<Row>
            <Col className="mb-3">
              <Form.Group id="progessNote">
                <Form.Label>Progress Note</Form.Label>
                <Form.Control required type="text" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="projectDonor">
                <Form.Label>Project Donor</Form.Label>
                	<Form.Control required type="text" />
              </Form.Group>
            </Col>
          </Row>

					<Row>
            <Col md={6} className="mb-3">
              <Form.Group id="budjet">
                <Form.Label>Budget</Form.Label>
									<Form.Control required type="number" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="targetBeneficiaries">
                <Form.Label>No of Target Beneficiaries</Form.Label>
                <Form.Control required type="number" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6} className="mb-3">
              <Form.Group id="startDate">
                <Form.Label>Start Date</Form.Label>
                <Datetime timeFormat={false} onChange={setStartDate} renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text>
											<FaCalendarAlt />
											</InputGroup.Text>
                      <Form.Control required type="text" value={startDate ? moment(startDate).format("MM/DD/YYYY") : ""}
                        placeholder="mm/dd/yyyy" onFocus={openCalendar} onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="endDate">
                <Form.Label>End Date</Form.Label>
                <Datetime timeFormat={false} onChange={setEndDate} renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text>
											<FaCalendarAlt />
											</InputGroup.Text>
                      <Form.Control required type="text" value={endDate ? moment(endDate).format("MM/DD/YYYY") : ""}
                        placeholder="mm/dd/yyyy" onFocus={openCalendar} onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
          </Row>

					<Row>
            <Col className="mb-3">
              <Form.Group id="subgrantee">
                <Form.Label>Subgrantee (If applicable) Kindly fill Organizations you are subgranting for each activity line if applicable</Form.Label>
									<Form.Control required type="text" />
              </Form.Group>
            </Col>
          </Row>

					<Row>
            <Col className="mb-3">
              <Form.Group id="contactPerson">
                <Form.Label>Contact Person from your organization (Name, email and Phone number)</Form.Label>
									<Form.Control required type="text" />
              </Form.Group>
            </Col>
          </Row>

          <div className="mt-3">
            <Button variant="primary" type="submit">Save All</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default ProjectForm