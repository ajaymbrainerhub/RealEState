import React, { useState } from "react";
//css
import "../UserProfile//UserProfile.css";
//svg
import { ReactComponent as Arrow } from "../../assets/icons/arrow-right.svg";
//image
import "../Settings/Settings.css";
import userImg from "../../assets/imgs/user.jpeg";

//components
import Dashboard from "../pages/shop/dashboard/Dashboard";
import YourAccount from "../UserProfile/account/YourAccount";
import ReferralProgram from "../UserProfile/referralprogram/ReferralProgram";
import Payments from "../UserProfile/payment/Payments";
import Chatting from "../UserProfile/chat/Chatting";
import Documents from "../UserProfile/document/Documents";
import Filemanager from "../UserProfile/filemanage/Filemanager";
//dependencies
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { useTranslation } from "react-i18next";

function UserProfile() {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const [userPages, setUserPages] = useState("");
  const OpenSidebar = () => setClick(!click);

  const settings = [
    {
      name: t("yourAccount"),
      key: "youraccount",
      desc: t("accountSettings,ChangeNumber"),
    },
    {
      name: t("referralProgram/Bonuses"),
      key: "referralprogram",
      desc: t("referralProgram/Bonuses"),
    },
    {
      name: t("chatting"),
      key: "chatting",
      desc: t("theme,Wallpaper,ChatHistory"),
    },
    {
      name: t("payments"),
      key: "payment",
      desc: t("payments"),
    },
    {
      name: t("documnents"),
      key: "document",
      desc: t("documnents"),
    },
    {
      name: t("fileManager"),
      key: "fileManager",
      desc: t("privacyPolicyDetail"),
    },
  ];

  return (
    <>
      <div className="scrollTamplate">
        <div
          className={click ? "sidebarTamplate activeTabs" : "sidebarTamplate"}
        >
          <div className="sidebarModule">
            <div className="pageTamplate">
              <div className="container">
                <div className="settings">
                  <div className="userBlock">
                    <span className="userBlock-img">
                      <img src={userImg} alt="img" className="img-fluid" />
                    </span>
                    <div className="userBlock-Info">
                      <h2 className="userBlock-title">{t("mikilto")}</h2>
                      <h3 className="userBlock-subTitle">
                        {t("digitalProduct")}
                      </h3>
                      <p className="userBlock-subText">
                        {t("freelanceDesignerSpecializedInUI")}{" "}
                      </p>
                      <button className="btnEdit">{t("editProfile")}</button>
                    </div>
                  </div>

                  <ul className="settingsList">
                    {settings.map((sett) => {
                      return (
                        <li
                          className="settingsListItem"
                          key={sett.name}
                          onClick={() => {
                            OpenSidebar();
                            setUserPages(sett.key);
                            console.log(sett.key);
                          }}
                        >
                          <div className="settingsListItem-heading">
                            <span className="settingsListItem-icon">
                              <PersonIcon />
                            </span>

                            <div className="right-sett">
                              <h6 className="settingsListItem-title">
                                {sett.name}
                              </h6>
                              <p className="settingsListItem-subtitle">
                                {sett.desc}
                              </p>
                            </div>
                          </div>
                          <span className="settingsListItem-img">
                            <Arrow />
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="rightModule">
            <div className="container">
              <div className="d-block d-lg-none mb-2">
                <CloseOutlinedIcon onClick={() => setClick(false)} />
              </div>
              {userPages === "youraccount" ? (
                <YourAccount />
              ) : userPages === "referralprogram" ? (
                <ReferralProgram />
              ) : userPages === "payment" ? (
                <Payments />
              ) : userPages === "chatting" ? (
                <Chatting />
              ) : userPages === "document" ? (
                <Documents />
              ) : userPages === "fileManager" ? (
                <Filemanager />
              ) : (
                <Dashboard />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
