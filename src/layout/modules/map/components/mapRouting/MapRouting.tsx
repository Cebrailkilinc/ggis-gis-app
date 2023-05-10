import React, { useEffect } from 'react';
declare let L: any;
import 'leaflet';
import 'leaflet-routing-machine';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from 'react-leaflet';
import "./mapRouting.css"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { RoutingMachine } from "react-leaflet-routing-machine"
    ;
const MapRouting = () => {
    const map = useMap()
    useEffect(() => {
        map.on("click", function (e) {
            L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
            console.log(e.latlng.lat)
            L.Routing.control({
                waypoints: [
                    L.latLng(37.9, 38.93),
                    L.latLng(e.latlng.lat, e.latlng.lng),
                ],
                routeWhileDragging: true,
                geocoder: L.Control.Geocoder.nominatim(),
            }).addTo(map)
        })
    }, [])
    return (null)
}

export default MapRouting