import { Datos_personales } from "./componentes/datos_personales";
import { Educacion } from "./componentes/educacion";
import { Experiencia_laboral } from "./componentes/experiencia_laboral";
import { Idiomas } from "./componentes/idiomas";
export default function Home(data) {
  const HV = (
    <>
      <div className={`wrapper cf`}>
        <div className={`content`}>
          {Datos_personales(data[0].datos_personales, data[0].iconos[0])}
          <br />
        </div>
        <div className={`sidebar`}>
          {Educacion(data[0].educacion)}
          {Experiencia_laboral(data[0].experiencia_laboral)}
        </div>
      </div>
    </>
  );
  return HV;
}
