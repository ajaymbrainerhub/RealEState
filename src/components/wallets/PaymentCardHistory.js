import React, { useState } from "react";
//component
import Header from "../header/Header";
//images
import Mastercard from "../../assets/shop/mastercard.png";
import Visa from "../../assets/shop/visa.jpg";
import Footlocker from "../../assets/shop/footlocker.png";
import FoxHome from "../../assets/shop/foxHome.jpg";
import Cloths from "../../assets/shop/cloths.jpg";
import FoxHomeImage from "../../assets/shop/foxHome.jpg";
//dependencies
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../wallets/paymentHistory.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, Checkbox, Drawer } from "@material-ui/core";
import StarIcon from "@mui/icons-material/Star";
import Clear from "@material-ui/icons/Clear";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useTranslation } from "react-i18next";
//css
import "./paymentCardHistory.css";

function PaymentCardHistory() {
  let history = useHistory();
  const [paymentFilter, setPaymentFilter] = useState(false);
  const [paymentShow, setPaymentShow] = useState(false);
  const [sortShow, setSortShow] = useState(false);
  const [purchaseCost, setPurchaseCostShow] = useState(false);
  const [shopsShow, setShopsShow] = useState(false);
  const { t } = useTranslation();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const historys = [
    {
      image: Mastercard,
      name: t("purchases"),
      detail: "11.12.2021 at 16:05",
      price: "more",
      type: "card",
      cardno: "**** *****",
    },
    {
      image: Footlocker,
      name: t("adidas"),
      detail: t("suspends"),
      price: "+$105",
      type: "all",
    },
    {
      image: Visa,
      name: t("white"),
      detail: t("suspends"),
      price: "-$729",
      type: "card",
      cardno: "**** *****",
    },
    {
      image: FoxHome,
      name: t("card"),
      detail: "11.12.2021 at 16:05",
      price: "+$800",
      type: "all",
    },
    {
      image: FoxHome,
      name: t("purchases"),
      detail: "11.12.2021 at 16:05",
      price: "more",
      type: "all",
    },
    {
      image: FoxHome,
      name: t("sofa"),
      detail: t("suspends"),
      price: "+$800",
      type: "all",
    },
  ];

  const shopsData = [
    {
      image: Cloths,
      name: t("cloth"),
      rate: "4.6",
    },

    {
      image: FoxHomeImage,
      name: t("home"),
      rate: "4.5",
    },
  ];
  return (
    <div className='scrollTamplate'>
      <Header />
      <div className="paymentHestoryTemplate">
        <div className="container">
          <div className="templateHeading">
            <span
              className="backIcon"
              onClick={() => {
                history.push("/paymenthistory");
              }}
            >
              <ArrowBackIcon />
            </span>
            <h1 className="templateTitle">{t("paymenth")}</h1>
            <span className="rightIcon" onClick={() => setPaymentFilter(true)}>
              <FilterAltIcon />
            </span>
          </div>

          <ul className="paymentHestoryCards">
            {historys.length > 0 &&
              historys.map((item, i) => {
                return (
                  <li
                    className="cartProduct-Module__list"
                    key={i}
                    onClick={() => {
                      history.push("/paymentcardhistory");
                    }}
                  >
                    <div className="cartProduct-box">
                      <div
                        className="cartProduct-box__img"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      <div className="cartProduct-box__info">
                        <h6 className="cartProduct-box__brand">{item.name}</h6>
                        <h5 className="cartProduct-box__name">{item.detail}</h5>
                        {item.type === "card" && <h5>{item.cardno}</h5>}
                      </div>
                    </div>
                    <div className="cartProduct-rightBlock">
                      <div className="cartProduct-box__brandBox">
                        <span className="cartProduct-box__price">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>

          {paymentFilter ? (
            <Drawer
              anchor="right"
              className="SideDrawer"
              open={paymentFilter ? true : false}
              onClose={() => setPaymentFilter(false)}
            >
              <div className="filterSidebar">
                <div className="SideDrawerHead">
                  <h6 className="SideDrawerTitle">{t("filters")}</h6>
                  <span
                    onClick={() => setPaymentFilter(false)}
                    className="closeBtn"
                  >
                    <Clear />
                  </span>
                </div>
                <div className="filterSidebarInner">
                  <div className="filterBlock">
                    <a className="filterBlock-headBtns">
                      {t("payment")}{" "}
                      <KeyboardArrowDownIcon
                        onClick={() => {
                          if (paymentShow) {
                            setPaymentShow(false);
                          } else {
                            setPaymentShow(true);
                          }
                        }}
                      />
                    </a>
                    {paymentShow ? (
                      <div>
                        <ul className="summaryCard-List">
                          <li className="summaryCard-ListItems">
                            <p>{t("refil")}</p>
                            <span>
                              <Checkbox {...label} />
                            </span>
                          </li>
                          <li className="summaryCard-ListItems">
                            <p>{t("withdrawal")}</p>
                            <span>
                              <Checkbox {...label} />
                            </span>
                          </li>
                          <li className="summaryCard-ListItems">
                            <p>{t("bonses")}</p>
                            <span>
                              <Checkbox {...label} />
                            </span>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </div>
                  <div className="filterBlock">
                    <a className="filterBlock-headBtns">
                      {t("sort")}{" "}
                      <KeyboardArrowDownIcon
                        onClick={() => {
                          if (sortShow) {
                            setSortShow(false);
                          } else {
                            setSortShow(true);
                          }
                        }}
                      />
                    </a>
                    {sortShow ? (
                      <div>
                        <ul className="summaryCard-List">
                          <li className="summaryCard-ListItems">
                            <p>{t("date")}</p>
                            <span>
                              <Checkbox {...label} />
                            </span>
                          </li>
                          <li className="summaryCard-ListItems">
                            <p>{t("card")}</p>
                            <span>
                              <Checkbox {...label} />
                            </span>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </div>
                  <div className="filterBlock">
                    <a className="filterBlock-headBtns">
                      {t("purchaseCost")}{" "}
                      <KeyboardArrowDownIcon
                        onClick={() => {
                          if (purchaseCost) {
                            setPurchaseCostShow(false);
                          } else {
                            setPurchaseCostShow(true);
                          }
                        }}
                      />
                    </a>
                    {purchaseCost ? (
                      <div>
                        <ul className="summaryCard-List">
                          <li className="summaryCard-ListItems">
                            <p>0-$100</p>
                            <span>
                              <Checkbox {...label} />
                            </span>
                          </li>
                          <li className="summaryCard-ListItems">
                            <p>100-$150</p>
                            <span>
                              <Checkbox {...label} />
                            </span>
                          </li>
                          <li className="summaryCard-ListItems">
                            <p>150$ to more</p>
                            <span>
                              <Checkbox {...label} />
                            </span>
                          </li>
                        </ul>
                      </div>
                    ) : null}
                  </div>
                  <div className="filterBlock">
                    <a className="filterBlock-headBtns">
                      {t("shopes")}{" "}
                      <KeyboardArrowDownIcon
                        onClick={() => {
                          if (shopsShow) {
                            setShopsShow(false);
                          } else {
                            setShopsShow(true);
                          }
                        }}
                      />
                    </a>

                    {shopsShow ? (
                      <div className="shoperslider">
                        <ScrollingCarousel>
                          {shopsData.map((shopItem) => {
                            return (
                              <div className="shoperBox">
                                <span className="shoperBox-Img">
                                  <img
                                    src={shopItem.image}
                                    className="img-fluid"
                                    alt="My Awesome"
                                    s
                                  />
                                </span>
                                <h6 className="shoperBox-title">
                                  {shopItem.name}
                                </h6>
                                <div className="shoperBox-rate">
                                  <StarIcon />
                                  <span>{shopItem.rate}</span>
                                </div>
                              </div>
                            );
                          })}
                        </ScrollingCarousel>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="walletBtns">
                  <Button
                    className="blueBtn"
                    onClick={() => {
                      console.log("Apply");
                    }}
                  >
                    {t("apply")}
                  </Button>
                </div>
              </div>
            </Drawer>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentCardHistory;
