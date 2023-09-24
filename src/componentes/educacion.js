import "../styles/educacion.css";
export const Educacion = (data) => {
  const EDUCACION = (
    <div id={`educacion`}>
      <div id={`titulo_educacion`}>
        <h2>EDUCACION </h2>
      </div>

      {data.map((info) => (
        <div id={`detalle_educacion`} key={info.nombre_carrera}>
          <hr />
          <h2>{info.nombre_universidad} </h2>
          <h3>{info.nombre_carrera} </h3>
          <li>{info.aficcion} </li>
          <p>
            <strong>
              <em>{`${info.fecha_ingreso_universidad} : ${info.fecha_salida_universidad}`}</em>
            </strong>
          </p>
        </div>
      ))}
    </div>
  );

  return EDUCACION;
};
