import {
  Datos_personales,
  Experiencia_laboral,
  Idiomas_hablados,
  Educacion,
  Iconos
} from "../datos";
export const Hv = () => {
  const hv = [
    {
      datos_personales: Datos_personales(),
      experiencia_laboral: [Experiencia_laboral()],
      idiomas_hablados: [Idiomas_hablados()],
      educacion: [Educacion()],
      iconos: [Iconos()]
    }
  ];

  return hv;
};
