import styled from 'styled-components'
import {devices} from './media-queries.js'


export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;

`;

export const LeftContainer = styled.div`
    width: 546px;
    position: relative; 
    
    @media ${devices.mobile} {
    display: none;
    }
`;

export const GirlContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    position: fixed;   
    margin-left:8%; 
    margin-top: 3%;

    @media ${devices.mobile} {
    display: none;
  }
`;

export const RightContainer = styled.div`
    width: 546px;
    position: relative;
    margin-left: 17%;
    top: 200px;
    
    @media ${devices.mobile} {
    width: 100%;
    }

`;


export const Bola1 = styled.div`
    width: 380px;
    height: 380px;
    top: 120px;
    left: 0px;
    margin: 0px;
    padding: 0px;
    border-radius: 50%;
    margin-left: 80px;
    position: absolute;
    background: #BC3A80;
    opacity: 0.2;

    @media ${devices.mobile} {
    width: 100px;
    height: 100px;
    top: 120px;
    left: 0px;
    }
`;

export const Bola2 = styled.div`
    width: 380px;
    height: 380px;
    left: 80%;
    margin: 0px;
    padding: 0px;
    border-radius: 50%;
    margin-left: 80px;
    position: absolute;
    background: #3457b21a;
    opacity: 0.8;

    @media ${devices.mobile} {
    width: 100px;
    height: 100px;
    }
`;

export const Bola3 = styled.div`
    width: 500px;
    height: 500px;
    top: 50%;
    left: 70%;
    margin: 0px;
    padding: 0px;
    border-radius: 50%;
    margin-left: 80px;
    position: fixed;
    background: #3457b21a;
    opacity: 0.8;

    @media ${devices.mobile} {
    width: 100px;
    height: 100px;
    }
`;

export const Bola1m = styled.div`
@media ${devices.mobile} {
    width: 100px;
    height: 100px;
    top: 200px;
    right: 75%;
    margin: 0px;
    padding: 0px;
    border-radius: 50%;
    margin-left: 80px;
    position: absolute;
    background: #BC3A80;
    opacity: 0.2;
    }

    @media ${devices.laptop} {
    display: none;
    }
`;

export const Bola2m = styled.div`
@media ${devices.mobile} {
    width: 100px;
    height: 100px;
    top: 20%;
    left: 20%;
    margin: 0px;
    padding: 0px;
    border-radius: 50%;
    margin-left: 80px;
    position: absolute;
    background: #3457b21a;
    opacity: 0.8;

    @media ${devices.laptop} {
    display: none;
    }
  
    }
`;

export const Bola3m = styled.div`
    @media ${devices.mobile} {
    width: 200px;
    height: 200px;
    top: 70%;
    left: 45%;
    margin: 0px;
    padding: 0px;
    border-radius: 50%;
    margin-left: 80px;
    position: fixed;
    background: #3457b21a;
    opacity: 0.8;

    @media ${devices.laptop} {
    display: none;
    }


   
    }
`;