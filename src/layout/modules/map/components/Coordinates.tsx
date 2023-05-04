import React from 'react'

const Coordinates = () => {
    return (
        <div className="layout-header-coordinates ">
            <div className="layout-header-coordinates-wgs84 ">
                <h5>Enlem: °</h5>
                <h5>Boylam:°</h5>
            </div>
            <div className="layout-header-coordinates-itrf ">
                <h5>X:   m</h5>
                <h5>Y:   m</h5>
            </div>
            <div className="layout-header-coordinates-itrf96 ">
            </div>
        </div>
    )
}

export default Coordinates