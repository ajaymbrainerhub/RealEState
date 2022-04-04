import React from "react";

//images
import headerHorse from "../../assets/shop/headerHorse.jpg";
import brownhorse1 from "../../assets/shop/brownhorse1.jpg";
import brownhorse2 from "../../assets/shop/brownhorse2.jpg";

//component
import "../Company/company.css";
import Header from "../header/Header";

//dependencies
import { useTranslation } from "react-i18next";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { useHistory } from "react-router-dom";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};
// const ratingTimes = 5;

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    color: #fff;
    outline: none;
    background-color: ${blue[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;
const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

function Company() {
  let history = useHistory();
  const { t } = useTranslation();

  const vandordetails = [
    {
      image: brownhorse1,
      name: t("hourlyRiding"),
      type: "all",
    },
    {
      image: brownhorse2,
      name: t("groupRiding"),
      type: "all",
    },
  ];

  return (
    <>
      <div className="scrollTamplate">
        <Header />
        <div className="container">
          <div className="companyTemplate">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="vendorbanner-brand">
                  <span className="vendorbanner-brandImg">
                    <img src={headerHorse} className="img-fluid" alt="" />
                  </span>
                  <div className="vendorbanner-brandInfo">
                    <h6 className="vendorbanner-brandTitle">
                      {t("theRiders'Experience")}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="vendorContent">
              <h6 className="vendorContent-title">
                <b>{t("description")}</b>
              </h6>
              <p className="vendorContent-text">
                {t("experiential")}
                <p>{t("amongTheLandscapes")}</p>
                <p>{t("ofagrove")}</p>
              </p>
            </div>

            <TabsUnstyled defaultValue={0} className="centerTabs">
              <TabsList>
                <Tab>{t("rated")} </Tab>
                <Tab>{t("thewholeCollection")}</Tab>
              </TabsList>
              <TabPanel value={0}>
                <ul className="product-Module">
                  {vandordetails.length > 0 &&
                    vandordetails.map((item, index) => {
                      return (
                        <>
                          <li className="product-Module__list" key={index}>
                            <div className="product-box">
                              <div
                                onClick={() => {
                                  history.push("/product", {
                                    state: { vandordetails: item },
                                  });
                                }}
                                className="product-box__img"
                                style={{
                                  backgroundImage: `url(${item.image})`,
                                }}
                              >
                                <div className="product-box__likeBtn"></div>
                                <div className="product-box__discount">
                                  <span className="product-box__off">45%</span>
                                </div>
                              </div>
                              <div className="product-box__info">
                                <div className="product-box__infoTop">
                                  <h6 className="product-box__brand">
                                    {item.name}
                                  </h6>
                                  <span className="product-box__price">
                                    {item.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </>
                      );
                    })}
                </ul>
              </TabPanel>
              <TabPanel value={1}>
                <ul className="product-Module">
                  {vandordetails.length > 0 &&
                    vandordetails.map((item, i) => {
                      return (
                        <>
                          {" "}
                          <li className="product-Module__list" key={i}>
                            <div className="product-box">
                              <div
                                className="product-box__img"
                                style={{
                                  backgroundImage: `url(${item.image})`,
                                }}
                              >
                                <div className="product-box__likeBtn"></div>
                              </div>
                              <div className="product-box__info">
                                <div className="product-box__infoTop">
                                  <h6 className="product-box__brand">
                                    {item.name}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </li>
                        </>
                      );
                    })}
                </ul>
              </TabPanel>
            </TabsUnstyled>
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
