import './AboutPage.css';
import { FaReact, FaCss3 } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandVite, TbRoute } from "react-icons/tb";

function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-title">About This Project</h1>

      <section className="about-section">
        <h2 className="about-subtitle">Objective</h2>
        <p className="about-description">
        This project aims to provide users with a quick and easy way to search for movie 
        information, including details such as title, release date, rating, and other relevant 
        aspects.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle tech">Technologies Used</h2>
        <ul className="tech-cards">
          <li className="tech-card">
            <FaReact className="tech-icon react" aria-label="React logo"/>
            <h3 className='tech-title'>React</h3>
            <p  className='tech-description'>Frontend and interactive components.</p>
          </li>

          <li className="tech-card">
            <FaCss3 className="tech-icon css" aria-label="CSS logo"/>
            <h3 className='tech-title'>CSS</h3>
            <p  className='tech-description'>Responsive design and layout.</p>
          </li>

          <li className="tech-card">
            <BiNetworkChart className="tech-icon api" aria-label="APIs icon"/>
            <h3 className='tech-title'>APIs</h3>
            <p className='tech-description'>Real-time data consumption.</p>
          </li>

          <li className="tech-card">
            <TbRoute className="tech-icon router" aria-label="React router icon"/>
            <h3 className='tech-title'>React Router</h3>
            <p  className='tech-description'>Page navigation.</p>
          </li>

          <li className="tech-card">
            <IoLogoJavascript className="tech-icon js" aria-label="JavaScript logo"/>
            <h3 className='tech-title'>JavaScript</h3>
            <p  className='tech-description'>Modern and optimized functions.</p>
          </li>

          <li className="tech-card">
            <TbBrandVite className="tech-icon js" aria-label="Vite logo"/>
            <h3 className='tech-title'>Vite</h3>
            <p  className='tech-description'>Development and production performance optimization.</p>
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Challenges and Solutions</h2>
        <p className="about-description">
        While integrating the TMDb API posed some challenges, the biggest hurdles came from designing a clean and responsive layout, as well as ensuring smooth CSS transitions and maintaining performance across devices. Adapting the navigation to work seamlessly on both mobile and desktop screens required careful attention to detail, particularly in making the navbar and components responsive and user-friendly.
        </p>
      </section>

      <section className="credits">
        <h2 className="about-subtitle">Credits</h2>
        <p className="about-description">
        This project uses the <a className='about-credit' href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB</a> API to get data about movies.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
