import React from "react";
import { FaPaperclip } from "react-icons/fa";
import { Col, Row, Card, Button } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

import { CircleChart, BarChart, ProjectChart, LineChart } from "./Charts";
import Profile1 from "../assets/img/team/profile-picture-1.jpg";
import ProfileCover from "../assets/img/profile-cover.jpg";
import Marker from "./Marker";
import coordinates from "../data/coordinates";


export const ProfileCardWidget = () => {
  return (
    <Card border="light" className="text-center p-0 mb-4">
      <div style={{ backgroundImage: `url(${ProfileCover})` }} className="profile-cover rounded-top" />
      <Card.Body className="pb-5">
        <Card.Img src={Profile1} alt="Neil Portrait" className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4" />
        <Card.Title>Admin User</Card.Title>
        <Card.Subtitle className="fw-normal">Project Supervisor</Card.Subtitle>
        <Card.Text className="text-gray mb-4">Borno, Nigeria</Card.Text>
      </Card.Body>
    </Card>
  );
};

export const ChoosePhotoWidget = (props) => {
  const { title, photo } = props;

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">{title}</h5>
        <div className="d-xl-flex align-items-center">
          <div className="user-avatar xl-avatar">
            {/* <Image fluid rounded src={photo} /> */}
          </div>
          <div className="file-field">
            <div className="d-flex justify-content-xl-center ms-xl-3">
              <div className="d-flex">
                <span className="icon icon-md">
                  <FaPaperclip className="me-3" />
                </span>
                <input type="file" />
                <div className="d-md-block text-start">
                  <div className="fw-normal text-dark mb-1">Choose Image</div>
                  <div className="text-gray small">JPG, GIF or PNG. Max size of 800K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export const CardWidget = (props) => {
  const { icon, iconColor, title, value} = props;

  return (
    <Card border="light" className="shadow-sm h-100">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center justify-content-between">
          <Col xl={4} className="text-center d-flex align-items-center justify-content-around justify-content-xl-center mb-3 mb-xl-0">
            <div className={`icon icon-shape icon-md icon-${iconColor} rounded me-4 me-sm-0`}>
              {icon}
            </div>
            <div className="d-sm-none">
              <h2>{title}</h2>
              <h4 className="fw-bolder">{value} Projects</h4>
            </div>
          </Col>
          <Col xs={12} xl={8} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h6>{title}</h6>
              <h4 className="fw-bolder">{value} Projects</h4>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const PieChartWidget = (props) => {
  const { title, data = [] } = props;
  const series = data.map(d => d.value);
  const labels = data.map(d => d.label);
  const colors = data.map(d => d.chartColor);

  return (
    <Card border="light" className="shadow-sm h-100">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <h5 className="mb-3">{title}</h5>
          <Col xs={12} xl={8} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <CircleChart series={series} labels={labels} colors={colors}/>
          </Col>
          <Col xs={12} xl={4} className="px-xl-0">
            {data.map(d => (
              <h6 key={`circle-element-${d.id}`} className="fw-normal text-gray">
                <d.icon className={`icon icon-xs text-${d.color} w-20 me-1`} />
                {`${d.code} `}{`${d.value}%`}
              </h6>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const BarChartWidget = (props) => {
  const { title, value, data = [] } = props;
  const labels = ['JRE', 'MMC', 'BIU', 'BAM', 'BGA', 'DMB'];
  const series = data.map(d => d.value);

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          {/* <h3>N{value}</h3> */}
        </div>
        <div className="d-block ms-auto">
          {data.map(d => (
            <div key={`bar-element-${d.id}`} className="d-flex align-items-center text-end text-nowrap mb-2">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal">{d.label}</small>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2">
        <BarChart labels={labels} series={series}/>
      </Card.Body>
    </Card>
  );
};
export const LineChartWidget = (props) => {
  const { title, value, data = [] } = props;
  const labels = ['Maiduguri', 'Askira/Uba', 'Abadam', 'Ngala', 'Bayo', 'Gubio', 'Kala/Balge', 'Biu', 'Guzamala', 'Mafa', 'Chibok', 'Kaga', 'Konduga', 'Damboa', 'Kukawa', 'Bama', 'Gwoza', 'Magumeri', 'Jere', 'Hawul', 'Marte', 'Dikwa', 'Kwaya Kusar', 'Mobbar', 'Shani', 'Monguno', 'Nganzai'];
  const series = [
    [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66],
    [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66].map(number => number-10)
  ]

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          {/* <h3>N{value}</h3> */}
        </div>
        {/* <div className="d-block ms-auto">
          {data.map(d => (
            <div key={`bar-element-${d.id}`} className="d-flex align-items-center text-end text-nowrap mb-2">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal">{d.label}</small>
            </div>
          ))}
        </div> */}
      </Card.Body>
      <Card.Body className="p-2">
        <LineChart labels={labels} series={series}/>
      </Card.Body>
    </Card>
  );
};

export const ProjectWidget = (props) => {
  const { title, value } = props;
  return (
    <Card className="shadow-sm">
      {/* //bg-secondary-alt */}
      <Card.Header className="d-flex flex-row align-items-center flex-0">
        <div className="d-block">
          <h5 className="fw-normal mb-2">
            {title}
          </h5>
          <h3>{value} Projects across 27 LGAs</h3>
        </div>
        <div className="d-flex ms-auto">
          <Button variant="secondary" size="sm" className="me-2">Month</Button>
          <Button variant="primary" size="sm" className="me-3">Quarter</Button>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <ProjectChart />
      </Card.Body>
    </Card>
  );
};



export function MapWidget(){
  const defaultProps = {
    center: {
      lat: 11.802926900993862,
      lng: 13.171610913316805
    },
    zoom: 12
  };
  const [center, setCenter] = React.useState({lat: 11.802926900993862, lng: 13.171610913316805})
  const [zoom, setZoom] = React.useState(11)

  const handleChange = ({center, zoom }) => {
    setCenter(center);
    setZoom(zoom)
  }
  
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={center}
        onChange={handleChange}>
          {coordinates.map(coordinate => (
            <Marker key={coordinate.lat} lat={coordinate.lat} lng={coordinate.lng} place={coordinate.place}/>
          ))}
      </GoogleMapReact>
    </div>
  );
}