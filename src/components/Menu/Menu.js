import React from "react";
import "../Menu/Menu.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import market from "../../assets/imgs/icons/exit.svg";
import profile from "../../assets/imgs/icons/profile.svg";
import card from "../../assets/imgs/icons/cart.svg";
import groupChat from "../../assets/imgs/icons/group-chat.svg";
import Vacant from "../../assets/imgs/icons/vacantLand.svg";
import userImg from "../../assets/imgs/user.jpeg";
import search from "../../assets/imgs/search.png";
import location from "../../assets/imgs/location.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Menu() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const { t } = useTranslation();

  let history = useHistory();
  return (
    <div className="scrollTamplate">
      <div className="scrollTamplate">
        <div className="scrollTamplate">
          <div className="menu">
            <div className="menu-inner">
              <div className="menuHead">
                <div className="menuUser">
                  <span className="menuUser-img">
                    <img src={userImg} className="img-fluid" />
                  </span>
                  <div className="menuUser-title">{t("jhonnyRose")}</div>
                </div>
                <div className="menuHead-btn" onClick={() => history.push("/")}>
                  <CloseIcon />
                </div>
              </div>

              <ul className="menuList">
                <li>
                  <img src={profile} className="menuList-img" />
                  <Link
                    to="/registerBusiness"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {t("registerBusiness")}
                  </Link>
                </li>
                <li>
                  <img src={profile} className="menuList-img" />
                  <Link
                    to="/userProfile"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {t("managementDashboard")}
                  </Link>
                </li>
                <li>
                  <img src={search} className="menuList-img" />
                  <Link
                    to="/agent"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {t("searchForAgent")}
                  </Link>
                </li>
                <li>
                  <img src={location} className="menuList-img" />
                  {t("propertiesAroundMe")}
                </li>
                <li>
                  <StorefrontIcon className="menuList-img" />
                  {t("marketplace")}
                </li>
                <li>
                  <img src={groupChat} className="menuList-img" />
                  {t("groupChats")}
                </li>
                <li>
                  <img src={Vacant} className="menuList-img" />
                  {t("referralProgram")}
                </li>
                <li>
                  <img src={profile} className="menuList-img" />
                  {t("inviteFriends")}
                </li>
                <li>
                  <img src={groupChat} className="menuList-img" />
                  {t("orders")}
                </li>
                <li>
                  <img src={card} className="menuList-img" />
                  {t("card")}
                </li>
              </ul>
            </div>
            <div className="menuFooter">
              <button
                className="btn-gray"
                onClick={() => {
                  history.push("/settings");
                }}
              >
                {t("myProfile")}
              </button>
              <button className="btn-blue">{t("chatWithOurBot")}</button>
              <div className="menufooterBtns">
                <a className="menufooterLink">
                  <LogoutIcon /> {t("logOut")}{" "}
                </a>
                <a className="menufooterLink">
                  <SettingsIcon /> {t("settings")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
