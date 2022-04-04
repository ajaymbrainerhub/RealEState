import React, { useEffect, useState } from "react";
import img1 from "../../assets/imgs/houses/1.jpg";
import img2 from "../../assets/imgs/houses/2.jpg";
import img3 from "../../assets/imgs/houses/3.jpg";
import home from "../../assets/imgs/Home.png";
import { ReactComponent as Zoom } from '../../assets/imgs/video.svg';
import { ReactComponent as Call } from '../../assets/imgs/phone-call.svg';
import { ReactComponent as Chat } from '../../assets/imgs/messenger.svg';
import userImg from "../../assets/imgs/user.jpeg";
import "./ProductDetails.css";
import { loadProduct } from "../../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Hat } from "../../assets/imgs/hat.svg";
import { ReactComponent as Medical } from "../../assets/imgs/medical.svg";
import { ReactComponent as Shopping } from "../../assets/imgs/shopping.svg";
import { ReactComponent as Restaurant } from "../../assets/imgs/restaurant.svg";
import { ReactComponent as Bath } from '../../assets/imgs/bath.svg';
import { ReactComponent as Bed } from '../../assets/imgs/bed.svg';
import { ReactComponent as Location } from '../../assets/imgs/location.svg';
import { ReactComponent as Checkbox } from '../../assets/imgs/Checkbox.svg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTranslation } from "react-i18next";
import Metting from "../../assets/imgs/shakinghands.svg";
import VideoCall from "../../assets/imgs/VideoCall.jpeg";
import ForumIcon from "@mui/icons-material/Forum";
import { useHistory } from "react-router-dom";

const imgs = [img1, img2, img3, img1, img2, img3];

export default function ProductDetails(props) {
  let history = useHistory();
  const { t } = useTranslation();
  const { id } = props.match.params;
  const product = useSelector((state) => state.productReducer.currProduct);
  const data = useSelector((state) => state.mapReducer);
  const [isMapData, setMapData] = useState(false);
  console.log("dataaa", data.maps)

  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(data.maps).length !== 0) {
      setMapData(true);
    }
    dispatch(loadProduct(id));// eslint-disable-next-line
  }, []);

  return product ? (
    <div className='scrollTamplate'>
      <div className=" product-details">
        {/* <img className="imagg" src={isMapData ? data.maps.id : imgs[product.id]} alt="" /> */}
        <img src={isMapData ? require(`../../assets/imgs/houses/${data.maps.Image}`) : require(`../../assets/imgs/houses/${product.Image}`)} className='imgg' alt='' />
        <div id="top" className="container col p10">
          <div className="header flex">
            <div className="price">
              {console.log("data.maps", data.maps)}
              <h2>{isMapData ? data.maps.price : product.price}$</h2>
            </div>
            <div className='iconitems'>
              <div className='iconlist'>
                <Bath />
                <span>{isMapData ? data.maps.bathroom : product.bathroom}</span>
              </div>
              <div className='iconlist'>
                <Bed />
                <span>{isMapData ? data.maps.bedrooms : product.bedrooms}</span>
              </div>
            </div>
          </div>
          <div className='location'>
            <Location />
            <span>{isMapData ? data.maps.location : product.location}</span>
          </div>
          <div className='footer flex'>
            <div className='distance'>{isMapData ? data.maps.distance : product.distance} meters </div>
            <div className='type'>{isMapData ? data.maps.type : product.type}</div>
          </div>
          <div className="desc">
            <h3>{t("propertyDetails")}</h3>
            <p> {isMapData ? data.maps.desc : product.desc}</p>
          </div>
          <div id="middle" className="information">
            <div className="headInfo">
              <div className="headInfoUser">
                <span className="userImgBlock"><img className="userImg" src={userImg} alt="" /></span>
                <h1>{t("fady")}</h1>
              </div>
              <div className="new-icons">
                <img src={Metting} onClick={() => history.push("/bookingappointment")} alt="" />
                <span>{t("metting")}</span>
              </div>
              <div className='new-icons'>
                <Call />
                <span>{t("call")}</span>
              </div>
              <div className='new-icons'>
                <ForumIcon />
                <span>{t("chat")}</span>
              </div>
              <div className="new-icons">
                <img src={VideoCall} alt="" />
                <span>{t("videoCall")} </span>
              </div>
            </div>
            <div className="inputInfo">
              <input
                type="text"
                placeholder={t("name")}
                name="phone"
                className="input"
              />
              <input
                type="text"
                placeholder={t("phoneNumber")}
                name="phone"
                className="input"
              />
            </div>
            <div className="helpBtnBlock">
              <div className="helpInfo">
                <input type="checkbox" id="help" name="help" value="help" />
                <label for="help">{t("iWantAlsoHelpWithFindFitMortgage")}</label>
                {/* <Checkbox />
              <p>{t("iWantAlsoHelpWithFindFitMortgage")}</p> */}
              </div>
              <button className="moreDetails">{t("moreDetails")}</button>
            </div>

          </div>

          <div id="end" className="neighborhood-details">
            <div className="neighborhood-detailsInner">
              <div className="neighborhood-info">
                <div className="neighborhood-infoHead">
                  <h2>{t("neighborhoodDetails")}</h2>
                  <h3>{t("yearToBuild:1983")}</h3>
                </div>
                <a href="/" className="neighborhood-infoLink">{t("moreDetailsAboutTheBuilding")} <ChevronRightIcon /></a>
              </div>
              <img className="neighborhood-details-img" src={imgs[product.id]} alt="" />
            </div>
          </div>

          <div className="iconHeading">
            <img src={home} className="iconHeading-img" alt="" />
            <div className="iconHeading-info">
              <h5 className="iconHeading-title">{t("neighborhoodDetails")}</h5>
              <h6 className="iconHeading-text">{t("thingsYouShouldKnow")}</h6>
            </div>
          </div>
          <div className="cards flex" id="end">
            <div className="card">
              <Shopping className="icon" style={{ fill: "#00E5C2" }} />
              <p>{t("shoppingCenterNearBy")} </p>
            </div>
            <div className="card">
              <Restaurant className="icon" style={{ fill: "#FFB100" }} />
              <p>{t("shoppingCenterNearBy")} </p>
            </div>
            <div className="card">
              <Hat className="icon" style={{ fill: "#002652" }} />
              <p>{t("shoppingCenterNearBy")} </p>
            </div>
            <div className="card">
              <Medical className="icon" style={{ fill: "#E3001A" }} />
              <p>{t("shoppingCenterNearBy")} </p>
            </div>
          </div>
        </div>
        <div className='contact flex space-between'>
          <div className='name'> <strong>{product.name}</strong>  {t("contact")} </div>
          <button className='btn'>{t("contactNow")}  </button>
        </div>
      </div>
    </div>
  ) : (
    <div>{t("noProduct")} </div>
  );
}
