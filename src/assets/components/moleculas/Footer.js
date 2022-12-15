import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FooterContainer, FooterLeftContainer, FooterLi, FooterRightContainer, FooterUl } from '../atomos/footer-elements'

function Footer  ()  {
    return (
            <FooterContainer>
                <FooterLeftContainer>
                    <FooterUl>
                        <FooterLi>
                            About
                        </FooterLi>
                        <FooterLi>
                            Contact
                        </FooterLi>
                    </FooterUl>
                </FooterLeftContainer>
                <FooterRightContainer>
                    <FooterUl>
                        <FooterLi>
                            <FaTwitter/> Twitter
                        </FooterLi>
                        <FooterLi>
                            <FaFacebookSquare/> Facebook
                        </FooterLi>
                    </FooterUl>
                </FooterRightContainer>
            </FooterContainer>
        )
    }
    
    export default Footer