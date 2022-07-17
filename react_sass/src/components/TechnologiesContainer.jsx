import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiPhp,
    DiSass,
    DiBootstrap
} from 'react-icons/di'

import '../styles/components/tecnologiesContainer.sass'

const technologies = [
    {id: "html", name: "HTML5", icon: <DiHtml5/>},
    {id: "css", name: "CSS3", icon: <DiCss3/>},
    {id: "sass", name: "Sass", icon: <DiSass/>},
    {id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap/>},
    {id: "js", name: "JS", icon: <DiJsBadge/>},
    {id: "node", name: "Node", icon: <DiNodejsSmall/>},
    {id: "mysql", name: "Mysql", icon: <DiMysql/>},
    {id: "react", name: "React", icon: <DiReact/>},
    {id: "php", name: "PHP", icon: <DiPhp/>},
];

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className='technologies-grid'>
                {technologies.map((tech) => (
                    <div className='technology-card' id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer