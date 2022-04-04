import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import suit from "../../assets/images/suit.jpg";
import ts from "../../assets/images/ts.jpg";
import skrt from "../../assets/images/skrt.jpg";
import Saree2 from "../../assets/images/saree2.jpg";
import jns from "../../assets/images/jns.jpg";
import { googleMapsApiKey } from "../../config.json";
import Header from "../header/Header";

const TestMap = () => {
  const getMapOptions = () => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };
  };

  const [center, setCenter] = useState({ lng: 34.8909185, lat: 31.7040256 });
  const [zoom, setZoom] = useState(11);
  const companies = [
    {
      id: 1,
      position: {
        lng: 34.8909185,
        lat: 31.7040256,
      },
      image: Saree2,
      price: "200$",
      name: "Fox Home1",
      location: "israel company",
      distance: "1500 miter",
      type: "shop",
      cupon: "40%",
    },
    {
      id: 2,
      position: {
        lng: 34.870766,
        lat: 32.184448,
      },
      image: jns,
      price: "200$",
      name: "Fox Home2",
      location: "israel company",
      distance: "1500 miter",
      type: "shop",
      cupon: "40%",
    },
    {
      id: 3,
      position: {
        lng: 35.290146,
        lat: 32.919945,
      },
      image: skrt,
      price: "200$",
      name: "Fox Home3",
      location: "israel company",
      distance: "1500 miter",
      type: "shop",
      cupon: "40%",
    },
    {
      id: 4,
      position: {
        lng: 34.843311,
        lat: 32.166313,
      },
      image: ts,
      price: "200$",
      name: "Fox Home4",
      location: "israel company",
      distance: "1500 miter",
      type: "shop",
      cupon: "40%",
    },
    {
      id: 5,
      position: {
        lng: 34.809322,
        lat: 31.894756,
      },
      image: suit,
      price: "200$",
      name: "Fox Home5",
      location: "israel company",
      distance: "1500 miter",
      type: "shop",
      cupon: "40%",
    },
  ];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: googleMapsApiKey,
        }}
        defaultCenter={center}
        defaultZoom={12}
        options={getMapOptions}
      >
        {companies.map((item) => {
          return (
            <Marker
              lng={item.position.lng}
              lat={item.position.lat}
              name="My Marker"
              color="blue"
              image={item.image}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default TestMap;
