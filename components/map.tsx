
import L from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = ({currentIP}:any) => {
    var myIcon = L.icon({
        iconUrl: 'marker-icon.png',
        iconSize: [50, 90],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: 'marker-shadow.png',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });
    
    return(
        <MapContainer center={[currentIP.latitude, currentIP.longitude]} zoom={13} scrollWheelZoom={false} className="h-full w-full">
            <Marker 
                position={[currentIP.latitude, currentIP.longitude]}
                draggable={true}
                icon={myIcon}
                >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Popup>{currentIP.city}</Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map