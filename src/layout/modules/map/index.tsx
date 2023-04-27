import React, { FC, useEffect, useRef, useState } from "react";
import { Layout } from "antd";
import "./gisLayout.css";
import {
  MapContainer,
  Polygon,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";
import {
  LatLng,
  LatLngExpression,
  LayerGroup,
  LeafletMouseEvent,
  map,
  polyline,
  Popup,
} from "leaflet";
import { PlusOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { useMap } from "react-leaflet";
//Types
import { Coords, SetCoords } from "../../../types/types";
import { useLeafletContext } from "@react-leaflet/core";

//FUNCTIONAL COMPONENT
const GisLayout: FC = () => {
  // STATES
  const [allCoord, setAllCoord] = useState<
    LatLngExpression[] | LatLngExpression[][]
  >([]);
  const [coords, setCoords]: [Coords, SetCoords] = useState({
    lat: 100.0,
    lon: 100.0,
  });
  const [position, setPosition] = useState<LatLng | null>(null);
  //const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  // MAP CONTAINER STYLES
  const { Sider, Content } = Layout;

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#F5F5F5",
    borderRight: "1px solid",
  };
  const purpleOptions = { color: "purple" };

  // CENTER POSITION
  const center: LatLngExpression | undefined = [
    37.713077510594715, 31.566810143650837,
  ];
  const polygon: LatLngExpression[] | LatLngExpression[][] = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ];

  function LocationMarker(): JSX.Element | null {
    useMapEvents({
      mousemove: (e: LeafletMouseEvent) => {
        setPosition(e.latlng);
      },
    });
    console.log(position);
    return position === null ? null : (
      <div className="return-div">{position.lat}</div>
    );
  }
  console.log(console.log(import.meta.env.VITE_MAPBOX_KEY));

  return (
    <Layout>
      <Sider style={siderStyle}></Sider>
      <Layout>
        <div className="layout-header">
          <div className="layout-header-coordinates ">
            <h6>X: {position?.lng.toFixed(6)}°</h6>
            <h6>Y: {position?.lat.toFixed(6)}°</h6>
          </div>
        </div>
        <Content>
          <div id="map" className="gis-layout-content">
            <MapContainer
              className="map-container"
              center={center}
              zoom={5}
              scrollWheelZoom={false}
            >
              <LocationMarker />
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Polygon pathOptions={purpleOptions} positions={polygon} />
            </MapContainer>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default GisLayout;
