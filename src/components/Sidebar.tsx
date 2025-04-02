
import Avatar from "../img/Foto.png";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetworkContainer from "./SocialNetworkContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Antonio Luciano" />
      <p className="title">Desenvolvedor Web</p>
      <SocialNetworkContainer/>
      <InformationContainer/>
      <a href="https://docs.google.com/document/d/1NUxcmlG2cn542lW_y6ZC9ECJNJbVh_iozLCJuwZwDlA/edit?tab=t.0" className="btn">
        Download Concluído
      </a>
    </aside>
  )
}

export default Sidebar