import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, Table, Breadcrumb } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';

import {NavigationRoutes} from "../../routes"


function Project() {
	const { id } = useParams();
	return (
		<div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item href={NavigationRoutes.DashboardOverview.path}>Vuetify <FaHome /></Breadcrumb.Item>
            <Breadcrumb.Item  href={NavigationRoutes.Projects.path}>Projects</Breadcrumb.Item>  
            <Breadcrumb.Item active>Project {id}</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Project Name</h4>
          {/* <p className="mb-0">Your web analytics dashboard template.</p> */}
        </div>
      </div>
			<Card border="light" className="table-wrapper table-responsive shadow-sm">
			<Card.Header>
				<Card.Title>Project {id}</Card.Title>
			</Card.Header>
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">#</th>
              <th className="border-bottom">Title</th>
              <th className="border-bottom">Detail</th>
            </tr>
          </thead>
          <tbody>
					<tr>
						<td>#</td>
						<td><span className="fw-normal">Poject Name</span></td>
						<td><span className="fw-normal">Increasing access to edcuation for Adolescent girls in Borno State</span></td>
					</tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
		</div>
	)
}

export default Project