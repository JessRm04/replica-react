import styled from 'styled-components'
import {devices} from './media-queries.js'


export const PageContainerJ = styled.div`
    display: flex;
    flex-direction: row; 
    position: relative;  
    
    @media ${devices.mobile} {
    display: flex;
    position: relative;
  }
`;

export const LeftContainerJ = styled.div`
    display:flex;
    width: 546px;
    position: absolute;  
    top: 165px;
    left: 20%;  

    @media ${devices.mobile} {
    font-size: 0.5em;
    top: 20%;
    left: 0%;   
  }
`;

export const RightContainerJ = styled.div`
    width: 546px;
    position: absolute;
    right: 10%;
    top: 100px;
    color: white;

    @media ${devices.mobile} {
    left: 25%;
  }
`;


export const Contenedor = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #202027;
width: 400px;
height: 300px;
border-radius: 15px;

@media ${devices.mobile} {
    width: 200px;
    
  }
`;