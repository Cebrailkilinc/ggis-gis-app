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

  const center = Cartesian3.fromDegrees(36, 37, 0);
  const positions = [
    new Cartesian3(-36, 36, 36),
    new Cartesian3(-36, -36, 9500),
    new Cartesian3(36, -36, 5000),
    new Cartesian3(36, 37, 5500),
    new Cartesian3(-37, 37, 6000),
    new Cartesian3(-37, -37, 6500),
    new Cartesian3(37, -37, 7000),
    new Cartesian3(37, 37, 7500),
    new Cartesian3(-37, 37, 37),
    new Cartesian3(-37, -37, 8500),
    new Cartesian3(37, -37, 9000),
    new Cartesian3(37, 37, 9500),
    new Cartesian3(-37, 37, 10000),
  ];

  const bluePlane = {
    plane: new Plane(Cartesian3.UNIT_X, 0.0),
    dimensions: new Cartesian2(20000.0, 20000.0),
    material: Color.BLUE,
  }

  const redPlane = {
    plane: new Plane(Cartesian3.UNIT_Y, 0.0),
    dimensions: new Cartesian2(4000.0, 4000.0),
    material: Color.RED.withAlpha(0.5),
    outline: true,
    outlineColor: Color.BLACK,
  }

  const outlineplane = {
    plane: new Plane(Cartesian3.UNIT_Z, 500.0),
    dimensions: new Cartesian2(20000.0, 20000.0),
    fill: false,
    outline: true,
    outlineColor: Color.YELLOW,
  }

  const terrain = createWorldTerrain();

  return (
    <div>
      <Viewer full terrainProvider={terrain}>

        <PolylineCollection >
          <Polyline width={2} positions={positions} />
        </PolylineCollection>

        <Entity name="Blue plane" position={center} plane={bluePlane} />

        <Entity onClick={()=>window.alert("dsfsahdlkjsd")} name="Red plane with black outline" position={center} plane={redPlane} />

        <Entity name="Yellow plane outline" position={center} plane={outlineplane} />

        <CameraFlyTo duration={8}
          destination={Cartesian3.fromDegrees(99.64, 24.89, 20000)}
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
