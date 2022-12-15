import styled from 'styled-components'

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row; 
    position: sticky;
    width: 100%;
    height: 40px;
    bottom: 0%;
    z-index: 99;
    background-color: #202027;
    position: absolute;
`;

export const FooterLeftContainer = styled.div`
    width: 800px;
`;

export const FooterRightContainer = styled.div`
    width: 546px;

`;

export const FooterUl = styled.ul`
    style: none;
    display: flex;
    justify-content: center;
    

`;

export const FooterLi = styled.li`
    color: white;
    margin: 9px;

`;



