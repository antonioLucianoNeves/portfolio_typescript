import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialnetworkcontainer = [
    {name: "linkedin", icon: <FaLinkedinIn/>},
    {name: "github", icon: <FaGithub/>},
    {name: "instagram", icon: <FaInstagram/>},
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
        {socialnetworkcontainer.map((network) => (
           
              <a href="https://www.linkedin.com/in/antoniolucianorodrigues/" className="social-btn" id={network.name} key={network.name}>
                  {network.icon}
              </a>
         
           
            

        ))}
    </section>
  )
}

export default SocialNetworkContainer