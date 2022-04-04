import React from "react";

//component
import Header from "../../components/header/Header";
//images
import Footlocker from "../../assets/shop/footlocker.png";
//dependencies
import { Button } from "@material-ui/core";
import "../category/category.css";
import { useTranslation } from "react-i18next";
import ChatBot from "../../components/chat/ChatBot";
import { useLocation } from "react-router-dom";

export default function CategoryDetails({ props }) {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className='scrollTamplate'>
      <Header />
      <div className="productDetails">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="productDetails-info">
                <div className="productDetails-heading">
                  <h5 className="productDetails-title">
                    {t(location?.state?.state?.categoryDetails?.name)}
                  </h5>
                  <h6 className="productDetails-price">
                    <span>{t("price")} $ </span>/ {t("eCredit")}
                  </h6>
                </div>
                <div className="productDetails-brand">
                  <span className="productDetails-brandImage">
                    <img
                      src={Footlocker}
                      alt=""
                      height={20}
                      width={20}
                      className="img-fluid"
                    />
                  </span>
                  <p className="productDetails-brandName">{t("footlocker")}</p>
                </div>
                <div className="productDetails-content">
                  <h6 className="productDetails-contentTitle">
                    {t("description")}
                  </h6>
                  <p className="productDetails-contentText">
                    {t("subDescription")}
                  </p>
                </div>
                <div className="productDetails-btns">
                  <Button className="addcart_btn">{t("addToCart")}</Button>
                  <Button className="buynow_btn">{t("BuyNow")}</Button>
                </div>
                <ul className="productDetails-List">
                  <li className="productDetails-ListItem">
                    <strong>{t("SKU")} : </strong>
                    {t("skuKey")}{" "}
                  </li>
                  <li className="productDetails-ListItem">
                    <strong>{t("categories")} : </strong> {t("laptophedphones")}
                  </li>
                  <li className="productDetails-ListItem">
                    <strong>{t("tags")} : </strong> {t("laptop")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="productDetails-img">
                <img
                  src={location?.state?.state?.categoryDetails?.image}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
}
