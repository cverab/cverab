import { useState, useEffect } from 'react'
import { Item } from '../Item';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 5rem;
    width: 100%;
    @media (max-width: 640px) {
        padding: 0 1rem;
    }
  `;

const Grupo = ({ jsonUrl, oldSchool }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(data => setItems(data))
  }, [jsonUrl]);

  return (
    <>
      {oldSchool ?
        <ul className='ul-old'>
          {items.map((item, i) => (
            <li className='li-old' key={i}>{item.titulo}: {(item.pageurl && item.demoUrl) ? <><a href={item.pageurl}>Repositorio</a> | <a href={item.demoUrl}>Demo</a></> : ''}{(item.institucion && item.url) ? <><a href={item.url}>{item.institucion}</a></> : ''}</li>))}
        </ul> :
        <Container>
          {items.map((item, i) => (
            <Item key={i} fondo={item.fondo} titulo={item.titulo} descripcion={item.descripcion} pageUrl={item.pageurl} demoUrl={item.demoUrl} html={item.html} css={item.css} javascript={item.javascript} react={item.react} url={item.url} institucion={item.institucion} />
          ))}
        </Container>
      }
    </>
  );
};

export default Grupo;