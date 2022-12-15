import React from 'react';
import {PageContainerJ, RightContainerJ, LeftContainerJ} from '../components/atomos/join-elements';
import Formulario from '../components/atomos/formulario';
import { Bola4, Bola5 } from '../components/atomos/bolas-join';
import Footer from '../components/moleculas/Footer';



const Join = () => {
    return (
       <> 
       <Bola5/>
        <PageContainerJ>
            <LeftContainerJ>
            <Bola4/>
            <h1 className="textoJoin">Join the</h1><h1 className="textoJoin2"> fun.</h1>
            </LeftContainerJ>
            <RightContainerJ>
              <Formulario/>
            </RightContainerJ>
        </PageContainerJ>
        <Footer/>
        </>
    )
 }

 export default Join