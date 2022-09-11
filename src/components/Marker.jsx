import React from 'react'
import { FaMapPin } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function Marker(props) {
    const { place="Point 1", lat=11, lng=13} = props
    const [tooltip, setToggleTooltip] = React.useState(false)
    //TODO: Create a toggle method to displaytooltip over pin
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            <div className='text-white font-bold fs-1 position-absolute bottom-0 left-0' style={{zIndex: "auto"}}>
                <p>{place}</p>
                <p>Latitude: {lat}</p>
                <p>Longitude: {lng}</p>
            </div>
        </Tooltip>
      );
    return (
        <>
            {tooltip&& <div className='text-black font-bold fs-1 bg-white w-100'>
                <p className='my-0 py-0'>{place}</p>
                <p className='my-0 py-0'>Latitude: {lat}</p>
                <p className='my-0 py-0'>Longitude: {lng}</p>
            </div>}
            <FaMapPin size={30} className="" onMouseOver={()=>setToggleTooltip(true)} onMouseOut={()=>setToggleTooltip(false)}/>
        </>
        // <OverlayTrigger
        // placement="right"
        // delay={{ show: 250, hide: 400 }}
        // overlay={renderTooltip}>
        // </OverlayTrigger>
    )
}

export default Marker