import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'

const SobreMi = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`
const Titulo = styled.h2`
    padding: 0 2rem;
    margin: 2rem 0;
    @media (max-width: 640px) {
        font-size: 2rem;
    }
`
const Subtitulo = styled.h4`
    padding: 0 2rem;
    margin: 2rem 0;
`
const Parrafo = styled.p`
    margin: 1.5rem 0;
    @media (max-width: 640px) {
        padding: 0 1rem;
        margin: 1rem 0;
    }
`
const List = styled.ul`
    padding: 0 5rem;
    @media (max-width: 640px) {
        padding: 0 1rem;
        }
`
const Item = styled.li`
    list-style: none;
`
function About() {
    return (
        <SobreMi>
            <Titulo>Acerca de mí</Titulo>
            <Parrafo>¡Hola! Soy un apasionado autodidacta de la programación web con experiencia en HTML, CSS, JavaScript, React y Wordpress. Resido en la ciudad de Ibagué, Colombia. A lo largo de los años, he participado en la creación de algunos sitios web y también he trabajado en proyectos personales para seguir mejorando mis habilidades.</Parrafo>
            <Parrafo>Desde que tenía catorce años, me ha apasionado la creación de páginas web estáticas utilizando HTML. Mi travesía en el mundo de la informática comenzó con mi primer ordenador, que funcionaba con Windows 95. Con el tiempo, descubrí el poder del CSS para dar estilo a mis páginas web y el uso de Javascript para automatizar diversas acciones. Estas habilidades han sido la base para el desarrollo de numerosos proyectos personales que he emprendido. A pesar de no contar con una formación formal en este campo, el aprendizaje autodidacta ha jugado un papel crucial en mi crecimiento y desarrollo profesional.</Parrafo>
            <Subtitulo>Mis habilidades clave:</Subtitulo>
            <List>
                <Item><FontAwesomeIcon icon={faFloppyDisk} style={{ color: 'black', paddingRight: '10px' }} />HTML: Creo estructuras sólidas y semánticas para páginas web.</Item>
                <Item><FontAwesomeIcon icon={faFloppyDisk} style={{ color: 'black', paddingRight: '10px' }} />CSS: Diseño estilos atractivos y responsivos para una experiencia visual agradable.</Item>
                <Item><FontAwesomeIcon icon={faFloppyDisk} style={{ color: 'black', paddingRight: '10px' }} />JavaScript: Implemento interacciones dinámicas y funcionales en mis proyectos.</Item>
                <Item><FontAwesomeIcon icon={faFloppyDisk} style={{ color: 'black', paddingRight: '10px' }} />React: Me encanta construir aplicaciones modernas utilizando esta biblioteca.</Item>
            </List>
        </SobreMi>
    )
}

export default About;