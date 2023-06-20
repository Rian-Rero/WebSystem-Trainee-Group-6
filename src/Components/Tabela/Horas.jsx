import React from "react";

const Horas = ({ horas, minutos }) => {
  return (
    <span>
      {horas} {horas === 1 ? "hora" : "horas"} {minutos}{" "}
      {minutos === 1 ? "minuto" : "minutos"}
    </span>
  );
};

export default Horas;
