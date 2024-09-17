import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'

const ItemContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        margin-right: 1rem;
        justify-content: space-between;
        border: 1px solid black;
        width: 14.5rem;
        height: 15rem; 
        padding: 1rem;
        background-size: cover;
        @media (max-width: 768px) {
            width: 15.5rem;
        }
        @media (max-width: 425px) {
            padding: 0.5rem;
            width: 100%;
            height: 10rem;
            margin-right: 0; 
        }
        @keyframes destacar{
            from {
                box-shadow: none;
                }
            to {
                box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 1);
            }
        }
        @keyframes nodestacar{
            from {
                box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 1);
            }
            to {
                box-shadow: none;
            }
        }
        &:hover {
        animation-duration: 0.1s;
        animation-name: destacar;
        box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 1);
        }
        &:not(:hover) {
        animation-duration: 0.1s;
        animation-name: nodestacar;
        box-shadow: none;
        }
`;
const Icons = styled.div`
        display: flex;
        justify-content: right;
        padding: 0,25rem;
        width: auto;
`;
const Paragraph = styled.div`
        display: flex;
        align-items: end;
        justify-content: flex-end;
        flex-direction: column;
        padding: 0,25rem;
        width: auto;
        h3 {
            background-color: rgba(250, 250, 250, 0.8);
            font-size: 1.5rem;
            margin:0;
            @media (max-width: 425px) {
                font-size: 1.2rem;
            }
        }
        p {
            background-color: rgba(250, 250, 250, 0.8);
            font-size: 1rem;
        }
        a {
            color: black;
            @keyframes destacarlink{
            from {
                color: black;
                }
            to {
            color:#FFB923;
                }
            }
            @keyframes nodestacarlink{
            from {
                color:#FFB923;
                }
            to {
                color: black;
                }
            }
        }
        a:link {
        }
        a:visited {
            background-color: white;
            color: black;
        }
        a:focus {
        }
        a:hover {
            animation-duration: 0.5s;
            animation-name: destacarlink;
            color:#FFB923;
            transform: {rotate: 42};
        }
        a:not(:hover) {
            animation-duration: 0.5s;
            animation-name: nodestacarlink;
            color: black;
        }
        a:active {
        }
    `;
export function Item({ fondo, titulo, pageUrl, demoUrl, javascript, html, css, react, institucion, url }) {
    const iconos = [
        { name: html, icon: faHtml5, alt: "HTML5" },
        { name: css, icon: faCss3Alt, alt: "CSS3" },
        { name: javascript, icon: faJs, alt: "Javascript" },
        { name: react, icon: faReact, alt: "React" }
    ];
    return (
        <ItemContainer alt={titulo} style={{ backgroundImage: `linear-gradient(49deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1)), url(${fondo})` }} >
            <Icons>
                {iconos.map((tech, i) => {
                    if (tech.name) {
                        return (
                            <FontAwesomeIcon
                                key={i}
                                alt={tech.alt}
                                title={tech.alt}
                                icon={tech.icon}
                                size="2x"
                                style={{ marginLeft: '10px' }}
                            />
                        );
                    }
                    return null;
                })}
            </Icons>
            <Paragraph>
                <h3>{titulo}</h3>
                <Icons>
                    {pageUrl ? <a href={pageUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} alt="Código del proyecto" title="Código del proyecto" size="2x" style={{ marginLeft: '10px' }} /></a> : null}
                    {pageUrl ? <a href={demoUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} alt="Demo del proyecto" title="Demo del proyecto" size="2x" style={{ marginLeft: '10px' }} /></a> : null}
                    {url && institucion ? <a href={url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} alt={institucion} title={institucion} size="2x" style={{ marginLeft: '10px' }} /></a> : null}
                </Icons>
            </Paragraph>
        </ItemContainer>
    );
};