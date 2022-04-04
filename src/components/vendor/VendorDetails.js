import React, { useState, useEffect } from "react";
//component
import Header from "../../components/header/Header";
import ChatBot from "../../components/chat/ChatBot";
//dependencies
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

//images

import Gift from "../../assets/shop/gift.jpg";
import Shoes from "../../assets/shop/shoes.jpg";
import Shoes1 from "../../assets/shop/shoes1.jpg";
import Home from "../../assets/shop/home.jpg";
import Home2 from "../../assets/shop/home2.jpg";
import Cafe from "../../assets/shop/cafe1.jpg";
import Cafe1 from "../../assets/shop/cafe2.jpg";
import Cafe2 from "../../assets/shop/cafe3.jpg";
import Art from "../../assets/shop/art.jpg";
import GrirlsShoes from "../../assets/shop/girls.jpg";
import Computer from "../../assets/shop/computer.jpg";
import Mobile from "../../assets/shop/mobile.jpg";
import Cloths from "../../assets/shop/cloths.jpg";
import ClothSale from "../../assets/shop/clothSale.jpg";
import Ipad from "../../assets/shop/ipad.jpg";

import Rating from "@mui/material/Rating";
import { Tab, Tabs } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { Button } from "@material-ui/core";
import LinearProgress from "@mui/material/LinearProgress";
// import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

//css
import "../../components/vendor/vandorsDetails.css";

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
const ratingTimes = 5;

