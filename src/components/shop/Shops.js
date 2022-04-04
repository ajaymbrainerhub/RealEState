import React, { useEffect, useState } from "react";
//image
import img from "../../assets/shop/user.jpeg";

//dependencies
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SendIcon from "@mui/icons-material/Send";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
//css
import "../shop/shop.css";
//component
import Header from "../header/Header";

import { googleMapsApiKey } from "../../config.json";

//svg
import { ReactComponent as Cart } from "../../assets/icons/shopping-cart.svg";
import { ReactComponent as Food } from "../../assets/icons/food.svg";
import { ReactComponent as Hat } from "../../assets/icons/graduation-hat.svg";
import { ReactComponent as Briefcase } from "../../assets/icons/medicine-briefcase.svg";
import { ReactComponent as Grid } from "../../assets/icons/grid.svg";
import { ReactComponent as List } from "../../assets/icons/list.svg";
import { ReactComponent as LocationMap } from "../../assets/icons/locationMap.svg";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const defaultCenter = {
  lng: 34.8909185,
  lat: 31.7040256,
};

export default function Shops() {
  const [isAttachment, setAttachment] = useState(false);
  const { t } = useTranslation();
  const [center, setCenter] = useState(defaultCenter);
  const OpenSidebar = () => setClick(!click);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  });
  const [click, setClick] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      setCenter({ lat, lng });
    });
  }, []);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return isLoaded ? (
    <>
      <div className="scrollTamplate">
        <Header />
        <div
          className={click ? "sidebarTamplate activeTabs" : "sidebarTamplate"}
        >
          <div className="sidebarModule">
            <div className="pageTamplate">
              <div className="container">
                <div class="agentChatModule">
                  <div className="agentSearch">
                    {/* <img src={location} className="search-icon" alt=""/> */}
                    <input
                      type="text"
                      placeholder={t("hereFewNewAgentInYourArea")}
                      name="location"
                      // onChange={'handleChange'}
                      className="input-t"
                    />
                  </div>

                  <div className="agentProfile">
                    <div className="agentProfile-Info">
                      <div className="agentProfileBox-img">
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <img src={img} alt="myimg" className="imgg" />
                        </StyledBadge>
                      </div>
                      <div className="agentProfileBox-heading">
                        <h1 className="agentProfileBox-title">
                          {t("robbieDahle")}
                        </h1>
                        <h4 className="agentProfileBox-subTitle">
                          {t("orangeCounty,CA")}
                        </h4>
                      </div>
                    </div>
                    <div className="agentProfileBox-Btn">
                      <span>
                        <ChatOutlinedIcon />
                      </span>
                      <span>
                        <ArrowCircleRightRoundedIcon />
                      </span>
                    </div>
                  </div>
                  <div className="agentProfile">
                    <div className="agentProfile-Info">
                      <div className="agentProfileBox-img">
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <img src={img} alt="myimg" className="imgg" />
                        </StyledBadge>
                      </div>
                      <div className="agentProfileBox-heading">
                        <h1 className="agentProfileBox-title">
                          {t("robbieDahle")}
                        </h1>
                        <h4 className="agentProfileBox-subTitle">
                          {t("orangeCounty,CA")}
                        </h4>
                      </div>
                    </div>
                    <div className="agentProfileBox-Btn">
                      <span>
                        <ChatOutlinedIcon />
                      </span>
                      <span>
                        <ArrowCircleRightRoundedIcon />
                      </span>
                    </div>
                  </div>
                  <div className="agentProfile">
                    <div className="agentProfile-Info">
                      <div className="agentProfileBox-img">
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <img src={img} alt="myimg" className="imgg" />
                        </StyledBadge>
                      </div>
                      <div className="agentProfileBox-heading">
                        <h1 className="agentProfileBox-title">
                          {t("robbieDahle")}
                        </h1>
                        <h4 className="agentProfileBox-subTitle">
                          {t("orangeCounty,CA")}
                        </h4>
                      </div>
                    </div>
                    <div className="agentProfileBox-Btn">
                      <span>
                        <ChatOutlinedIcon />
                      </span>
                      <span>
                        <ArrowCircleRightRoundedIcon />
                      </span>
                    </div>
                  </div>

                  <div className="reciveBlock">
                    <button className="reciveBlockBtn">
                      {t("showYourMoreAgents?")}
                    </button>
                  </div>
                  <div className="sendBlock">
                    <div className="sendBlockOptions">
                      <button className="sendBlockOptionsBts">
                        {t("yes")}
                      </button>
                      <button className="sendBlockOptionsBts">{t("no")}</button>
                    </div>
                  </div>

                  <div className="agentChatFooter">
                    <div className="sugession-Ans">
                      <button className="sugession-AnsBtn">{t("yes")}</button>
                      <button className="sugession-AnsBtn">{t("no")}</button>
                      <button className="sugession-AnsBtn">
                        {t("showMeApartments")}
                      </button>
                    </div>
                    <div className="TypeingBlock">
                      <input
                        type="text"
                        placeholder={t("typeMassege")}
                        name="location"
                        // onChange={'handleChange'}
                        className="input-t"
                      />
                      <div className="TypeingBlockBtnBox">
                        <button className="TypeingBlockBtn">
                          <KeyboardVoiceIcon />
                        </button>
                        <button
                          className="TypeingBlockBtn"
                          onClick={() => {
                            if (isAttachment) setAttachment(false);
                            else setAttachment(true);
                          }}
                        >
                          <AddCircleIcon />
                        </button>
                        <button className="TypeingBlockBtn TypeingBlockBtn--solid">
                          <SendIcon />
                        </button>
                      </div>
                    </div>

                    {isAttachment ? (
                      <div className="addMediaModule">
                        <ul className="addMediaModule-List">
                          <li className="addMediaModule-item">
                            <span className="addMediaModule-itemIcon">
                              <CameraAltOutlinedIcon />
                            </span>
                            <h6 className="addMediaModule-itemName">
                              {t("camera")}
                            </h6>
                          </li>
                          <li className="addMediaModule-item">
                            <span className="addMediaModule-itemIcon">
                              <PhotoOutlinedIcon />
                            </span>
                            <h6 className="addMediaModule-itemName">
                              {t("photos")}
                            </h6>
                          </li>
                          <li className="addMediaModule-item">
                            <span className="addMediaModule-itemIcon">
                              <VideocamOutlinedIcon />
                            </span>
                            <h6 className="addMediaModule-itemName">
                              {t("videos")}
                            </h6>
                          </li>
                          <li className="addMediaModule-item">
                            <span className="addMediaModule-itemIcon">
                              <ArticleOutlinedIcon />
                            </span>
                            <h6 className="addMediaModule-itemName">
                              {t("files")}
                            </h6>
                          </li>
                          <li className="addMediaModule-item">
                            <span className="addMediaModule-itemIcon">
                              <LocationOnOutlinedIcon />
                            </span>
                            <h6 className="addMediaModule-itemName">
                              {t("location")}
                            </h6>
                          </li>
                          <li className="addMediaModule-item">
                            <span className="addMediaModule-itemIcon">
                              <ContactPageOutlinedIcon />
                            </span>
                            <h6 className="addMediaModule-itemName">
                              {t("contacts")}
                            </h6>
                          </li>
                          <li className="addMediaModule-item">
                            <span className="addMediaModule-itemIcon">
                              <KeyboardVoiceIcon />
                            </span>
                            <h6 className="addMediaModule-itemName">
                              {t("audio")}
                            </h6>
                          </li>
                          <li className="addMediaModule-item">
                            <span className="addMediaModule-itemIcon">
                              <MoreHorizOutlinedIcon />
                            </span>
                            <h6 className="addMediaModule-itemName">
                              {t("more")}
                            </h6>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
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
                <ToggleButton value="left" aria-label="left aligned">
                  Whats Nearby : <Cart />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  <Food />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  <Hat />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified">
                  <Briefcase />
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
              {/* {console.log("products", products)} */}
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
              >
                <Marker position={defaultCenter} />
              </GoogleMap>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
