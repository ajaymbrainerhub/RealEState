import React from 'react';
import '../../App.css';
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className='home'>{t("midle")}</h1>
    </>
  );
}
