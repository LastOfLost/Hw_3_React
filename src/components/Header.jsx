import React from "react";
import style from "../style/header.module.css";
import { NavLink } from "react-router-dom";
import colors from "../style/colors.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={style.logoHeader}>Maxvel</h1>
      <nav className={style.navigation}>
        <NavLink className={style.nav_link} to="/news">
          News
        </NavLink>
        <NavLink className={style.nav_link} to="/weather">
          Weather
        </NavLink>
        <NavLink className={style.nav_link} to="/blog">
          Blog
        </NavLink>
      </nav>
    </header>
  );
}
