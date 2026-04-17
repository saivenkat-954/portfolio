import "../styles/Projects.css";

const projectData = [
  {
    title: "Food Menu App",
    desc: "Dynamic React app with filtering",
    image: "/project1.png",
    github: "https://github.com/saivenkat-954",
  },
];

<div className="projects">
  {projectData.map((proj, i) => (
    <div className="project-card" key={i}>
      <img src={proj.image} alt="" />
      <h3>{proj.title}</h3>
      <p>{proj.desc}</p>

      <a href={proj.github} target="_blank">GitHub</a>
    </div>
  ))}
</div>

const Projects = () => {
  return (
    <section id="projects" className="hidden">
      <h2>Projects</h2>

      <div className="projects">

        <div className="project-card">
          <video controls className="project-video">
            <source src="/project1.mp4" type="video/mp4" />
          </video>

          <h3>Food Menu App</h3>
          <p>Dynamic React app with filtering</p>

          <a href="https://github.com/saivenkat-954" target="_blank">
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
