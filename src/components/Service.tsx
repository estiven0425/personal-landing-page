import cSharp from "../assets/img/Csharp.svg";
import css from "../assets/img/css.svg";
import expressJS from "../assets/img/express.svg";
import git from "../assets/img/git.svg";
import html from "../assets/img/html.svg";
import js from "../assets/img/js.svg";
import nodeJS from "../assets/img/nodejs.svg";
import mySQL from "../assets/img/mysql.svg";
import netFramework from "../assets/img/net_framework.svg";
import oracle from "../assets/img/oracle.svg";
import php from "../assets/img/php.svg";
import reactJS from "../assets/img/react.svg";
import sass from "../assets/img/sass.svg";
import ts from "../assets/img/ts.svg";

export default function Service() {
  return (
    <>
      <h2 className="mainServiceTitle">
        Mis <span>destrezas</span>
      </h2>
      <article className="mainServiceContainer">
        <div className="mainServiceContainerItem">
          <i className="bi bi-exclamation-circle-fill mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">Capacidad analítica</h3>
          <p className="mainServiceContainerItemDescription">
            Especialista en el desglose de problemas complejos y levantamiento de requerimientos.
            Analizo la causa raíz y el impacto de negocio para diseñar soluciones técnicas precisas y escalables
          </p>
        </div>
        <div className="mainServiceContainerItem">
          <i className="bi bi-file-earmark-fill mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">Requisitos y documentación</h3>
          <p className="mainServiceContainerItemDescription">
            Gestión del ciclo documental de proyectos (SDLC) mediante la creación de diagramas de arquitectura,
            casos de uso, historias de usuario y manuales técnicos detallados, garantizando la trazabilidad del software.
          </p>
        </div>
        <div className="mainServiceContainerItem">
          <i className="bi bi-bug-fill mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">
            Resolución de problemas
          </h3>
          <p className="mainServiceContainerItemDescription">
            Capacidad de convertir retos técnicos en productos terminados.
            Desde la identificación del error hasta el despliegue de la solución, enfocado siempre en la satisfacción del cliente y la estabilidad del sistema
          </p>
        </div>
        <div className="mainServiceContainerItem">
          <i className="bi bi-magic mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">UI/UX Design</h3>
          <p className="mainServiceContainerItemDescription">
            Creación de interfaces de usuario intuitivas y funcionales.
            Mi enfoque une la estética con la usabilidad, permitiendo que el usuario interactúe con el sistema de forma fluida y eficiente.
          </p>
        </div>
        <div className="mainServiceContainerItem">
          <i className="bi bi-boxes mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">Arquitectura y Clean Code</h3>
          <p className="mainServiceContainerItemDescription">
            Diseño de infraestructuras de software bajo patrones sólidos (MVVM, MVC).
            Estructuro código fuente modular y mantenible, priorizando la separación de responsabilidades y las mejores prácticas de la industria.
          </p>
        </div>
        <div className="mainServiceContainerItem">
          <i className="bi bi-list-columns-reverse mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">Semántica y SEO Técnico</h3>
          <p className="mainServiceContainerItemDescription">
            Implementación de estándares modernos de HTML5 y sintaxis limpia,
            asegurando accesibilidad universal, alto rendimiento en carga y una indexación óptima para motores de búsqueda.
          </p>
        </div>
        <div className="mainServiceContainerItem">
          <i className="bi bi-globe-americas-fill mainServiceContainerItemIcon"></i>
          <h3 className="mainServiceContainerItemTitle">Buenas Prácticas y Escalabilidad</h3>
          <p className="mainServiceContainerItemDescription">
            Aplicación rigurosa de convenciones de código (Clean Code),
            facilitando el trabajo colaborativo en equipo y asegurando que el software pueda crecer sin generar deuda técnica.
          </p>
        </div>
      </article>
      <article className="mainServiceContainer">
        <div className="mainServiceContainerItem">
          <img
            alt="HTML"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={html}
            title="HTML (Avanzado)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="CSS"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={css}
            title="CSS (Avanzado)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="JavaScript"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={js}
            title="JavaScript (Avanzado)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="SASS/SCSS"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={sass}
            title="SASS/SCSS (Avanzado)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="TypeScript"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={ts}
            title="TypeScript (Intermedio)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="ReactJS"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={reactJS}
            title="ReactJS (Avanzado)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="ExpressJS"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={expressJS}
            title="ExpressJS (Intermedio)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="NodeJS"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={nodeJS}
            title="NodeJS (Intermedio)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="MySQL"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={mySQL}
            title="MySQL (Avanzado)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
              alt="C#"
              className="mainServiceContainerItemImg"
              decoding="async"
              src={cSharp}
              title="C# (Intermedio)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
              alt=".NET"
              className="mainServiceContainerItemImg"
              decoding="async"
              src={netFramework}
              title=".NET (Intermedio)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
              alt="Oracle"
              className="mainServiceContainerItemImg"
              decoding="async"
              src={oracle}
              title="Oracle (Intermedio)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="PHP"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={php}
            title="PHP (Bajo)"
          />
        </div>
        <div className="mainServiceContainerItem">
          <img
            alt="Git"
            className="mainServiceContainerItemImg"
            decoding="async"
            src={git}
            title="Git (Intermedio)"
          />
        </div>
      </article>
    </>
  );
}
