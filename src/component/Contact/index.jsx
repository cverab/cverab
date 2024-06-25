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
    background-color: white;
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
    font-size: 1rem;
    @media (max-width: 640px) {
        padding: 0 1rem;
        margin: 1rem 0;
        font-size: 0.875rem;
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
    ;
function Contact({ oldSchool }) {
    const contenido = "¡Siempre estoy emocionado por aprender más y enfrentar nuevos desafíos! Si tienes alguna pregunta o quieres colaborar en un proyecto, ¡no dudes en contactarme!";

    const enlaces = [
        { href: "https://github.com/cverab", texto: "Github", icono: faGithub },
        { href: "https://co.linkedin.com/in/cverab", texto: "Linkedin", icono: faLinkedin },
        { href: "mailto:cverab@outlook.com", texto: "Correo Electrónico", icono: faEnvelope }
    ];
    return (
        <>
            {oldSchool ?
                <div className="container">
                    <table className="table-old">
                        <tbody>
                            <tr>
                                <td>
                                    <h1 className="h1-old">Contacto</h1>
                                    <p className="p-old">{contenido}</p>
                                    <ul className="ul-old">
                                        {enlaces.map((enlace, index) =>
                                            <li className="li-old" key={index}><a href={enlace.href}>{enlace.texto}</a></li>
                                        )}
                                    </ul>
                                    <hr></hr>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                :
                <Container>
                    <Contenido>
                        <Titulo>
                            Contacto
                        </Titulo>
                        <Parrafo>{contenido}</Parrafo>
                        <List>
                            {enlaces.map((enlace, index) =>
                                <Item key={index}><FontAwesomeIcon icon={enlace.icono} style={{ color: 'black', paddingRight: '10px' }} /><a href={enlace.href}>{enlace.texto}</a></Item>
                            )}
                        </List>
                    </Contenido><Fondo alt='Photo by Ann poan from Pexels: https://www.pexels.com/photo/workplace-with-laptop-and-opened-diary-5797903/'></Fondo>
                </Container>
            }
        </>
    )
}

export default Contact