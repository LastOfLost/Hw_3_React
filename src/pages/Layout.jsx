import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import style from "../style/layout.module.css"
import themes from "../style/weather_style/themes.module.css"
import { useAppContext } from "../utils/AppProvider";

export default function Layout() {
  const {isDarkMode} = useAppContext();

  return (
    
    <div className={`${style.div_layout} ${isDarkMode ? themes.dark_theme : themes.light_theme} ${themes.univesal_colors}`}>
      <Header />
      <Outlet />
    </div>
  );
}
