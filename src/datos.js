import perfil from "./imagenes/fotoperfil.png";
import dowload from "./ico/dowload.png";
import email from "./ico/email.png";
import telefono from "./ico/llamada-telefonica.png";
import direccion from "./ico/localizacion.png";

export const Datos_personales = () => {
  const datos_personales = {
    foto_perfil: perfil,
    nombre: "Jose Gregorio",
    apellido: "palacio sanchez",
    correo: "jose.palacio@esap.edu.co",
    celular: "3202500887",
    direccion: "Anzaotegui Tolima"
  };
  return datos_personales;
};

export const Experiencia_laboral = () => {
  const experiencia_laboral = {
    nombre_empresa: "Exito",
    cargo_empresa: "programador",
    descripcion_trabajo: "nada bueno",
    fecha_inicio_trabajo: "01/02/2020",
    fecha_fin_trabajo: "20/05/2020"
  };
  return experiencia_laboral;
};

export const Idiomas_hablados = () => {
  const idiomas_hablados = ["ingles"];
  return idiomas_hablados;
};

export const Educacion = () => {
  const educacion = {
    nombre_universidad: "UNIVERSIDAD DEL TOLIMA",
    nombre_carrera: "Ingenieria de Sistemas",
    aficcion: "Desarrollador de Software",
    fecha_ingreso_universidad: "01/02/2055",
    fecha_salida_universidad: "20/20/2063"
  };
  return educacion;
};

export const Iconos = () => {
  const iconos = {
    dowload: dowload,
    email: email,
    telefono: telefono,
    direccion: direccion
  };
  return iconos;
};
