import styled from 'styled-components'

export const Recuadro = styled.div`
    background: #202027;
    width: 80px;
    height: 80px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;



function DiscoverItem ({texto, src}){
    return(
          <Recuadro>
            <img src={src} width="40px;" alt="discover"/>
            <h5> {texto} </h5>
          </Recuadro>
    )}

export default DiscoverItem;

