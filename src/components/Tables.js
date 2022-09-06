
import React from "react";
import { useNavigate, } from "react-router-dom";
import { FaEdit, FaEllipsisH, FaEye, FaTrashAlt } from 'react-icons/fa';
import { Nav, Card, Button, Table, Dropdown, ProgressBar, Pagination, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { NavigationRoutes } from "../routes";


export const ProjectsTable = ({ toggleProjectModal, deleteProjectModal }) => {
  const navigate = useNavigate()
  const totalTransactions = 10 //transactions.length;

  const TableRow = (props) => {
    const { invoiceNumber, subscription, price, issueDate, dueDate, status } = props;
    const statusVariant = status === "Paid" ? "success"
      : status === "Due" ? "warning"
        : status === "Canceled" ? "danger" : "primary";

    return (
      <tr>
        <td>
          <Card.Link as={Link} to={NavigationRoutes.Projects.path} className="fw-normal">
            {invoiceNumber}
          </Card.Link>
        </td>
        <td><span className="fw-normal"> </span></td>
        <td><span className="fw-normal"> </span></td>
        <td><span className="fw-normal"> </span></td>
        <td><span className="fw-normal"> </span></td>
        <td></td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FaEllipsisH className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>navigate("/projects/1/")}>
                <FaEye className="me-2" /> View Details
              </Dropdown.Item>
              <Dropdown.Item onClick={()=> toggleProjectModal(true)}>
                <FaEdit className="me-2" /> Edit
              </Dropdown.Item>
              <Dropdown.Item className="text-danger"  onClick={()=> deleteProjectModal(true)}>
                <FaTrashAlt className="me-2" /> Remove
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">#</th>
              <th className="border-bottom">Basis of Project</th>
              <th className="border-bottom">Project Name</th>
              <th className="border-bottom">Themantic Pillar</th>
              <th className="border-bottom">SDP Pillar</th>
              <th className="border-bottom">STI Code</th>
              <th className="border-bottom">Action</th>
            </tr>
          </thead>
          <tbody>
            {<TableRow/>}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Previous
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Next
              </Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalTransactions}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};