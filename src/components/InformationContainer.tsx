
import "../styles/components/informationcontainer.sass"

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

const InformationContainer = () => {
  return (
    <section id ="information">
      <div className ="info-card">
        <AiFillPhone id ="phone-icon" />
          <div>
            <h3>Telefone</h3>
            <p>(62)98571-4412</p>
          </div>
        </div>
        <div className ="info-card">
          <AiOutlineMail id ="email-icon" />
           <div>
            <h3>E-mail</h3>
            <p>a_luciano10@hotmail.com</p>
            </div>
        </div>
        <div className ="info-card">
          <AiFillEnvironment id ="pin-icon" />
          <div>
            <h3>Localização</h3>
            <p>Goiânia - Go</p>
          </div>
      </div>
    </section>
  )
}

export default InformationContainer