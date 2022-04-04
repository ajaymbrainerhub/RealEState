import "./dropdown.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import img from "../../assets/imgs/user.jpeg";
import { useTranslation } from "react-i18next";

export default function Dropdown() {
  const { t } = useTranslation();
  return (
    <>
      <div className="dropdown">
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={user}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="50"
                src={img}
                // srcSet={img}
                alt=""
              />
              {option.label}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label={t("chooseUsers")}
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
      </div>
    </>
  );
}
const user = [
  {label: "fadi"},
  {label: "Adi"},
  {label: "fadi" },
  {label: "Adi"},
];