import React, { useEffect, useState } from "react";

//dependencies
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import { ReactComponent as LocationMap } from "../../assets/icons/locationMap.svg";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import StoreIcon from "@mui/icons-material/Store";
import ShopIcon from "@mui/icons-material/Shop";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import GoogleMapReact from "google-map-react";
//icon
import { ReactComponent as Grid } from "../../assets/icons/grid.svg";
import { ReactComponent as List } from "../../assets/icons/list.svg";

//images
import skrt from "../../assets/shop/skrt.jpg";
import Saree2 from "../../assets/shop/saree2.jpg";
import jns from "../../assets/shop/jns.jpg";
import shop from "../../assets/shop/shop.jpg";
import mall1 from "../../assets/shop/mall1.jpg";
import brownhorse2 from "../../assets/shop/brownhorse2.jpg";

//css
import "./map.css";
//component
import { googleMapsApiKey } from "../../config.json";
import Header from "../header/Header";
import Dashboard from "../pages/shop/dashboard/Dashboard";
import Marker from "./Marker";


// import { InfoWindow } from "@react-google-maps/api";

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

const mapAllData = [
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
    type: "product",
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
    type: "product",
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
    type: "product",
    cupon: "40%",
  },
  {
    id: 4,
    position: {
      lng: 34.8300081,
      lat: 31.2500163,
    },
    image: shop,
    price: "200$",
    name: "My Shop",
    location: "israel company",
    distance: "100 miter",
    type: "shop",
    cupon: "40%",
  },
  {
    id: 5,
    position: {
      lng: 34.77001176,
      lat: 32.07999147,
    },
    image: mall1,
    price: "200$",
    name: "Mega Mall",
    location: "israel company",
    distance: "400 miter",
    type: "mall",
  },
  {
    id: 6,
    position: {
      lng: 35.217018,
      lat: 31.771959,
    },
    image: brownhorse2,
    price: "200$",
    name: "Mega Mall",
    location: "israel company",
    distance: "400 miter",
    type: "company",
  },
];

const defaultCenter = {
  lng: 34.8909185,
  lat: 31.7040256,
};

function Maps() {
  const [center, setCenter] = useState(defaultCenter);
  const OpenSidebar = () => setClick(!click);
  const [click, setClick] = useState(false);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [selectedMap, setSelectedMap] = useState({});
  const [activeMarker, setActiveMarker] = useState();
  const [open, setOpen] = useState(false);

  const [filterMap, setFilterMap] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(mapAllData);
    setFilterMap(mapAllData);
  }, []);

  const handleClickOpen = (p) => {
    if (showingInfoWindow) setShowingInfoWindow(false);
    else setShowingInfoWindow(true);
    setSelectedMap(p);
    setOpen(true);
    setActiveMarker(null);
  };

  const handleChange = (newValue) => {
    if (newValue === "mall") {
      let artFilter = category.filter((item) => item.type === newValue);
      setFilterMap(artFilter);
    } else if (newValue === "shop") {
      let artFilter = category.filter((item) => item.type === newValue);
      setFilterMap(artFilter);
    } else if (newValue === "product") {
      let artFilter = category.filter((item) => item.type === newValue);
      setFilterMap(artFilter);
    } else {
      setFilterMap(category);
    }
  };

  return (
    <>
    <div className='scrollTamplate'>
      <Header />
      <div className={click ? "sidebarTamplate activeTabs" : "sidebarTamplate"}>
        <div className="sidebarModule">
          <Dashboard />
        </div>
        <div className="mobilePageTabs">
          <a onClick={OpenSidebar} className="MapTab">
            <SellOutlinedIcon /> Map View
          </a>
          <a onClick={OpenSidebar} className="ListTab">
            <SellOutlinedIcon /> List View
          </a>
          <a>
            <SellOutlinedIcon /> Save Search
          </a>
        </div>
        <div className="rightModule">
          <div className="mapFilter">
            <ToggleButtonGroup
              aria-label="text alignment"
              className="mapFilterGroup"
            >
              <ToggleButton
                aria-label="left aligned"
                onClick={() => handleChange("all")}
              >
                Whats Nearby :
                <Tooltip title="All">
                  <FilterListIcon />
                </Tooltip>
              </ToggleButton>

              <ToggleButton
                aria-label="left aligned"
                onClick={() => handleChange("product")}
              >
                <Tooltip title="Product">
                  <CorporateFareIcon />
                </Tooltip>
              </ToggleButton>

              <ToggleButton
                aria-label="centered"
                onClick={() => handleChange("shop")}
              >
                <Tooltip title="Shop">
                  <ShopIcon />
                </Tooltip>
              </ToggleButton>
              <ToggleButton
                aria-label="justified"
                onClick={() => handleChange("mall")}
              >
                <Tooltip title="Mall">
                  <StoreIcon />
                </Tooltip>
              </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup
              aria-label="text alignment"
              className="mapFilterGroup"
            >
              <ToggleButton value="left" aria-label="left aligned">
                <Grid />
                Grid
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered">
                <List />
                List
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned">
                <LocationMap />
                Map          
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="mainMap">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: googleMapsApiKey,
              }}
              defaultCenter={center}
              defaultZoom={12}
              options={getMapOptions}
            >
              {/* {console.log("filterMap", filterMap)} */}
              {filterMap.length > 0 &&
                filterMap.map((item) => {
                  return (
                    <Marker
                      // onClick={handleOpen}
                      openInfoWindow={() => handleClickOpen(item)}
                      lng={item.position.lng}
                      lat={item.position.lat}
                      image={item.image}
                      data={item}
                      selectedMap={selectedMap}
                      show={showingInfoWindow}
                    ></Marker>
                  );
                })}
            </GoogleMapReact>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Maps;
