import Avatar from '../img/eu.jpg';

import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Pedro Lucas" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks/>
            <p>informações de contato</p>
            <a href="" className="btn">Download currículo</a>
        </aside>
    );
};

export default Sidebar