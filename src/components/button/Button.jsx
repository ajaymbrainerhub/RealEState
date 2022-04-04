import React from "react";
import "../button/Button.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export function Button() {
  const { t } = useTranslation();
  return (
    <div className="buttonss d-lg-block">
      <Link to="login">
        <button className="login-btn"> {t("login")}</button>
      </Link>

      <Link to="StartForFree">
        <button className="startforfree-btn">{t("startForFree")}</button>
      </Link>
    </div>
  );
}
