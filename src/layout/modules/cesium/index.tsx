import React from 'react'
import { Entity, Viewer, GeoJsonDataSource, KmlDataSource, PointGraphics, Cesium3DTileset, ImageryLayer, CameraFlyTo, PolylineCollection, Polyline } from "resium";
import {
  createWorldTerrain,
  Ion,
  Cartesian3,
  IonResource,
  ArcGisMapServerImageryProvider,
  Cartesian2,
  Color,
  Plane,
  EasingFunction,
  Transforms,
} from 'cesium';


const CesiumLayout = () => {

  const accsessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZTE4ZDA4Ny1lZDE5LTQ2ZDUtYWJiZS01ZjMxM2IwNWU4MWUiLCJpZCI6MTMyNTQzLCJpYXQiOjE2ODA4MzMwMTl9.5oIRZMU81f8S9WGbB3FwZpOP3rqvcZspHy6g_rhDtos";
  Ion.defaultAccessToken = accsessToken;
  const center = Cartesian3.fromDegrees(37.75, 38.25, 0);

  const positions = [
    new Cartesian3(-8000, 8000, 4000),
    new Cartesian3(-8000, -8000, 4500),
    new Cartesian3(8000, -8000, 5000),
    new Cartesian3(8000, 8000, 5500),
    new Cartesian3(-8000, 8000, 6000),
    new Cartesian3(-8000, -8000, 6500),
    new Cartesian3(8000, -8000, 7000),
    new Cartesian3(8000, 8000, 7500),
    new Cartesian3(-8000, 8000, 8000),
    new Cartesian3(-8000, -8000, 8500),
    new Cartesian3(8000, -8000, 9000),
    new Cartesian3(8000, 8000, 9500),
    new Cartesian3(-8000, 8000, 10000),
  ];

  const bluePlane = {
    plane: new Plane(Cartesian3.UNIT_X, 10.0),
    dimensions: new Cartesian2(20000.0, 20000.0),
    material: Color.BLUE,
  }

  const redPlane = {
    plane: new Plane(Cartesian3.UNIT_Y, 20.0),
    dimensions: new Cartesian2(20000.0, 20000.0),
    material: Color.RED.withAlpha(0.5),
    outline: true,
    outlineColor: Color.BLACK,
  }

  const outlineplane = {
    plane: new Plane(Cartesian3.UNIT_Z, 500.0),
    dimensions: new Cartesian2(20000.0, 20000.0),  // En, Boy
    fill: false,
    outline: true,
    outlineColor: Color.YELLOW,
  }

  console.log(redPlane.plane);

  const terrain = createWorldTerrain();

  return (
    <div>
      <Viewer full terrainProvider={terrain}>

        <PolylineCollection >
          <Polyline width={2} positions={positions} />
        </PolylineCollection>

        <Entity name="Blue plane" position={center} plane={bluePlane} />
        <Entity onClick={() => window.alert("dsfsahdlkjsd")} name="Red plane with black outline" position={center} plane={redPlane} />
        <Entity name="Yellow plane outline" position={center} plane={outlineplane} />
        <Entity         
          position={Cartesian3.fromDegrees(37.95, 38.45, 100)}
          box={{
            dimensions: new Cartesian3(4000.0, 3000.0, 5000.0),
            material: Color.RED.withAlpha(0.5),            
          }}
        />

        <CameraFlyTo duration={8}
          destination={Cartesian3.fromDegrees(36, 37, 20000)}
          orientation={{
            heading: -4.98,
            pitch: -0.32003481981370063,
          }}
          easingFunction={EasingFunction.QUADRATIC_IN_OUT} />
      </Viewer>
    </div >
  )
}

export default CesiumLayout
