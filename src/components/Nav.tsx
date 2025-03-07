import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledLink = styled(Link)`
    padding: 0.5rem;
    text-decoration: none;
    color: darkblue;
    font-size: 20px;
    background-color: lightgray;
    border-radius: 100px;
    text-align: center;
    font-family: "Georgia", "Times New Roman", serif;
    margin: 10px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledNav = styled.nav`
    background-color: lightskyblue;
    padding: 20px;
    width: 30%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 750px) {
        width: 100%;
    }

    ul {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;

        @media screen and (max-width: 750px) {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 100%;
        }
    }

    li {
        width: 100%;
        display: flex;
        justify-content: center;

        @media screen and (max-width: 750px) {
            width: auto; 
        }
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <ul>
                <li>
                    <StyledLink to="/">About</StyledLink>
                </li>
                <li>
                    <StyledLink to="/activities">Activities</StyledLink>
                </li>
                <li>
                    <StyledLink to="/coursework">Coursework</StyledLink>
                </li>
                <li>
                    <StyledLink to="/education">Education</StyledLink>
                </li>
                <li>
                    <StyledLink to="/experience">Experience</StyledLink>
                </li>
                <li>
                    <StyledLink to="/projects">Projects</StyledLink>
                </li>
                <li>
                    <StyledLink to="/skills">Skills</StyledLink>
                </li>
            </ul>
        </StyledNav>
    );
}
