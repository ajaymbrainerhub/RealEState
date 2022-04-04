import React, { useState } from "react";
//icons
import { ReactComponent as Price } from "../../assets/icons/price.svg";
//images
import Logo from "../../assets/shop/logo.png";


//dependencies
import { useTranslation } from "react-i18next";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
//components
import MyBot from "../mybot/MyBot";
import MyApp from "../myapp/MyApp";
import MyCrm from "../mycrm/MyCrm";
import Dashboard from "../pages/shop/dashboard/Dashboard";
import Header from "../header/Header";
import Community from "../community/Community";
import "../ManageDashboard/manageDashboard.css";
import RefferralProgram from "../refferralProgram/RefferralProgram";
import Sales from "../sales/Sales";
import Stats from "../stats/Stats";
import MarketingAutomation from "../marketingAutomation/MarketingAutomation";

export default function ManageDashboard() {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const OpenSidebar = () => setClick(!click);

  const [selectedItem, setSelectedItem] = useState("");

  const dashboardItem = [
    {
      name: t("myBot"),
      value: "mybot",
      icon: <Price />,
    },
    {
      name: t("myapp"),
      value: "myapp",
      icon: <Price />,
    },
    {
      name: t("mycrm"),
      value: "myCrm",
      icon: <Price />,
    },
    {
      name: t("community"),
      value: "community",
      icon: <Price />,
    },
    {
      name: t("referalProgram"),
      value: "refferralProgram",
      icon: <Price />,
    },
    {
      name: t("sales"),
      value: "sales",
      icon: <Price />,
    },
    {
      name: t("stats"),
      value: "stats",
      icon: <Price />,
    },

    {
      name: t("marketingAutomations"),
      value: "marketingAutomation",
      icon: <Price />,
    },
  ];
  return (
    <>
      <div className='scrollTamplate'>
        <Header />
        <div
          className={click ? "sidebarTamplate activeTabs" : "sidebarTamplate"}
        >
          <div className="sidebarModule">
            <div className="userProfile">
              <div className="container">
                <div className="top ">
                  <div className="profile-left">
                    <Price className="mr-15" />
                    <span>{t("manageDashbord")}</span>
                  </div>
                </div>
                <div className="userProfile-container">
                  <div className="userProfile-info">
                    <div className="userProfile-infoTop">
                      <div className="userProfile-infoHead">
                        <span className="userProfile-infoImage">
                          <img src={Logo} alt="img" />
                        </span>
                        <div className="userProfile-infoText">
                          <div className="userProfile-infoname">B24Chat</div>
                          <div className="userProfile-infojob">
                            {t("digitalProductDesigner")}
                          </div>
                        </div>
                      </div>
                      <button className="userProfile-infosettings">
                        {t("settings")}
                      </button>
                    </div>
                    <div className="userProfile-infoContent">
                      Freelancer designer specialized in UI and interaction
                      design, born & raised in Chaina
                    </div>
                  </div>
                  <div className="value box">
                    <div className="value-left">
                      <span>{t("notRevenue")}</span>
                      <span>$76,124,803</span>
                      <span>+27.38% ($5097)</span>
                    </div>
                    <Price />
                  </div>
                  <div className="box-list">
                    {dashboardItem.map((item) => {
                      return (
                        <div
                          className="box center-col "
                          onClick={() => {
                            OpenSidebar();
                            setSelectedItem(item.value);
                          }}
                        >
                          {item.icon}
                          <div className="center-col-Title">{item.name}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="graphMainCard">
                    <div className="flex">
                      <div className="data">
                        <div className="data-circle circle-1"> +5%</div>
                        <div className="data-text"> {t("income")}</div>
                      </div>
                      <div className="data">
                        <div className="data-circle  circle-2"> +12%</div>
                        <div className="data-text"> {t("depositIncome")}</div>
                      </div>
                      <div className="data">
                        <div className="data-circle circle-3"> -10%</div>
                        <div className="data-text"> {t("expense")}</div>
                      </div>
                    </div>
                    <button className="graphMainCard-Btn">
                      {t("goToReferralProgram")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rightModule">
            <div className="container">
              <div className="d-block d-lg-none mb-2">
                <CloseOutlinedIcon onClick={() => setClick(false)} />
              </div>

              {selectedItem === "mybot" ? (
                <MyBot />
              ) : selectedItem === "myapp" ? (
                <MyApp />
              ) : selectedItem === "myCrm" ? (
                <MyCrm />
              ) : selectedItem === "community" ? (
                <Community />
              ) : selectedItem === "refferralProgram" ? (
                <RefferralProgram />
              ) : selectedItem === "sales" ? (
                <Sales />
              ) : selectedItem === "stats" ? (
                <Stats />
              ) : selectedItem === "marketingAutomation" ? (
                <MarketingAutomation />
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
