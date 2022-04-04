import React from "react";
//component
import Header from "../header/Header";
//images
import Mastercard from "../../assets/shop/mastercard.png";
import Visa from "../../assets/shop/visa.jpg";
import Footlocker from "../../assets/shop/footlocker.png";
import FoxHome from "../../assets/shop/foxHome.jpg";
//dependencies
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTranslation } from "react-i18next";
//css
import "../wallets/paymentHistory.css";

function PaymentHistory() {
  let history = useHistory();
  const { t } = useTranslation();

  const historys = [
    {
      image: Mastercard,
      name: t("purchases"),
      detail: "11.12.2021 at 16:05",
      price: "-$495",
      type: "card",
      cardno: "**** *****",
    },
    {
      image: Footlocker,
      name: t("cardre"),
      detail: "11.12.2021 at 16:05",
      price: "+$105",
      type: "all",
    },
    {
      image: Visa,
      name: t("purchases"),
      detail: "11.12.2021 at 16:05",
      price: "-$729",
      type: "card",
      cardno: "**** *****",
    },
    {
      image: FoxHome,
      name: t("cardre"),
      detail: "11.12.2021 at 16:05",
      price: "+$800",
      type: "all",
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
                history.push("/wallet");
              }}
            >
              <ArrowBackIcon />
            </span>
            <h1 className="templateTitle">{t("allp")}</h1>
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
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
