import React from "react";

//component
import "./bookingCartDetails.css";
import Header from "../header/Header";

//dependencies
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";

//images
import headerHorse from "../../assets/shop/headerHorse.jpg";
import brownhorse2 from "../../assets/shop/brownhorse2.jpg";
import brownhorse1 from "../../assets/shop/brownhorse1.jpg";

function BookingCartDetail() {
  let history = useHistory();
  const { t } = useTranslation();

  const cartDetails = [
    {
      image: brownhorse1,
      description: t("groupRiding"),
      price: "$379",
    },
    {
      image: brownhorse2,
      description: t("hourlyRiding"),
      price: "$379",
    },
  ];

  return (
    <div className='scrollTamplate'>
      <Header />
      <div className="pageTamplate">
        <div className="container">
          <div className="templateHeading">
            <span className="backIcon">
              <ArrowBackIcon
                onClick={() => {
                  history.push("/bookingcart");
                }}
              />
            </span>
            <h1 className="templateTitle">{t("cart")}</h1>
          </div>
          <div className="barndAuth">
            <div
              className="barndAuth-img"
              style={{ backgroundImage: `url(${headerHorse})` }}
            ></div>
            <h6 className="barndAuth-title">{t("theRiders'Experience")}</h6>
          </div>
          <ul>
            {cartDetails.length > 0 &&
              cartDetails.map((cartItem) => {
                return (
                  <li className="cartProduct-Module__list">
                    <div className="cartProduct-box">
                      <div
                        className="cartProduct-box__img"
                        style={{ backgroundImage: `url(${cartItem.image})` }}
                      ></div>
                      <div className="cartProduct-box__info">
                        <h6 className="cartProduct-box__brand">
                          {cartItem.description}
                        </h6>
                        <h5 className="cartProduct-box__name">3 Box simple</h5>
                        <span className="cartProduct-box__price">
                          {cartItem.price}
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
            <div className="totalList">
              <span>{t("total")}</span>
              <span>$379</span>
            </div>
            <div className="cartBtns">
              <Button
                onClick={() => {
                  history.push("/bookingpayment");
                }}
                variant="outlined"
              >
                {t("paynow")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCartDetail;
