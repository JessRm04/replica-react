import styled from 'styled-components'
import {devices} from './media-queries.js'

export const Bola4 = styled.div`
    width: 700px;
    height: 700px;
    margin: 0px;
    padding: 0px;
    border-radius: 50%;
    position: fixed;
    background: #BC3A80;
    opacity: 0.2;
    right: 60%;

    @media ${devices.mobile} {
    width: 100px;
    height: 100px;
    top: 570px;
    left: 1%;
    
  }
`;

export const Bola5 = styled.div`
    width: 380px;
    height: 380px;
    right: 40%;
    margin: 0px;
    padding: 0px;
    border-radius: 50%;
    position: absolute;
    background: #3457b21a;
    opacity: 0.8;
    bottom: 60%;

    @media ${devices.mobile} {
    width: 100px;
    height: 100px;
    top: -2%;
  }
`;