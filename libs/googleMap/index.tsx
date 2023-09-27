import React from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material";
export default function Map() {
  const theme = useTheme();
  const defaultProps = {
    center: {
      lat: 35.7219,
      lng: 51.3347,
    },
    zoom: 12,
  };
  const markers = [
    { id: 1, lat: 35.7219, lng: 51.3347 }, // Marker 1 coordinates
    { id: 2, lat: 34.0522, lng: -118.2437 }, // Marker 2 coordinates
    { id: 3, lat: 32.7157, lng: -117.1611 }, // Marker 3 coordinates
  ];
  const Marker = ({ text }) => (
    <div style={{ color: theme.palette.error.main }}>
      <LocationOnIcon />
    </div>
  );
  const renderMarkers = () => {
    return markers.map((marker) => (
      <Marker key={marker.id} lat={marker.lat} lng={marker.lng} text="Marker" />
    ));
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%", borderRadius: "12px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={defaultProps.zoom}
      >
        {renderMarkers()}
      </GoogleMapReact>
    </div>
  );
}
