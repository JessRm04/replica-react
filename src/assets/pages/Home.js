import React from 'react';
import Button from '../components/atomos/button';
import { GirlContainer, PageContainer, Bola1, Bola2, Bola3 } from '../components/atomos/home-elements';
import { RightContainer } from '../components/atomos/home-elements';
import { LeftContainer } from '../components/atomos/home-elements';
import  chica from "../components/img/landing-page-girl.png";
import {Link} from "react-router-dom"

const Home = () => {
    return (
       <> 
            <PageContainer>
                <LeftContainer>
                    <Bola1/>
                    <Bola2/>
                    <Bola3/>
                    <GirlContainer>
                        <img src={chica} width="75%"/>
                    </GirlContainer>
                </LeftContainer>
            <RightContainer>
                <h1>Feel The Music</h1>
                <h3>Stream over 20 thousand songs with one click </h3>
                <Link to="/join"><Button>Join Now</Button></Link>
            </RightContainer>
        </PageContainer>
        </>
    )
 }

 export default Home