import "../styles/experiencia_laboral.css";
export const Experiencia_laboral = (data) => {
  const new_experiencia_laboral = {
    nombre_empresa: "Caruya",
    cargo_empresa: "programador",
    descripcion_trabajo: "nada bueno",
    fecha_inicio_trabajo: "01/02/2020",
    fecha_fin_trabajo: "20/05/2020"
  };
  data.push(new_experiencia_laboral);
  const EXPERIENCIA_LABORAL = (
    <div id={`experiencia_laboral`}>
      <div id={`titulo_experiencia_laboral`}>
        <h2>EXPERIENCIA </h2>
      </div>
      {data.map((info) => (
        <div id={`detalle_experiencia_laboral`} key={info.nombre_empresa}>
          <hr />
          <h2>{info.nombre_empresa} </h2>
          <h3>{info.cargo_empresa} </h3>
          <li>{info.descripcion_trabajo} </li>
          <p>
            <strong>
              <em>{`${info.fecha_inicio_trabajo} : ${info.fecha_fin_trabajo}`}</em>
            </strong>
          </p>
        </div>
      ))}
    </div>
  );

  return EXPERIENCIA_LABORAL;
};
