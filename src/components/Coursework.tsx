import { styled } from 'styled-components';

const CourseworkContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: flex-start;  
    background-color: lightgray;
    color: black;
    padding: 20px;
    text-align: left;
    width: 100%;
    font-size: calc(0.4rem + 1vw);
`;

const CourseworkTitle = styled.h1`
    margin-bottom: 10px;
`;

const GenTitle = styled.h3`
    margin-top: 5px;
    margin-bottom: 10px;
`;

const GenText = styled.p`
    margin-top: 5px;
    margin-bottom: 10px;
    margin-left: 5px;
`;


export default function Coursework() {
    return (
        <CourseworkContentDiv>
            <CourseworkTitle>Relevant Coursework</CourseworkTitle>
            <div>
                <div>
                    <GenTitle>Geometric Algorithms (CS 132)</GenTitle>
                    <GenText>A linear algebra based course, designed around coding and algorithm optimization</GenText>
                    <GenTitle>Analysis of Algorithms (CS 330)</GenTitle>
                    <GenText>An introductory course into simple graph algorithms and time complexity reduction</GenText>
                    <GenTitle>Probability in Computing (CS 237)</GenTitle>
                    <GenText>A basic statistics course with moderate programming assignments revolving around probability</GenText>
                    <GenTitle>Algebraic Algorithms (CS 235)</GenTitle>
                    <GenText>A moderate level proof writing class, bringing in the concepts of ring theory and cryptography</GenText>
                    <GenTitle>Concepts of Programming Languages (CS 320)</GenTitle>
                    <GenText>A moderate level programming class revolving around the design and creation of new languages</GenText>
                    <GenTitle>Combinatoric Structures (CS 131)</GenTitle>
                    <GenText>An introductory course into boolean logic and proof writing</GenText>
                </div>
            </div>
        </CourseworkContentDiv>
    )
}