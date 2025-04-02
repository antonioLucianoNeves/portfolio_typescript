import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
  } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "typescript", name: "Typescript", icon: <SiTypescript /> },
    { id: "csharp", name: "C#", icon: <PiFileCSharp /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies?.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p> com projetos Web.</p>
              </div>
            </div>
            
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;