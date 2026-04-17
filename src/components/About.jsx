import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="hidden">
      <h2>About Me</h2>

      <p className="about-text">
        I am <strong>Bommidi Poorna Chandra Sai Venkat</strong>, a passionate 
        and self-driven <strong>Frontend Developer</strong> currently pursuing 
        my <strong>B.Tech at NRI Institute of Technology</strong>. Alongside my 
        academics, I am actively enhancing my technical expertise through 
        <strong> NIAT (NextGen Institute of Advanced Technologies)</strong>.
      </p>

      <p className="about-text">
        I specialize in building <strong>modern, responsive, and user-friendly 
        web applications</strong> using technologies like <strong>React, 
        JavaScript, and CSS</strong>. I focus on writing clean code and creating 
        intuitive UI/UX experiences.
      </p>

      <p className="about-text">
        I consistently work on real-world projects, improving my problem-solving 
        skills and maintaining an active presence on GitHub. My goal is to 
        become a skilled developer capable of building scalable and impactful 
        applications.
      </p>

      <p className="about-text">
        I am currently seeking <strong>internship opportunities</strong> where I 
        can apply my knowledge, contribute to meaningful projects, and grow in 
        a professional environment.
      </p>

      <div className="about-links">
        <a
          href="https://github.com/saivenkat-954"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/poorna-chandra-sai-venkat954-bommidi-"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default About;