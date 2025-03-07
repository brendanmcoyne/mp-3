import { styled } from 'styled-components';
import { ContentDiv } from "./TextComponents.tsx";

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

export default function Skills() {
    return (
        <ContentDiv>
            <CourseworkTitle>Technical Skills</CourseworkTitle>
            <div>
                <div>
                    <GenTitle>Proficient in Python</GenTitle>
                    <GenText>Started coding in Python in 2023, and have used it for most classes</GenText>
                    <GenTitle>Proficient in Java</GenTitle>
                    <GenText>Started coding in Java in 2023, and have used it for a couple classes</GenText>
                    <GenTitle>Proficient in OCaml</GenTitle>
                    <GenText>Took a class using OCaml in Fall 2024, used for creating new languages via type checking</GenText>
                    <GenTitle>Proficient in C</GenTitle>
                    <GenText>Used in 2024 to create calculators and smaller functions</GenText>
                    <GenTitle>Proficient in C++</GenTitle>
                    <GenText>Used in free time projects and practice for creating video games</GenText>
                    <GenTitle>Proficient in Excel</GenTitle>
                    <GenText>Gathered knowledge through many different classes and settings</GenText>
                    <GenTitle>Conversation in Italian</GenTitle>
                    <GenText>Four semesters of Italian across two years, covering all conversational areas</GenText>
                    <GenTitle>Conversation in Spanish</GenTitle>
                    <GenText>Took seven years of Spanish throughout my secondary education</GenText>
                </div>
            </div>
        </ContentDiv>
    )
}