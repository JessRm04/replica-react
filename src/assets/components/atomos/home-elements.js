import styled from 'styled-components'


export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* margin-top: 95px; */
`;

export const LeftContainer = styled.div`
    width: 546px;
    position: relative;    
`;

export const GirlContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    position: fixed;   
    margin-left:8%; 
    margin-top: 3%;
`;

export const RightContainer = styled.div`
    width: 546px;
    position: relative;
    margin-left: 17%;
    top: 200px;
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
`;
