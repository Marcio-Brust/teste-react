import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.h1}>Márcio Brust</h1>
      <button className={style.btn}>Light</button>
    </header>
  );
};

export default Header;
