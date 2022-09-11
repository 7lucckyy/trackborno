
import React from "react";
import { FaCog, FaSignOutAlt, FaUserShield, FaUserCircle } from "react-icons/fa";
import { Nav, Navbar, Dropdown, Container } from 'react-bootstrap';


export default function Navigationbar(props) {
  return (
    <Navbar variant="dark" bg="dark" expanded className="ps-0 pe-2 pb-0 pt-0 pt-lg-2">
      <Container fluid className="px-0">
        <div className="d-none d-md-flex justify-content-end w-100">
          <Nav className="align-items-center">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  {/* <Image src={Profile3} className="user-avatar md-avatar rounded-circle" /> */}
                  <FaUserCircle className="user-avatar md-avatar rounded-circle" />
                  <div className="media-body ms-2 text-white align-items-center d-none d-lg-block">
                    <div className="d-flex align-items-start">
                      <p className="mb-0 font-small fw-bold">Fatima Muhammad</p>
                    </div>
                      <p className="mb-0 font-small">Administrator</p>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                <Dropdown.Item className="fw-bold">
                  <FaUserCircle className="me-2" /> My Profile
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FaCog className="me-2" /> Settings
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FaUserShield className="me-2" /> Support
                </Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item className="fw-bold">
                  <FaSignOutAlt className="text-danger me-2" /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
