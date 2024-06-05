import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Contacto from "./contacto.jpg";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
`
const Contenido = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    align-items: center;
    @media (max-width: 425px) {
        width: 100%;
    }
`
const Fondo = styled.div`
    margin: auto;
    flex-direction: column;
    align-content: end;
    background-image: url(${Contacto});
    background-size: cover;
    background-position: center;
    width: 40%;
    height: 400px;
    @media (max-width: 640px) {
        height: 208px;
    }
    @media (max-width: 425px) {
        display: none;
    }
`
const Titulo = styled.h2`
    padding: 0 2rem;
    margin: 2rem 0;
    font-size: 2rem;
    color: black;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    @media (max-width: 425px) {
        font-size: 1.5rem;
    }
`
const Parrafo = styled.p`
    margin: 2rem 0;
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
    a {
        color:black;
        text-decoration: none;
        }
        a:link {
        }
        a:visited {
            background-color: white;
            color: black;
        }
        a:focus {
        }
        a:active {
        }
`
function Contact() {
    return (
        <Container>
            <Contenido>
                <Titulo>
                    Contacto
                </Titulo>
                <Parrafo>¡Siempre estoy emocionado por aprender más y enfrentar nuevos desafíos! Si tienes alguna pregunta o quieres colaborar en un proyecto, ¡no dudes en contactarme!</Parrafo>
                <List>
                    <Item><FontAwesomeIcon icon={faGithub} style={{ color: 'black', paddingRight: '10px' }} /><a href="https://github.com/cverab">Github</a></Item>
                    <Item><FontAwesomeIcon icon={faLinkedin} style={{ color: 'black', paddingRight: '10px' }} /><a href="https://co.linkedin.com/in/cverab">Linkedin</a></Item>
                    <Item><FontAwesomeIcon icon={faEnvelope} style={{ color: 'black', paddingRight: '10px' }} /><a href="mailto:cverab@outlook.com">Correo Electrónico</a></Item>
                </List>
            </Contenido><Fondo alt='Photo by Ann poan from Pexels: https://www.pexels.com/photo/workplace-with-laptop-and-opened-diary-5797903/'></Fondo>
        </Container>
    )
}

export default Contact