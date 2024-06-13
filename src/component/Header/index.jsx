import Desktop from "./desktop.jpg";
import Mobile from "./mobile.jpg";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  display: flex;
  background-color: #FFB923;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 640px) {
    padding: 0.5rem;
    }
`
const Fondo = styled.div`
  margin: auto;
  align-content: end;
  background-image: url(${Desktop});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  @media (max-width: 640px) {
    background-image: url(${Mobile});
    height: 208px;
    }
  `
const Textos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  `
const Titulo = styled.h1`
  color: white;
  margin: 0.2rem 0;
  @media (max-width: 640px) {
    font-size: 2rem;
    }
  `
const Subtitulo = styled.h3`
  color: white;
    margin: 0.2rem 0 3rem 0;
    @media (max-width: 640px) {
      margin: 0.2rem 0 0.3rem 0;
    }`
  ;
const Header = ({ autor, oficio, oldSchool }) => {
  return (
    <>
      {oldSchool ? <div className="container">
        <table className="table-old"><tr><td><h1 className="h1-old">{autor} - {oficio}</h1></td></tr></table>
      </div> :
        <Container>
          <Fondo alt="Photo by Vlad Bagacian from Pexels: https://www.pexels.com/photo/black-laptop-on-brown-table-1028443/">
            <Textos>
              <FontAwesomeIcon
                icon={faLaptopCode}
                size="4x"
                style={{
                  color: 'white',
                  textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)'
                }}
              />
              <Titulo>{autor}</Titulo>
              <Subtitulo>{oficio}</Subtitulo>
            </Textos>
          </Fondo>
        </Container>
      }
    </>
  )
};

export default Header;