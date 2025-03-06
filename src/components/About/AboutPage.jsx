import './AboutPage.css';
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { TbRoute } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandVite } from "react-icons/tb";

function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-title">Sobre este Proyecto</h1>

      <section className="about-section">
        <h2 className="about-subtitle">Objetivo</h2>
        <p className="about-description">
          Este proyecto tiene como objetivo proporcionar a los usuarios una
          forma rápida y fácil de buscar información sobre películas, obtener
          detalles como el título, fecha de estreno, calificación y otros
          aspectos relevantes.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle tech">Tecnologías Utilizadas</h2>
        <div className="tech-cards">
          <div className="tech-card">
            <FaReact className="tech-icon react" />
            <h3>React</h3>
            <p  className='tech-description'>Frontend y componentes interactivos.</p>
          </div>

          <div className="tech-card">
            <FaCss3 className="tech-icon css" />
            <h3>CSS</h3>
            <p  className='tech-description'>Diseño responsive y maquetación.</p>
          </div>

          <div className="tech-card">
            <BiNetworkChart className="tech-icon api" />
            <h3>APIs</h3>
            <p className='tech-description'>Consumo de datos en tiempo real.</p>
          </div>

          <div className="tech-card">
            <TbRoute className="tech-icon router" />
            <h3>React Router</h3>
            <p  className='tech-description'>Navegación entre páginas.</p>
          </div>

          <div className="tech-card">
            <IoLogoJavascript className="tech-icon js" />
            <h3>JavaScript</h3>
            <p  className='tech-description'>Funciones modernas y optimizadas.</p>
          </div>

          <div className="tech-card">
            <TbBrandVite className="tech-icon js" />
            <h3>Vite</h3>
            <p  className='tech-description'>Optimización del rendimiento de desarrollo y producción.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Desafíos y Soluciones</h2>
        <p className="about-description">
          Uno de los principales desafíos fue integrar de manera eficiente la API de TMDb y manejar correctamente los datos asincrónicos.
        </p>
      </section>

      <section className="credits">
        <h2>Créditos</h2>
        <p>
          Este proyecto utiliza la API de <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB</a> para obtener datos sobre películas.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
