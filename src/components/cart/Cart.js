import React, { useState } from "react";

//images
import Gift from "../../assets/shop/gift.jpg";
import Suit from "../../assets/shop/suit.jpg";
import Shoes from "../../assets/shop/shoes.jpg";
import Footlocker from "../../assets/shop/footlocker.png";
//dependencies
import DeleteIcon from "@mui/icons-material/Delete";
import PercentIcon from "@mui/icons-material/Percent";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@material-ui/core";
//component
import Header from "../header/Header";
import "../cart/cart.css";

export default function Cart() {
  let history = useHistory();
  const [show, setShow] = useState(false);

  const { t } = useTranslation();

  const cartdetails = [
    {
      image: Gift,
      name: t("foxHome"),
      price: "15$",
      type: "all",
    },
    {
      image: Suit,
      name: t("pierrerCardin"),
      price: "600$",
      type: "all",
    },
    {
      image: Shoes,
      name: t("foxHome"),
      price: "15$",
      type: "all",
    },
  ];
  return (
    <>
    <div className='scrollTamplate'>
      <Header />
      <div className="container">
        <div className="cartTemplate">
          <div className="templateHeading">
            <span className="backIcon">
              <ArrowBackIcon
                onClick={() => {
                  history.push("/");
                }}
              />
            </span>
            <h1 className="templateTitle">{t("cart")}</h1>
          </div>
          <ul>
            {cartdetails.length > 0 &&
              cartdetails.map((item, i) => {
                return (
                  <li className="cartProduct-Module__list" key={i}>
                    <div className="cartProduct-box">
                      <div
                        className="cartProduct-box__img"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      <div className="cartProduct-box__info">
                        <h6 className="cartProduct-box__brand">{item.name}</h6>
                        <h5 className="cartProduct-box__name">
                          3 {t("boxSimple")}
                        </h5>
                        <span className="cartProduct-box__price">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    <div className="cartProduct-rightBlock">
                      <div className="cartProduct-box__brandBox">
                        <span className="cartProduct-brandImage">
                          <img
                            src={Footlocker}
                            alt=""
                            height={20}
                            width={20}
                            className="img-fluid"
                          />
                        </span>
                        <p className="cartProduct-brandName">
                          {t("footLocker")}
                        </p>
                      </div> 
                      <a className="removeBtn" > 
                        <DeleteIcon />
                      </a>
                    </div>
                  </li>
                );
              })}
          </ul>
          <div className="summaryCard">
            <div className="summaryCard-tab">
              <a className="summaryCard-tabBtn">
                {t("orderSummary")}{" "}
                <KeyboardArrowDownIcon
                  onClick={() => {
                    if (show) {
                      setShow(false);
                    } else {
                      setShow(true);
                    }
                  }}
                />
              </a>
            </div>
            {show ? (
              <div>
                <ul className="summaryCard-List">
                  <li className="summaryCard-ListItems">
                    <p>{t("subtotel")}</p>
                    <span>$1000</span>
                  </li>
                  <li className="summaryCard-ListItems">
                    <p>{t("additionalProducts")}</p>
                    <span>$10</span>
                  </li>
                </ul>
                <div className="totalList">
                  <span>{t("total")}</span>
                  <span>$1010</span>
                </div>
              </div>
            ) : null}
            <div className="cartBtns">
              <Button
                variant="outlined"
                startIcon={<PercentIcon />}
                endIcon={<NavigateNextIcon />}
                className="outlineBtn"
              >
                {t("usePromoCode")}
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  history.push("/checkout");
                }}
              >
                {t("checkout")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
