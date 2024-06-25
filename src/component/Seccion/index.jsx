import styled from 'styled-components';
import Grupo from '../Grupo';

const Container = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
    `
const Titulo = styled.h2`
        padding: 0 2rem;
        margin: 2rem 0;
        font-size: 2rem;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        @media (max-width: 425px) {
            font-size: 1.5rem;
        }
    `
const GrupoOld = styled(Grupo)`
    width: 640px;
`
    ;
function Seccion({ title, jsonUrl, back, color, oldSchool }) {
    return (
        <>
            {oldSchool ?
                <div className='container'>
                    <table className='table-old'>
                        <tbody>
                            <tr>
                                <td>
                                    <h1 className='h1-old'>{title}</h1>
                                    <GrupoOld jsonUrl={jsonUrl} oldSchool={oldSchool} />
                                    <hr></hr>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                :
                <Container style={{ backgroundColor: `${back}` }} >
                    <Titulo style={{ color: `${color}` }}>{title}</Titulo>
                    <Grupo jsonUrl={jsonUrl} />
                </Container>
            }
        </>
    )
}
export default Seccion;