import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import style from "../style/layout.module.css"

export default function Layout() {
  return (
    <div class={style.div_layout}>
      <Header />
      <Outlet />
    </div>
  );
}
