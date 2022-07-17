import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";

import '../styles/components/informationContainer.sass';

const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(88) 99999-9999</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>pedro@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Juazeiro do Norte / CE</p>
                </div>
            </div>
        </section>
    )
};

export default InformationContainer;