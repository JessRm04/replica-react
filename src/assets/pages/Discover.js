import React from 'react';
import { PageContainerD, RightContainerD, LeftContainerD, ItemsContainer } from '../components/atomos/discover-elements';
import Covers from "../components/img/covers.jpg"
import {Link} from "react-router-dom"
import DiscoverItem from '../components/atomos/discover-items';
import Micro from "../components/img/microphone.svg"
import Albums from "../components/img/albums.svg"
import More from "../components/img/more.svg"
import Footer from '../components/moleculas/Footer';


const Discover = () => {
    return (
       <> 
        <PageContainerD>
            <LeftContainerD>
            <h1>Discover New Music</h1>
            <ItemsContainer>
                <DiscoverItem src={Micro} texto="Charts"/>
                <DiscoverItem src={Albums} texto="Albums"/>
                <DiscoverItem src={More} texto="More"/>
            </ItemsContainer>
            <h4> By joining you can benefit by listening to the latest albums released. </h4>
            </LeftContainerD>
            <RightContainerD>
                <img src={Covers} width="60%"/>
            </RightContainerD>
        </PageContainerD>
        <Footer/>
        </>
    )
 }

 export default Discover