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

const Grupo = ({ jsonUrl }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(data => setItems(data))
  }, [jsonUrl]);

  return (
    <Container>
      {items.map((item, i) => (
        <Item key={i} fondo={item.fondo} titulo={item.titulo} descripcion={item.descripcion} pageUrl={item.pageurl} demoUrl={item.demoUrl} html={item.html} css={item.css} javascript={item.javascript} react={item.react} />
      ))}
    </Container>
  );
};

export default Grupo;