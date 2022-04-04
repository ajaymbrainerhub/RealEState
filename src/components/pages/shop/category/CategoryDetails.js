// import React from "react";

// //component
// import Header from "../header/Header";
// //images
// import Footlocker from "../../assets/shop/footlocker.png";
// //dependencies
// import { Button } from "@material-ui/core";
// import "../category/category.css";
// import { useTranslation } from "react-i18next";
// import ChatBot from "../chat/ChatBot";
// import { useLocation } from "react-router-dom";

// export default function CategoryDetails({ props }) {
//   const location = useLocation();
//   const { t } = useTranslation();

//   return (
//     <div>
//       <Header />
//       <div className="productDetails">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <div className="productDetails-info">
//                 <div className="productDetails-heading">
//                   <h5 className="productDetails-title">
//                     {t(location?.state?.categoryDetails?.name)}
//                   </h5>
//                   <h6 className="productDetails-price">
//                     <span>{t("price")} $ </span>/ {t("eCredit")}
//                   </h6>
//                 </div>
//                 <div className="productDetails-brand">
//                   <span className="productDetails-brandImage">
//                     <img
//                       src={Footlocker}
//                       alt=""
//                       height={20}
//                       width={20}
//                       className="img-fluid"
//                     />
//                   </span>
//                   <p className="productDetails-brandName">{t("footlocker")}</p>
//                 </div>
//                 <div className="productDetails-content">
//                   <h6 className="productDetails-contentTitle">
//                     {t("description")}
//                   </h6>
//                   <p className="productDetails-contentText">
//                     {t("subDescription")}
//                   </p>
//                 </div>
//                 <div className="productDetails-btns">
//                   <Button className="addcart_btn">{t("addToCart")}</Button>
//                   <Button className="buynow_btn">{t("BuyNow")}</Button>
//                 </div>
//                 <ul className="productDetails-List">
//                   <li className="productDetails-ListItem">
//                     <strong>{t("SKU")} : </strong>
//                     {t("skuKey")}{" "}
//                   </li>
//                   <li className="productDetails-ListItem">
//                     <strong>{t("categories")} : </strong> {t("laptophedphones")}
//                   </li>
//                   <li className="productDetails-ListItem">
//                     <strong>{t("tags")} : </strong> {t("laptop")}
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-lg-5 offset-lg-1">
//               <div className="productDetails-img">
//                 <img
//                   src={location?.state?.categoryDetails?.image}
//                   alt=""
//                   height={50}
//                   width={50}
//                   className="img-fluid"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ChatBot />
//     </div>
//   );
// }
