
import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../Filter/Filter.css";
import { useTranslation } from "react-i18next";

function Filter({ handleChange, name, filterBy }) {
  const [values, setValues] = useState([]);
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    if (name === "price") {
      setValues([filterBy.minPrice, filterBy.maxPrice]);
    } else if (name === "bedrooms") {
      setValues([filterBy.minRooms, filterBy.maxRooms]);
    } else if (name === "distance") {
      setValues([filterBy.minDistance, filterBy.maxDistance]);
    }// eslint-disable-next-line
  }, [filterBy]);

  useEffect(() => {
    switch (name) {
      case "price":
        setMin(1000000);
        setMax(8000000);
        break;
      case "bedrooms":
        setMin(1);
        setMax(8);
        break;
      case "distance":
        setMin(0);
        setMax(3000);
        break;
      default:
        setMin(0);
        setMax(8000);
    }// eslint-disable-next-line
  }, []);

  return (
    <div className="filter">
      <h6 className="filterTitle">{t("yourBudget")}</h6>
      <div className="values ">
        <Slider
          value={values}
          onChange={handleChange}
          valueLabelDisplay="auto"
          name={name}
          max={max}
          min={min}
        />

        <div className="fromTo">
          <div className="value">
            <span className="from">{t("from")}</span>
            <div className="border">{values[0]}</div>
          </div>

          <div className="value">
            <span className="to">{t("to")}</span>
            <div className="border">{values[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
