// // import { Slider } from "@mui/material";
import "./dropdown.css"
import React  from "react";
import "../Filter/Filter.css";

function TypeDropdown({ handleChange, name,options }) {
  // const types = ["apratment", "hotel"];
  // const user owner=['fadi']
  return (
    <div className="dropdown">
      <select  className="dropdown1"> name={name}  onChange={handleChange} 
        {options.map((t) => {
          return (
            <option key={t} value={t}>
              {t}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default TypeDropdown;
