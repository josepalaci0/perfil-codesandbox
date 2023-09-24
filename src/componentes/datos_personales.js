import "../styles/datos_personales.css";
export const Datos_personales = (datos, iconos) => {
  const DATOS_PERSONALES = (
    <div>
      <img id={`imag_perfil`} src={datos.foto_perfil} alt="imagenes" />

      <div id={`tarjeta_presentacion`}>
        <br />
        <div id={`tarjeta_presentacion_info`}>
          <div id="dowload_tarjeta_presentacion">
            <a
              href={`https://www.canva.com/design/DAFD6jQ4IUQ/tX_-2mVUAqanU4t82OXJbQ/edit?utm_content=DAFD6jQ4IUQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`}
            >
              <img src={iconos.dowload} alt="dowload" />
            </a>

            <h1>{datos.nombre}</h1>
          </div>
        </div>
        <div id={`contacto`}>
          <b>
            <h3>CONTACTO</h3>
          </b>
        </div>
        <div id={`contacto_info`}>
          <p id={`contacto_detalle`}>
            <img src={iconos.email} alt="email" />
            {`    ${datos.correo}`}
          </p>
          <p id={`contacto_detalle`}>
            <img src={iconos.telefono} alt="email" />
            {`    ${datos.celular}`}
          </p>
          <p id={`contacto_detalle`}>
            <img src={iconos.direccion} alt="email" />
            {`    ${datos.direccion}`}
          </p>
        </div>
      </div>
    </div>
  );
  return DATOS_PERSONALES;
};
