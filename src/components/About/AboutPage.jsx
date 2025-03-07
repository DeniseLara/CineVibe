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
        <div className="tech-cards">
          <div className="tech-card">
            <FaReact className="tech-icon react" />
            <h3>React</h3>
            <p  className='tech-description'>Frontend and interactive components.</p>
          </div>

          <div className="tech-card">
            <FaCss3 className="tech-icon css" />
            <h3>CSS</h3>
            <p  className='tech-description'>Responsive design and layout.</p>
          </div>

          <div className="tech-card">
            <BiNetworkChart className="tech-icon api" />
            <h3>APIs</h3>
            <p className='tech-description'>Real-time data consumption.</p>
          </div>

          <div className="tech-card">
            <TbRoute className="tech-icon router" />
            <h3>React Router</h3>
            <p  className='tech-description'>Page navigation.</p>
          </div>

          <div className="tech-card">
            <IoLogoJavascript className="tech-icon js" />
            <h3>JavaScript</h3>
            <p  className='tech-description'>Modern and optimized functions.</p>
          </div>

          <div className="tech-card">
            <TbBrandVite className="tech-icon js" />
            <h3>Vite</h3>
            <p  className='tech-description'>Development and production performance optimization.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Challenges and Solutions</h2>
        <p className="about-description">
        While integrating the TMDb API posed some challenges, the biggest hurdles came from designing a clean and responsive layout, as well as ensuring smooth CSS transitions and maintaining performance across devices. Adapting the navigation to work seamlessly on both mobile and desktop screens required careful attention to detail, particularly in making the navbar and components responsive and user-friendly.
        </p>
      </section>

      <section className="credits">
        <h2>Credits</h2>
        <p>
        This project uses the <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDB</a> API to get data about movies.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
