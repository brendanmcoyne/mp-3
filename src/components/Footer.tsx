import { styled } from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: darkblue;
    color: white;
    font-family: "Georgia", "Times New Roman", serif;
    text-align: center;
    height: 10vh;
`;

const FooterText = styled.p`
    padding: 10px;
    text-align: center;
    width: 100%;
    margin-top: 10px;
    color: white;
`;

const StyledLink = styled(Link)`
    color: lightskyblue;
    text-decoration: none;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <FooterText>All rights reserved by Brendan Coyne <StyledLink to="">Credits</StyledLink> &#169;</FooterText>
        </StyledFooter>
    );
}