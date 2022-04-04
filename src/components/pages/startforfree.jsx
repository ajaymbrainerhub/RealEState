import "./start-free.css";
import React from "react";
import { useTranslation } from "react-i18next";

function StartForFree() {
  const { t } = useTranslation();

  return (
    <form className="wrap">
      <div className="namee">
        <input type="text" placeholder={t("firstName")} autofocus />
        <input type="text" placeholder={t("lastName")} />
      </div>
      <div className="info">
        <input
          type="number"
          id="age"
          name="age"
          className="age"
          step="1"
          placeholder="62+"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="phone"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
        <select className="selected" name="option">
          <option value="" disabled selected>
            Your Country
          </option>
          <option value="1">Israel</option>
          <option value="2">Israel</option>
          <option value="3">Israel</option>
        </select>
      </div>
      <div className="email">
        <input
          type="email"
          className="mail"
          autocomplete="off"
          placeholder={t("mailAddress")}
        />
      </div>

      <div className="pass">
        <input type="text" className="password" placeholder={t("password")} />
        <input
          type="text"
          className="confirmPassword"
          placeholder={t("confirmPassword")}
        />
      </div>

      <div className="yourself">
        <label className="about" for="story">
          {t("tellUsAboutYourself")}
        </label>
        <textarea
          className="story"
          id="story"
          name="story"
          rows="5"
          cols="33"
          placeholder={t("tellUsAboutYourself")}
        ></textarea>
      </div>

      <div className="agree">
        {/* <input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/> */}
        <input type="checkbox" className="checkbooox" />
        <label className="labeel">
          {" "}
          {t("iAgreeToSquares")} <a href="/"> {t("cookies")}</a> {t("and")}{" "}
          <a href="/">{t("privacyPolicy")}</a>.{" "}
        </label>
      </div>

      <div className="btn-btn">
      <input className="lin" type="submit" value={t("login")} />
        <input className="sfree" type="submit" value={t("startForFree")} />
      </div>
    </form>
  );
}

export default StartForFree;
