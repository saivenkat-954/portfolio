import "../styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="fade-in">
      <h2>Skills</h2>

      <div className="skills">
        <div className="card"><FaHtml5 /> HTML</div>
        <div className="card"><FaCss3Alt /> CSS</div>
        <div className="card"><FaJs /> JS</div>
        <div className="card"><FaReact /> React</div>
      </div>
    </section>
  );
};

export default Skills;
