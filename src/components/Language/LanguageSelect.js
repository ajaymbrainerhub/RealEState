import React, { useState, useEffect } from "react";
import i18next from "i18next";
import En from "../../assets/En.png";
import Fr from "../../assets/Fr.png";
import Ru from "../../assets/Ru.jpg";
import He from "../../assets/He.png";
import Ar from "../../assets/Ar.jpg";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import { useTranslation } from "react-i18next";

const LanguageSelect = () => {
  const languageMap = {
    en: { label: "English", dir: "ltr", active: true, img: En },
    fr: { label: "Français", dir: "ltr", active: false, img: Fr },
    ru: { label: "русский", dir: "ltr", active: false, img: Ru },
    he: { label: "עִברִית", dir: "rtl", active: false, img: He },
    ar: { label: "العربية", dir: "rtl", active: false, img: Ar },
  };
  const selected = localStorage.getItem("i18nextLng") || "en";

  useEffect(() => {}, []);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = languageMap[selected]?.dir;
  }, [menuAnchor, selected]);

  return (
    <div className="d-flex justify-content-end align-items-center language-select-root">
      <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
        {selected === "en-US"
          ? languageMap["en"]?.label
          : languageMap[selected]?.label}

        <ArrowDropDown fontSize="small" />
      </Button>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div>
          <List>
            <ListSubheader>{t("select_language")}</ListSubheader>
            {Object.keys(languageMap)?.map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                <img
                  src={languageMap[item].img}
                  alt=""
                  height={20}
                  width={20}
                />
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>

    // <div>
    //   <InputLabel>Language Select</InputLabel>
    //   <Select value={lang} label="Lang" onChange={handleLanguage}>
    //     <MenuItem value="en">
    //       <img width="20" src={En} alt="" />
    //       English
    //     </MenuItem>
    //     <MenuItem value="fr">
    //       <img width="20" src={Fr} alt="" />
    //       français
    //     </MenuItem>
    //     <MenuItem value="ru">
    //       <img width="20" src={Ru} alt="" />
    //       русский
    //     </MenuItem>
    //     <MenuItem value="he">
    //       <img width="20" src={He} alt="" />
    //       עִברִית
    //     </MenuItem>
    //     <MenuItem value="ar">
    //       <img width="20" src={Ar} alt="" />
    //       عربى
    //     </MenuItem>
    //   </Select>
    // </div>
  );
};
export default LanguageSelect;
