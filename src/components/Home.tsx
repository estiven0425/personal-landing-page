export default function Home() {
  return (
    <>
      <h1 className="mainHomeSlogan">¡Hola! Soy Estiven Montoya</h1>
      <h2 className="mainHomeImportant">Desarrollador Fullstack especializado en crear soluciones escalables con .NET y React.</h2>
      <p className="mainHomeDescription">
          Aquí encontrarás cómo transformo ideas complejas en software robusto, combinando lógica de backend potente con interfaces de usuario modernas.
      </p>
      <a
        className="mainHomeButton"
        href={"#mainAboutUs"}
        title="Navegar a acerca de mi"
      >
        Hablemos de código
      </a>
    </>
  );
}
