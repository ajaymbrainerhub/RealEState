import React from "react";

//component
import "../Booking/bookingcart.css";
import Header from "../header/Header";

//dependencies
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import PercentIcon from "@mui/icons-material/Percent";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

//images
import headerHorse from "../../assets/shop/headerHorse.jpg";
import brownhorse2 from "../../assets/shop/brownhorse2.jpg";
import brownhorse1 from "../../assets/shop/brownhorse1.jpg";

function BookingCart() {
  let history = useHistory();
  const { t } = useTranslation();
  const cartdetails = [
    {
      image: headerHorse,
      name: t("hourlyRiding"),
      price: "15$",
      type: "all",
    },
  ];

  return (
    <div className='scrollTamplate'>
      <Header />
      <div className="container">
        <div className="cartTemplate">
          <div className="templateHeading">
            <span className="backIcon">
              <ArrowBackIcon
                onClick={() => {
                  history.push("/company");
                }}
              />
            </span>
            <h1 className="templateTitle">{t("cart")} </h1>
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
                        <h5 className="cartProduct-box__name">3 Box simple</h5>
                        <span className="cartProduct-box__price">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    <div className="cartProduct-rightBlock">
                      <a className="removeBtn">
                        <DeleteIcon />
                      </a>
                    </div>
                  </li>
                );
              })}
          </ul>
          <div className="bookingCartModule">
            <div className="cartBtns">
              <Button
                variant="outlined"
                startIcon={<PercentIcon />}
                endIcon={<NavigateNextIcon />}
                className="outlineBtn"
                onClick={() => {
                  history.push("/bookingcartdetail");
                }}
              >
                {t("usetheCoupon")}
              </Button>
            </div>
            <div className="product-block bookingCartProduct">
              <h6 className="module-heading__title">{t("popularwith")}</h6>
              <p className="module-heading__content">{t("moreProducts")}</p>
              <ul className="product-Module">
                <li className="product-Module__list">
                  <div className="product-box">
                    <div
                      className="product-box__img"
                      style={{ backgroundImage: `url(${brownhorse1})` }}
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
                          {t("hourlyRiding")}{" "}
                        </h6>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-Module__list">
                  <div className="product-box">
                    <div
                      className="product-box__img"
                      style={{ backgroundImage: `url(${brownhorse2})` }}
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
                          {t("groupRiding")}
                        </h6>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="totalList">
              <span>{t("total")} </span>
              <span>$1010</span>
            </div>
            <div className="cartBtns">
              <Button variant="outlined">{t("paynow")}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCart;