const Tabv = styled(TabUnstyled)`
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

export default function VandorsDetail() {

  const [value, setValue] = React.useState(0);
  const [ratings, setRatings] = React.useState([0, 2, 3, 0, 0]);
  // const navigate = useNavigate();
  let history = useHistory();
  const location = useLocation();

  const [category, setCategory] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const { t } = useTranslation();

  const foxhome = [
    {
      image: Home,
      name: t("foxHome"),
      price: "15$",
      type: "shoes",
    },
    {
      image: Home2,
      name: t("foxHome"),
      price: "15$",
      type: "electronic",
    },
    {
      image: Home,
      name: t("foxHome"),
      price: "15$",
      type: "cloths",
    },
    {
      image: Home2,
      name: t("foxHome"),
      price: "75$",
      type: "electronic",
    },
  ];

  const cafejoe = [
    {
      image: Cafe,
      name: t("cafe"),
      price: "15$",
      type: "shoes",
    },
    {
      image: Cafe1,
      name: t("cafe"),
      price: "15$",
      type: "electronic",
    },
    {
      image: Cafe2,
      name: t("cafe"),
      price: "15$",
      type: "cloths",
    },
    {
      image: Cafe,
      name: t("cafe"),
      price: "75$",
      type: "electronic",
    },
  ];

  const categoryData = [
    {
      image: GrirlsShoes,
      name: t("shoes"),
      price: "15$",
      type: "shoes",
    },
    {
      image: Computer,
      name: t("computer"),
      price: "15$",
      type: "electronic",
    },
    {
      image: ClothSale,
      name: t("clothSale"),
      price: "15$",
      type: "cloths",
    },
    {
      image: Ipad,
      name: t("ipad"),
      price: "75$",
      type: "electronic",
    },
    {
      image: Shoes1,
      name: t("pierrerCardin"),
      price: "600$",
      type: "shoes",
    },
    {
      image: Mobile,
      name: t("mobile"),
      price: "10$",
      type: "electronic",
    },
    {
      image: Shoes,
      name: t("shoes"),
      price: "15$",
      type: "shoes",
    },
    {
      image: Cloths,
      name: t("cloths"),
      price: "15$",
      type: "cloths",
    },
  ];

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
  }));

  const renderRatings = (item, index) => {
    return (
      <div className="reviewList">
        <Rating
          value={item}
          onChange={(event, newValue) => {
            let a = ratings;
            a[index] = newValue;
            setRatings(JSON.parse(JSON.stringify(a)));
            console.log(a);
          }}
        ></Rating>
        <BorderLinearProgress
          id={index}
          variant="determinate"
          value={item * 20}
        />
      </div>
    );
  };

  useEffect(() => {
    setCategory(categoryData);
    setFilterCategory(categoryData);
  }, []);

  /**
   * handle tab change
   * @param {*} event
   * @param {*} newValue
   */

  const handleChange = (event, newValue) => {
    if (newValue === "shoes") {
      let artFilter = category.filter((x) => x.type === newValue);
      setFilterCategory(artFilter);
    } else if (newValue === "electronic") {
      let artFilter = category.filter((x) => x.type === newValue);
      setFilterCategory(artFilter);
    } else if (newValue === "cloths") {
      let artFilter = category.filter((x) => x.type === newValue);
      setFilterCategory(artFilter);
    } else {
      setFilterCategory(categoryData);
    }
  };

  return (
    <>
     <div className='scrollTamplate'>
      <Header />
      <div className="container">
        <div className="vendorTemplate">
          <div
            className="vendorbanner"
            style={{
              backgroundImage: "url(" + Art + ")",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="vendorbanner-brand">
                  <span className="vendorbanner-brandImg">
                    <img src={Gift} className="img-fluid" />
                  </span>
                  <div className="vendorbanner-brandInfo">
                    <h6 className="vendorbanner-brandTitle">
                      {t("footLocker")}
                    </h6>
                    <p className="vendorbanner-brandSubtitle">
                      {t("shoesStore")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <Button className="blueBtn">{t("follow")}</Button>
              </div>
            </div>
          </div>

          <div className="vendorContent">
            <h6 className="vendorContent-title">{t("description")}</h6>
            <p className="vendorContent-text">{t("desc")}</p>
          </div>
          <div>
            <Tabs
              // defaultSelectedIndex={1}
              className="categoriesSliderTabs"
              onChange={handleChange}
            >
              <Tab value="all" label={t("all")}>
                All
              </Tab>
              <Tab value="shoes" label={t("shoes")}>
                Shoes
              </Tab>
              <Tab value="electronic" label={t("electronic")}>
                Art
              </Tab>
              <Tab value="cloths" label={t("cloths")}>
                Art
              </Tab>
            </Tabs>
          </div>
          <ul className="product-Module">
            {filterCategory.length > 0 &&
              filterCategory.map((catItem) => {
                return (
                  <>
                    {" "}
                    <li
                      className="product-Module__list"
                      onClick={() => {
                        if (catItem.imagename === "booking") {
                          history.push("/company", {
                            state: { isBookingApp: true },
                          });
                        } else {
                          history.push("/categorydetails", {
                            state: { categoryDetails: catItem },
                          });
                        }
                      }}
                    >
                      <div className="product-box">
                        <div
                          className="product-box__img"
                          style={{ backgroundImage: `url(${catItem.image})` }}
                        >
                          <div className="product-box__likeBtn">
                            <FavoriteBorderOutlinedIcon />
                          </div>
                          <div className="product-box__discount">
                            <span className="product-box__off">45%</span>
                          </div>
                        </div>
                        <div className="product-box__info">
                          <div className="product-box__infoTop">
                            <h6 className="product-box__brand">
                              {catItem.name}
                            </h6>
                            <span className="product-box__price">
                              {catItem.price}
                            </span>
                          </div>
                          <h5 className="product-box__name">
                            3 {t("boxSimple")}
                          </h5>
                        </div>
                      </div>
                    </li>
                  </>
                );
              })}
          </ul>
          <TabsUnstyled
            defaultValue={
              location?.state?.vandors?.value
                ? location?.state?.vandors?.value
                : 0
            }
            className="centerTabs"
          >
            <TabsList>
              <Tabv>{t("topRated")}</Tabv>
              <Tabv>{t("allCollections")}</Tabv>
            </TabsList>
            <TabPanel value={0}>
              <ul className="product-Module">
                {foxhome.length > 0 &&
                  foxhome.map((item, index) => {
                    return (
                      <>
                        <li className="product-Module__list" key={index}>
                          <div className="product-box">
                            <div
                              onClick={() => {
                                history.push("/product", {
                                  state: { categoryData: item },
                                });
                              }}
                              className="product-box__img"
                              style={{ backgroundImage: `url(${item.image})` }}
                            >
                              <div className="product-box__likeBtn">
                                {/* <FavoriteBorderOutlinedIcon
                                    onClick={() => handleFavChange()}
                                /> */}
                              </div>
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
                              <h5 className="product-box__name">
                                3 {t("boxSimple")}
                              </h5>
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
                {cafejoe.length > 0 &&
                  cafejoe.map((item, i) => {
                    return (
                      <>
                        {" "}
                        <li className="product-Module__list" key={i}>
                          <div className="product-box">
                            <div
                              className="product-box__img"
                              style={{ backgroundImage: `url(${item.image})` }}
                            >
                              <div className="product-box__likeBtn">
                                {/* <FavoriteBorderOutlinedIcon
                                    onClick={() => handleFavChange()}
                                /> */}
                              </div>
                              <div className="product-box__discount">
                                <span className="product-box__off">45%</span>
                              </div>
                            </div>
                            <div className="product-box__info">
                              <div className="product-box__infoTop">
                                <h6 className="product-box__brand">
                                  {item.name}
                                </h6>
                              </div>
                              <h5 className="product-box__name">
                                3 {t("boxSimple")}
                              </h5>
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
        <ChatBot />
      </div>
      </div>
    </>
  );
}
