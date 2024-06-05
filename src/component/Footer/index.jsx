import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  padding: 3rem 0;
  @media (max-width: 640px) {
    padding: 1rem 0;
    font-size: 0.8rem;
    }
  `;
const Footer = ({ autor, back }) => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter style={{ backgroundColor: `${back}` }}>Desarrollado por: {autor} / &#xa9; {currentYear}
    </StyledFooter >
  )
};

export default Footer;