import React from "react";
//component
import Header from "../header/Header";
//dependencies
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { Tab, Tabs } from "@material-ui/core";
import { useTranslation } from "react-i18next";
//images
import foxHome from "../../assets/shop/foxHome.jpg";
import footlocker from "../../assets/shop/footlocker.png";
import cafeJoe from "../../assets/shop/cafejoe.jpg";
import pierreCardin from "../../assets/shop/pierrecardin.jpg";
//css
import "../vendor/vandorsDetails.css";

export default function AllVendor() {
  const { t } = useTranslation();

  const addVandorsData = [
    {
      image: foxHome,
      name: t("foxHome"),
    },
    {
      image: cafeJoe,
      name: t("cafeJoe"),
    },
  ];

  const allVendorsData = [
    {
      id: "1",
      image: pierreCardin,
      name: t("pierrerCardin"),
      km: "5km",
      color: "#E8E8E8",
    },
    {
      id: "2",
      image: footlocker,
      name: t("footlocker"),
      km: "",
      color: "#FFD1D8",
    },
    {
      id: "3",
      image: pierreCardin,
      name: t("pierrerCardin"),
      km: "",
      color: "#FFD8E8",
    },
    {
      id: "4",
      image: footlocker,
      name: t("footlocker"),
      km: "",
      color: "#D0F1FF",
    },
  ];

  const listTab = [
    {
      status: "All",
      value: t("all"),
    },
    {
      status: "Art",
      value: t("art"),
    },
    {
      status: "Photography",
      value: t("photography"),
    },
    {
      status: "Music",
      value: t("music"),
    },
    {
      status: "Fashion",
      value: t("fashion"),
    },
    {
      status: "Kitchen",
      value: t("kitchen"),
    },
  ];

  return (
    <div className="scrollTamplate">
      <Header />
      <div className="pageTemplate">
        <div className="container">
          <ScrollingCarousel>
            <Tabs
              // defaultSelectedIndex={1}
              className="categoriesSliderTabs"
            >
              {listTab.map((tab) => {
                return (
                  <>
                    {" "}
                    <Tab value={tab.status} label={tab.value}>
                      {tab.value}
                    </Tab>
                  </>
                );
              })}
            </Tabs>
          </ScrollingCarousel>
          <div className="vendorAllListBlock">
            <h6 className="module-heading__title">{t("popularVendors")}</h6>
            <ul className="categoryList">
              {addVandorsData.length > 0 &&
                addVandorsData.map((item) => {
                  return (
                    <>
                      {" "}
                      <li className="categoryList__block">
                        <div className="category-box text-center">
                          <span className="category-boxSubTitle">12km</span>
                          <div className="category-box__img">
                            <img
                              src={item.image}
                              className="img-fluid"
                              alt="My Awesome"
                            />
                          </div>
                          <h6 className="category-box__title">{item.name}</h6>
                        </div>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>

          <div className="vendorAllListBlock">
            <h6 className="module-heading__title">{t("allvandors")}</h6>
            <ul className="categoryList">
              {allVendorsData.length > 0 &&
                allVendorsData.map((item) => {
                  return (
                    <>
                      <li className="categoryList__block">
                        <div className="category-box text-center">
                          <span className="category-boxSubTitle">
                            {item.km}
                          </span>
                          <div className="category-box__img">
                            <img
                              src={item.image}
                              className="img-fluid"
                              alt="My Awesome"
                            />
                          </div>
                          <h6 className="category-box__title">{item.name}</h6>
                        </div>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
