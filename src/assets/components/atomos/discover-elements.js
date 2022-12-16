import styled from 'styled-components'
import {devices} from './media-queries.js'


export const PageContainerD = styled.div`
    display: flex;
    flex-direction: row; 
    position: relative;   

    @media ${devices.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
  }
`;

export const LeftContainerD = styled.div`
    width: 546px;
    position: absolute;  
    top: 165px;
    left: 20%;  

    @media ${devices.mobile} {
    position: relative;
    width: 300px;
    top: 0px;
    
  }
    
`;

export const RightContainerD = styled.div`
    width: 546px;
    position: absolute;
    right: 10%;
    top: 100px;

    @media ${devices.mobile} {
    position: absolute;
    width: 300px;
    left: 50%;
    top: 110%;
  }
`;

export const ItemsContainer = styled.div`
   display: flex;
`;