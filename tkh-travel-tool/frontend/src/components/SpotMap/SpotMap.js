import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { fakeData } from "../../fakeData/fakeData";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100wh",
  height: "100vh",
  borderRadius: "15px",
};

export default function SpotMap(props) {
  const id = props.id;
  // console.log(id);
  // let { id } = useParams();
  const destination = fakeData.find((pd) => pd.id.toString() === id.toString());
  console.log(destination.lat, destination.lng);

  const lat = destination.lat;
  const lng = destination.lng;
  
  const center = {
    lat: 29.976480,
    lng: 31.131302,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAqU1bJBpPmEgYPuE29AB_fmqFw28NeHmQ",
    libraries,
  });

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={center}
      ></GoogleMap>
    </div>
  );
}
