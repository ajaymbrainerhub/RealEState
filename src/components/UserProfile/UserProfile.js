// import React from "react";
// import "./UserProfile.css";
// import { ReactComponent as Price } from "../../assets/imgs/price.svg";
import userImg from "../../assets/imgs/user.jpeg";
// import { useTranslation } from "react-i18next";

// function UserProfile() {
//   const { t } = useTranslation();

//   return (
//     <div className="userProfile">
//       <div className="top ">
//         <div className="profile-left">
//           <Price className="mr-15" />
//           <span>{t("manageDashbord")}</span>
//         </div>
//         {/* <div className="profile-right">
//                     <span className='mr-15'>edit profile</span>
//                     <Price />
//                 </div> */}
//       </div>
//       <div className="userProfile-container">
//         <div className="userProfile-info">
//           <div className="userProfile-infoTop">
//             <div className="userProfile-infoHead">
//               <span className="userProfile-infoImage">
//                 <img src={userImg} alt="img" />
//               </span>
//               <div className="userProfile-infoText">
//                 <div className="userProfile-infoname">{t("mikiLto")}</div>
//                 <div className="userProfile-infojob">
//                   {t("digitalProductDesigner")}
//                 </div>
//               </div>
//             </div>
//             <button className="userProfile-infosettings">
//               {t("settings")}
//             </button>
//           </div>
//           <div className="userProfile-infoContent">
//             Freelancer designer specialized in UI and interaction design, born &
//             raised in Chaina
//           </div>
//         </div>
//         <div className="value box">
//           <div className="value-left">
//             <span>{t("notRevenue")}</span>
//             <span>$76,124,803</span>
//             <span>+27.38% ($5097)</span>
//           </div>
//           <Price />
//         </div>
//         <div className="box-list">
//           <div className="box center-col ">
//             <Price />
//             <div className="center-col-Title">{t("myBot")}</div>
//           </div>
//           <div className="box center-col ">
//             <Price />
//             <div className="center-col-Title">{t("myApp")}</div>
//           </div>
//           <div className="box center-col ">
//             <Price />
//             <div className="center-col-Title">{t("myCrm")}</div>
//           </div>
//           <div className="box center-col ">
//             <Price />
//             <div className="center-col-Title">{t("community")}</div>
//           </div>
//           <div className="box center-col ">
//             <Price />
//             <div className="center-col-Title">{t("refferralProgram")}</div>
//           </div>
//           <div className="box center-col ">
//             <Price />
//             <div className="center-col-Title">{t("sales")}</div>
//           </div>
//           <div className="box center-col ">
//             <Price />
//             <div className="center-col-Title">{t("stats")}</div>
//           </div>
//           <div className="box center-col ">
//             <Price />
//             <div className="center-col-Title">{t("marketingAutomation")}</div>
//           </div>
//         </div>

//         <div className="graphMainCard">
//           <div className="flex">
//             <div className="data">
//               <div className="data-circle circle-1"> +5%</div>
//               <div className="data-text"> {t("income")}</div>
//             </div>
//             <div className="data">
//               <div className="data-circle  circle-2"> +12%</div>
//               <div className="data-text"> {t("depositIncome")}</div>
//             </div>
//             <div className="data">
//               <div className="data-circle circle-3"> -10%</div>
//               <div className="data-text"> {t("expense")}</div>
//             </div>
//           </div>
//           <button className="graphMainCard-Btn">
//             {t("goToReferralProgram")}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;

import React, { useState } from "react";
//css
import "../UserProfile/UserProfile.css";
//svg
import { ReactComponent as Arrow } from "../../assets/icons/arrow-right.svg";
//image
import Logo from "../../assets/shop/logo.png";

//components
import Header from "../header/Header";
import Dashboard from "../pages/shop/dashboard/Dashboard";
import YourAccount from "./account/YourAccount";
import ReferralProgram from "./referralprogram/ReferralProgram";
import Payments from "./payment/Payments";
import Chatting from "./chat/Chatting";
import Documents from "./document/Documents";
import Filemanager from "./filemanage/Filemanager";
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
        <Header />
        <div
          className={click ? "sidebarTamplate activeTabs" : "sidebarTamplate"}
        >
          <div className="sidebarModule">
            <div className="pageTamplate">
              <div className="container">
                <div className="settings">
                  {/* <div className="userBlock">
                  <span className="userBlock-img">
                    <img src={Logo} alt="img" className="img-fluid" />
                  </span>
                  <div className="userBlock-Info">
                    <h2 className="userBlock-title">B24Chat</h2>
                    <h3 className="userBlock-subTitle">
                      {t("digitalProduct")}
                    </h3>
                    <p className="userBlock-subText">{t("freelance")} </p>
                    <button className="btnEdit">{t("editProfile")}</button>
                  </div>
                </div> */}

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
