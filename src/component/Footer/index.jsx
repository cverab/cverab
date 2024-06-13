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
  `
  ;
const Footer = ({ autor, back, oldSchool }) => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {oldSchool ? <div className='container'>
        <table className='table-old'>
          <tr>
            <td>
              <h3 className='h3-old'>Desarrollado por: {autor} &#xa9; {currentYear}</h3>
            </td>
          </tr>
        </table>
      </div>
        :
        <StyledFooter style={{ backgroundColor: `${back}` }}>Desarrollado por: {autor} &#xa9; {currentYear}</StyledFooter >
      }
    </>
  )
};

export default Footer;