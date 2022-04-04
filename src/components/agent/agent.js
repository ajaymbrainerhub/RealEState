import React, { useState } from "react";
import SellIcon from "@mui/icons-material/Sell";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import img from "../../assets/imgs/user.jpeg";
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
import "./agent.css";
import { useTranslation } from "react-i18next";

function Agent() {
  const [isAttachment, setAttachment] = useState(false);
  const { t } = useTranslation();

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

  return (
    <div className="scrollTamplate">
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
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <img src={img} alt="myimg" className="imgg" />
              </StyledBadge>
            </div>
            <div className="agentProfileBox-heading">
              <h1 className="agentProfileBox-title">{t("robbieDahle")}</h1>
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
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <img src={img} alt="myimg" className="imgg" />
              </StyledBadge>
            </div>
            <div className="agentProfileBox-heading">
              <h1 className="agentProfileBox-title">{t("robbieDahle")}</h1>
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
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <img src={img} alt="myimg" className="imgg" />
              </StyledBadge>
            </div>
            <div className="agentProfileBox-heading">
              <h1 className="agentProfileBox-title">{t("robbieDahle")}</h1>
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
          <button className="reciveBlockBtn">{t("showYourMoreAgents?")}</button>
        </div>
        <div className="sendBlock">
          <div className="sendBlockOptions">
            <button className="sendBlockOptionsBts">{t("yes")}</button>
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
                  <h6 className="addMediaModule-itemName">{t("camera")}</h6>
                </li>
                <li className="addMediaModule-item">
                  <span className="addMediaModule-itemIcon">
                    <PhotoOutlinedIcon />
                  </span>
                  <h6 className="addMediaModule-itemName">{t("photos")}</h6>
                </li>
                <li className="addMediaModule-item">
                  <span className="addMediaModule-itemIcon">
                    <VideocamOutlinedIcon />
                  </span>
                  <h6 className="addMediaModule-itemName">{t("videos")}</h6>
                </li>
                <li className="addMediaModule-item">
                  <span className="addMediaModule-itemIcon">
                    <ArticleOutlinedIcon />
                  </span>
                  <h6 className="addMediaModule-itemName">{t("files")}</h6>
                </li>
                <li className="addMediaModule-item">
                  <span className="addMediaModule-itemIcon">
                    <LocationOnOutlinedIcon />
                  </span>
                  <h6 className="addMediaModule-itemName">{t("location")}</h6>
                </li>
                <li className="addMediaModule-item">
                  <span className="addMediaModule-itemIcon">
                    <ContactPageOutlinedIcon />
                  </span>
                  <h6 className="addMediaModule-itemName">{t("contacts")}</h6>
                </li>
                <li className="addMediaModule-item">
                  <span className="addMediaModule-itemIcon">
                    <KeyboardVoiceIcon />
                  </span>
                  <h6 className="addMediaModule-itemName">{t("message")}</h6>
                </li>
                <li className="addMediaModule-item">
                  <span className="addMediaModule-itemIcon">
                    <MoreHorizOutlinedIcon />
                  </span>
                  <h6 className="addMediaModule-itemName">{t("more")}</h6>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default Agent;
