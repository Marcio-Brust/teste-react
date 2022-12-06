import React from "react";
import style from "./Header.module.css";

const Header = () => {
  function handleClick({ target }) {
    const body = document.querySelector("body");
    body.classList.toggle("light");
    if (body.classList.contains("light")) {
      target.innerHTML = "Dark";
    } else {
      target.innerHTML = "Light";
    }
  }

  return (
    <header className={style.header}>
      <h1 className={style.h1}>Márcio Brust</h1>
      <button className={style.btn} onClick={handleClick}>
        Light
      </button>
    </header>
  );
};

export default Header;
