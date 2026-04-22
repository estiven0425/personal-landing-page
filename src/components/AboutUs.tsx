import img from "../assets/img/about-us.jpeg";

export default function AboutUs() {
  return (
    <>
      <article className="mainAboutUsArticle">
        <h2 className="mainAboutUsArticleTitle">
          <span>Acerca</span> de mi
        </h2>
        <p className="mainAboutUsArticleText">
          Soy Estiven Montoya, desarrollador Fullstack ubicado en Medellín, Colombia. <br/>
          <br/>
          Mi trayectoria comenzó a los 16 años, curiosidad que rápidamente se convirtió en mi profesión. <br/>
          A lo largo de mi formación como Tecnólogo en el SENA y mi experiencia en el sector corporativo, he consolidado un perfil técnico sólido enfocado en el ecosistema <i>JavaScript/TypeScript</i> y el desarrollo de aplicaciones robustas <i>C#</i>. <br/>
          <br/>
          A mis 20 años, he consolidado un perfil híbrido que combina la agilidad del desarrollo web moderno con la robustez del software empresarial. <br/>
          Mi mayor fortaleza es la <b>adaptabilidad técnica</b>, descubrí mi gran afinidad y talento por el ecosistema <i>.NET (C#)</i>, <br/>
          donde he logrado desarrollar arquitecturas sólidas bajo patrones como <i>MVVM</i>, llevando mi lógica de programación a un nivel de madurez superior. <br/>
          <br/>
          <b>Mi enfoque técnico: </b>
          Más allá de escribir código, me apasiona la arquitectura de software. <br/>
          He liderado el ciclo completo de vida del desarrollo <i>(SDLC)</i>, desde el análisis de requerimientos y el diseño en Figma, hasta la implementación de APIs escalables y despliegues en producción. <br/>
          <br/>
          <b>Mi enfoque integra: </b>
          <ul>
            <li><b>Frontend:</b> Desarrollo de interfaces dinámicas y optimizadas con <i>React (Vite)</i>, <i>TypeScript</i> y <i>SCSS</i>, priorizando la semántica y la experiencia de usuario.</li>
            <li><b>Backend:</b> Diseño de lógica de servidor eficiente con <i>Node.js/Express</i> y <i>.NET</i>, incluida la gestión de bases de datos relacionales <i>(MySQL/Oracle)</i>.</li>
            <li><b>Calidad:</b> Implementación de buenas prácticas de arquitectura, código modular, control de versiones con Git y metodologías ágiles <i>(Scrum)</i>.</li>
          </ul>
          <b>Logros que definen mi perfil:</b>
          <ul>
            <li><b>Desarrollo Autónomo:</b> Diseñé y desplegué desde cero sistemas de gestión e inventarios para empresas del sector industrial, automatizando procesos que mejoraron la eficiencia operativa y el análisis de datos.</li>
            <li><b>Excelencia Académica:</b> Mi proyecto universitario fue reconocido como uno de los referentes de la facultad, destacando por su arquitectura y funcionalidad en entornos LAN.</li>
            <li><b>Aprendizaje Continuo:</b> Mi capacidad de adaptación me ha permitido dominar tecnologías corporativas complejas (PL/SQL, Oracle APEX) mientras mantengo mi enfoque en el desarrollo web moderno.</li>
          </ul>
          Entiendo la tecnología como un medio para generar un impacto real. Estoy en búsqueda de retos donde pueda aportar mi capacidad técnica y estratégica para llevar equipos y proyectos al siguiente nivel.
        </p>
      </article>
      <figure className="mainAboutUsFigure">
        <img
          alt="Estiven Montoya en un museo de arte"
          className="mainAboutUsFigureImg"
          decoding="async"
          src={img}
        />
      </figure>
    </>
  );
}
