import React, { useEffect } from 'react';
declare let L: any;
import 'leaflet';
import 'leaflet-routing-machine';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from 'react-leaflet';

import "./mapRouting.css"

const MapRouting = () => {
    const map = useMap()
    useEffect(() => {
        L.Routing.control({
            waypoints: [
                L.latLng(40.9, 40.93),
                L.latLng(39.69, 40.93),
            ],
            routeWhileDragging: true,
            geocoder: L.Control.Geocoder.nominatim(),
        }).addTo(map);
    }, [])
    return null
}

export default MapRouting