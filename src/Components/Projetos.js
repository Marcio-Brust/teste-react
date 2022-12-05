import React from "react";
import style from "./Projetos.module.css";
import foto1 from "../assets/img/artista-1.png";
import foto2 from "../assets/img/artista-2.png";
import foto3 from "../assets/img/artista-3.png";
import foto4 from "../assets/img/artista-4.png";
import foto5 from "../assets/img/artista-5.png";
import foto6 from "../assets/img/artista-6.png";

const fotos = [foto1, foto2, foto3, foto4, foto5, foto6];

const Projetos = () => {
  return (
    <section className={style.containerProjeto}>
      {fotos.map((foto, index) => (
        <div key={index + 1} className={style.projetos}>
          <img src={foto} alt={`Artista${index + 1}`}></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut{" "}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Projetos;
