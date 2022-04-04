import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./map.css";
import { useDispatch, useSelector } from "react-redux";
import { googleMapsApiKey } from "../../config.json";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { styled } from "@mui/material/styles";
import { ReactComponent as LocationMap } from "../../assets/imgs/locationMap.svg";
import { ReactComponent as Grid } from "../../assets/imgs/grid.svg";
import { ReactComponent as List } from "../../assets/imgs/list.svg";
import { ReactComponent as Bath } from "../../assets/imgs/bath.svg";
import { ReactComponent as Bed } from "../../assets/imgs/bed.svg";
import { ReactComponent as Location } from "../../assets/imgs/location.svg";
import { getMapData } from "../../store/actions/mapActions";

import Shop from "../../assets/imgs/icons/Shop.png";
import Rent from "../../assets/imgs/icons/Rent.png";
import Buy from "../../assets/imgs/icons/Buy.png";
import AR from "../../assets/imgs/icons/AR.png";

import { useTranslation } from "react-i18next";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const defaultCenter = {
  lng: 34.8909185,
  lat: 31.7040256,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  });

  const [open, setOpen] = React.useState(false);
  const [center, setCenter] = useState(defaultCenter);
  const products = useSelector((state) => state.productReducer.products);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState();
  const [selectedMap, setSelectedMap] = useState({});
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      setCenter({ lat, lng });
    });
  }, []);

  const handleClickOpen = (p) => {
    console.log("data", p);
    setSelectedMap(p);
    setOpen(true);
    setShowingInfoWindow(true);
    setActiveMarker(null);
    dispatch(getMapData(p));
  };

  const handleClose = () => {
    setOpen(false);
    setShowingInfoWindow(false);
  };

  const Input = styled("input")({
    display: "none",
  });

  return isLoaded ? (
    <>
      <div className="mapFilter">
        <ToggleButtonGroup
          aria-label="text alignment"
          className="mapFilterGroup"
        >
          <ToggleButton value="left" aria-label="left aligned">
          {t("whatsNearby")} :
            <img src={Shop} alt="" />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <img src={Buy} alt="" />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <img src={Rent} alt="" />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified">
            <img src={AR} alt="" />
          </ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
          aria-label="text alignment"
          className="mapFilterGroup"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <Grid />
            {t("grid")}
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <List />
            {t("list")}
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <LocationMap />
            {t("map")}
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className="mainMap">
        {console.log("products", products)}
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {products.map((p) => {
            return (
              <>
                <Marker
                  position={p.position}
                  key={p.id}
                  onClick={() => handleClickOpen(p)}
                >
                  {showingInfoWindow && selectedMap.id === p.id ? (
                    <InfoWindow
                      position={p.position}
                      marker={activeMarker}
                      onCloseClick={() => setShowingInfoWindow(false)}
                    >
                      <div className="product-preview col product-preview--map">
                        <div className="product-preview-status">
                          <Chip label="Project Tag" />
                          <Input id="icon-button-file" type="button" />
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                            className="likeBtn"
                          >
                            <FavoriteBorderOutlinedIcon />
                          </IconButton>
                        </div>
                        <img
                          className="img"
                          src={require(`../../assets/imgs/houses/${p.Image}`)}
                          alt=""
                        />
                        <div className="productDetails">
                          <div className="productDetailsHead flex">
                            <div className="price">{p.price}$</div>
                            <div className="iconitems">
                              <div className="iconlist">
                                <Bath />
                                <span>{p.bathroom}</span>
                              </div>
                              <div className="iconlist">
                                <Bed />
                                <span>{p.bedrooms}</span>
                              </div>
                            </div>
                          </div>
                          <div className="productTitle">{p.name}</div>
                          <div className="location">
                            <Location />
                            <span>{p.location}</span>
                          </div>
                          <div className="footer flex">
                            <div className="distance">{p.distance}{t("meater")}</div>
                            <div className="type">{p.type}</div>
                          </div>
                        </div>
                      </div>
                    </InfoWindow>
                  ) : (
                    ""
                  )}
                </Marker>
              </>
            );
          })}
        </GoogleMap>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Map;
