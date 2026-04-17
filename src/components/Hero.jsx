import "../styles/Hero.css";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="home" className="hero fade-in">
      <h1>Hi, I'm Poorna Chandra Sai Venkat 👋</h1>

      <h2 className="typing">
        <Typewriter
          words={[
            "Frontend Developer",
            "React Developer",
            "UI Designer",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
        />
      </h2>

      <p>Building modern, responsive and interactive web apps</p>

      <div className="hero-buttons">
        <a href="#projects">
          <button>View Projects</button>
        </a>

        <div className="hero-buttons">
          <a href="/resume.pdf" download className="resume-btn">
            Download Resume
          </a>

          <a href="/resume.pdf" target="_blank" className="resume-btn">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;