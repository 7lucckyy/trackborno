import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FaUserCircle, FaChartPie, FaCog, FaHandHoldingUsd, FaSignOutAlt, FaTimes, FaRocket, FaLocationArrow, FaPaperclip } from "react-icons/fa";
import { Nav, Badge, Image, Button, Dropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { NavigationRoutes } from "../routes";


export default function Sidebar(props = {}) {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = pathname === link ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon">{icon} </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={NavigationRoutes.DashboardOverview.path}>
          {/* <Image src={ReactHero} className="navbar-brand-light" /> */}
          <FaUserCircle size={40} className="navbar-brand-light"/>
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition mt-5">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  {/* <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" /> */}
                  <FaUserCircle size={120} className="card-img-top rounded-circle border-white"/>
                </div>
                <div className="d-block">
                  <h6 className="mb-0">Hi, Fatima Muhammad</h6>
                  <p className="mt-0">Administrator</p>
                  <Button as={Link} variant="secondary" size="xs" to={NavigationRoutes.Signin.path} className="text-dark">
                    <FaSignOutAlt className="me-2" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FaTimes />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <Nav.Item className="mb-5">
                  <span>
                    <span className="sidebar-text fw-bolder fs-4">TrackBorno25</span>
                  </span>
                {/* <Nav.Link>
                </Nav.Link> */}
              </Nav.Item>
              <NavItem title="Dashboard" link={NavigationRoutes.DashboardOverview.path} icon={<FaChartPie/>} />
              <NavItem title="Projects" icon={<FaHandHoldingUsd/>} link={NavigationRoutes.Projects.path} />
              <NavItem title="Sites" icon={<FaLocationArrow/>} link={NavigationRoutes.Sites.path} />
              <NavItem title="Report" icon={<FaPaperclip/>} link={NavigationRoutes.Report.path} />
              <NavItem title="User Settings" icon={<FaCog/>} link={NavigationRoutes.Settings.path} />
              
              {/* <CollapsableNavItem eventKey="tables/" title="Tables" icon={faTable}>
                <NavItem title="Bootstrap Table" link={NavigationRoutes.BootstrapTables.path} />
              </CollapsableNavItem> */}

              <Dropdown.Divider className="my-3 border-indigo" />


              {/* <NavItem external title="TrackBorno25" link="https://themesberg.com" target="_blank" /> */}
              {/* <Image src={BOSG} width={150} height={150} className="mx-auto" /> */}
              <Button as={Link} to={NavigationRoutes.Signin.path} variant="danger" className="upgrade-to-pro"><FaRocket className="me-1" /> Logout</Button>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
