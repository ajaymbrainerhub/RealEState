import React, { useEffect, useState } from "react";
import location from "../../images/location.png";
import prices from "../../images/price-tag.png";
import bed from "../../images/bed.png";
import hotel from "../../images/building.png";
import seller from "../../images/seller.png";
import filter from "../../images/filter.png";
import "../head/Head.css";
import Filter from "../Filter/Filter";
import { useDispatch } from "react-redux";
import { loadProducts } from "../../store/actions/productActions";
import Dropdown from "../dropdown/dropdown";
import TypeDropdown from "../dropdown/TypeDropDown";
import Badge from "@mui/material/Badge";
import { ReactComponent as Preferences } from "../../assets/imgs/preferences.svg";
import { useTranslation } from "react-i18next";

function Head() {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const filterClick = () => setClick(!click);
  const [filterBy, setFilterBy] = useState({
    minPrice: 0,
    maxPrice: 8000000,
    minRooms: 0,
    maxRooms: 8,
    minDistance: 0,
    maxDistance: 100,
    location: "",
    type: "",
    username: "",
  });
  const [showFilter, setShowFilter] = useState({
    price: false,
    bedrooms: false,
    type: false,
    distance: false,
    username: false,
  });
  const dispatch = useDispatch();
  const toggleFilter = (name) => {
    name = name.toLowerCase();
    setShowFilter({
      price: false,
      bedrooms: false,
      type: false,
      distance: false,
      username: false,
      [name]: !showFilter[name],
    });
  };
  useEffect(() => {
    dispatch(loadProducts(filterBy)); // eslint-disable-next-line
  }, [filterBy]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "price") {
      setFilterBy({ ...filterBy, minPrice: value[0], maxPrice: value[1] });
    } else if (name === "bedrooms") {
      setFilterBy({ ...filterBy, minRooms: value[0], maxRooms: value[1] });
    } else if (name === "distance") {
      setFilterBy({
        ...filterBy,
        minDistance: value[0],
        maxDistance: value[1],
      });
    } else {
      setFilterBy({ ...filterBy, [name]: value });
    }
  };
  return (
    <nav className="NavbarItem">
      {/* <div className="menu-icon">
        <i className="fas fa-bars"></i>
      </div> */}
      <div className="input-container">
        <div>
          <img src={location} className="search-icon" alt="" />
          <input
            type="text"
            placeholder={t("searchForLocation")}
            name="location"
            onChange={handleChange}
            className="input-t"
          />
        </div>
      </div>
      <div className="filterToggleBtn" onClick={filterClick}>
        <Preferences />
        <span>{t("filter")}</span>
      </div>
      <div className={click ? "buttons active" : "buttons"}>
        <button className="head-btn" onClick={() => toggleFilter("price")}>
          <img src={prices} className="price-icon" alt="" />
          <span className="price">{t("Price")}</span>
        </button>
        <button className="head-btn" onClick={() => toggleFilter("bedrooms")}>
          <img src={bed} className="price-icon" alt="" />
          {t("bedrooms")}
        </button>
        <button className="head-btn" onClick={() => toggleFilter("type")}>
          <img src={hotel} className="price-icon" alt="" />
          {t("PropertyType")}
        </button>
        <button className="head-btn" onClick={() => toggleFilter("username")}>
          <img src={seller} className="price-icon"  alt="" />
          {t("whoIsTheSeller")}
        </button>
        <button className="head-btn" onClick={() => toggleFilter("distance")}>
          <img src={filter} className="price-icon" alt="" />
          {t("additionalFilters")}
        </button>
        {showFilter.price && (
          <Filter
            name="price"
            handleChange={handleChange}
            filterBy={filterBy}
          />
        )}
        {showFilter.bedrooms && (
          <Filter
            name="bedrooms"
            handleChange={handleChange}
            filterBy={filterBy}
          />
        )}
        {showFilter.type && (
          // <Filter name="type" handleChange={handleChange} filterBy={filterBy} />
          <TypeDropdown
            name="type"
            handleChange={handleChange}
            options={["apartment", "hotel"]}
          />
        )}
        {showFilter.username && (
          // <Filter name="name" handleChange={handleChange} filterBy={filterBy} />
          <Dropdown
            name="username"
            handleChange={handleChange}
            // options={["fadi", "adi"]}
          />
        )}
        {showFilter.distance && (
          <Filter
            name="distance"
            handleChange={handleChange}
            filterBy={filterBy}
          />
        )}
      </div>
      <Badge badgeContent={4} color="primary" className="preferenceBtn">
        <button className="preferences"> {t("myPreferences")}</button>
      </Badge>
    </nav>
  );
}
export default Head;