import React, { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Layout, Tooltip } from "antd";
import "./gisLayout.css";
import { MapContainer, TileLayer, Marker, useMapEvents, Popup, GeoJSON } from "react-leaflet";
import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import L from "leaflet";


import { RiAddBoxLine } from "react-icons/ri";
import { AiFillCloseSquare } from "react-icons/ai";
import proj4 from "proj4";
import dataLand from "./land.json";
import MapRouting from "./components/mapRouting/MapRouting";
import SelectFile from "./components/selectLocalFile/SelectFile";
import axios from "axios";
import { GeoJsonObject, Polygon } from "geojson";
import { continents } from "./continents";
import { IGeoJSONPolygon } from "../../../types/types";


//FUNCTIONAL COMPONENT
const GisLayout: FC = () => {
  const [positionWGS84, setPositionWGS84] = useState<any>({ lat: 0, lng: 0 });
  const [positionTUREF96, setPositionTUREF96] = useState<any>([37.74918, 38.20248]);
  const [addPoints, setAddPoints] = useState<any>([]);
  const [addPointActive, setAddPointActive] = useState<boolean>(false);
  const [deletePointActive, setDeletePointActive] = useState<boolean>(false);
  const [baseMap, setBaseMap] = useState<boolean>(true);

  const [readShapfile, setReadShapfile] = useState<IGeoJSONPolygon >();

  const markerRef = useRef(null)


  // MAP CONTAINER STYLES
  const { Sider, Content } = Layout;

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#334454",
  };

  // CENTER POSITION
  const center: LatLngExpression | undefined = [38.25742, 37.75044];

  function LocationMarker(): JSX.Element | null {
    useMapEvents({
      mousemove: (e: LeafletMouseEvent) => {
        setPositionWGS84(e.latlng);
      },
    });
    return positionWGS84 === null ? null : (
      <div className="return-div">{positionWGS84.lat}</div>
    );
  }

  // Atılan noktaların iconu
  const customIcon = L.icon({
    iconUrl: "/plus.png",
    iconSize: [25, 25],
  });

  //Nokta ekleme  butonu - menü üzerindeki
  const handleAddPoints = (): void => {
    if (deletePointActive) {
      setDeletePointActive(false)
      setAddPointActive(!addPointActive);
    }
    setAddPointActive(!addPointActive);
  };

  // Nokta silme butonu - menü üzerindeki
  const handleDeletePointsButton = (): void => {
    if (addPointActive) {
      setAddPointActive(false)
      setDeletePointActive(!deletePointActive);
    }
    setDeletePointActive(!deletePointActive);
  };

  //Base map ekleme çıkarma 
  const handleBasemap = (e: any): void => {
    setBaseMap(!baseMap);
  };

  // Haritaya tıknalındıpında yapılması gereken tüm işlemler burda yapılmalı
  function handleMapClick(): void {
    // Nokta ekleme butpounu aktif olduğunda bu işlemi çalıştır.
    if (addPointActive) {
      const newPoint = {
        id: addPoints.length + 1,
        lat: positionWGS84?.lat,
        lng: positionWGS84?.lng,
      };
      return (setAddPoints([...addPoints, newPoint]));
    }
  }

  // Markerlara tıklanıldığında yapılması gerekn tüm işlemler burda yapılmalıdır.
  const handleMarkerClick = (id: number) => {
    // Silme butonu aktif ise silme işlemi yapacaktır.
    if (deletePointActive) {
      const addPointsFilters = addPoints.filter((marker: { id: any; }) => marker.id !== id);
      setAddPoints(addPointsFilters)
    }
  };

  // Parsel sorgudan gelen json datası bu şekilde eklenmekte.
  const polygon: LatLngExpression[] = []; // define as an array of LatLngExpression or arrays of LatLngExpression
  const data = dataLand.features[0].geometry.coordinates[0];
  data.map((item: number[]) => {
    polygon.push({ lat: item[1], lng: item[0] }); // type assertion on LatLngExpression object
  });

  const purpleOptions = {
    color: 'purple',
    fillColor: '#f03',
    fillOpacity: 0.1,
    weight: 2
  }

  useEffect(() => {
    const firstProjection = '+proj=longlat +datum=WGS84 +no_defs +type=crs';
    const secondProjection = "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs";
    //I'm not going to redefine those two in latter examples.
    const ITRF96 = proj4(firstProjection, secondProjection, [positionWGS84.lng, positionWGS84.lat]);
    // [-2690666.2977344505, 3662659.885459918]     
    setPositionTUREF96(ITRF96)
  }, [positionWGS84, positionWGS84.lat, positionWGS84.lng])

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/test");        
        setReadShapfile(response.data);
        console.log(response.data);
        // İstek tamamlandıktan sonra verileri kullanabilirsiniz.
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();    
  }, [])

  return (
    <Layout>
      <Sider style={siderStyle}>
        <div className="table-of-content" >
          <h1>Table Of Content</h1>
          <div className="base-map" >
            <input onChange={handleBasemap} checked={baseMap} type={"checkbox"} />
            <h3>Base Map</h3>
          </div>
          <SelectFile />
        </div>
      </Sider>
      <Layout>
        <div className="layout-header">
          <div className="layout-header-coordinates ">
            <div className="layout-header-coordinates-wgs84 ">
              <h5>Enlem: {positionWGS84?.lat.toFixed(4)}°</h5>
              <h5>Boylam: {positionWGS84?.lng.toFixed(4)}°</h5>
            </div>
            <div className="layout-header-coordinates-itrf96 ">
              <h5>X: {positionTUREF96[0].toFixed(4)}  m</h5>
              <h5>Y: {positionTUREF96[1].toFixed(4)}  m</h5>
            </div>
            <div className="layout-header-coordinates-itrf96 ">
            </div>
          </div>
          <div className="layout-header-tools">
            <div className="tools-add-point">
              <AiFillCloseSquare
                style={{ color: deletePointActive ? "#4096FF" : "white" }}
                className="add-point-icon"
                size={25}
                onClick={handleDeletePointsButton}
              />
              <h6>Nokta Sil</h6>
            </div>
            <div className="tools-add-point">
              <RiAddBoxLine
                style={{ color: addPointActive ? "#4096FF" : "white" }}
                className="add-point-icon"
                size={25}
                onClick={handleAddPoints}
              />
              <h6>Nokta At</h6>
            </div>
          </div>
        </div>
        <Content>
          <div id="map" onClick={handleMapClick} className="gis-layout-content">
            {/* <Geocoder /> */}
            <MapContainer
              className="map-container"
              center={center}
              zoom={5}
              scrollWheelZoom={true}
              style={{ backgroundColor: "white", cursor: addPointActive ? "pointer" : "move" }}
              ref={markerRef}
            >
              <LocationMarker />             
              <TileLayer
                url={baseMap ? `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}` : ""}
                attribution="Map data &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
                maxZoom={18}
                tileSize={512}
                zoomOffset={-1}
                accessToken="pk.eyJ1IjoiYWJkdWxsYWh1Z3VyIiwiYSI6ImNqcHRnaDgxbDA1dWo0NXF3NDIzenFtcGIifQ.64t6cmzJ79MTvJzQNjShMA"
              />

              {
                readShapfile && <GeoJSON data={readShapfile as GeoJsonObject} />
              }
              
              {addPoints.map(
                (point: any, index: React.Key | null | undefined) => (
                  <Marker
                    icon={customIcon}
                    key={index}
                    position={[point.lat, point.lng]}
                    eventHandlers={{ click: () => handleMarkerClick(point.id) }}
                  >
                    <Popup>
                      <div>Nokta no: {point.id}</div>
                    </Popup>
                  </Marker>
                )
              )}
            </MapContainer>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default GisLayout;
