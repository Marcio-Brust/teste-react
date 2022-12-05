import React from "react";
import style from "./Redes.module.css";
import svgFace from "../assets/svg/icons8-facebook-novo.svg";
import svgGit from "../assets/svg/icons8-git-30.svg";
import svgGamil from "../assets/svg/icons8-gmail.svg";
import svgLinkedin from "../assets/svg/icons8-linkedin-2.svg";
const svgs = [svgFace, svgGit, svgGamil, svgLinkedin];

const Redes = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        {svgs.map((svg, index) => (
          <li key={index}>
            <img src={svg} alt={svg}></img>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Redes;
