import { styled } from 'styled-components';

const AboutContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: lightgray;
    color: black;
    padding: 20px;
    text-align: center;
    width: 100%;
    font-size: calc(0.5rem + 1vw);
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    width: 100%;
    margin-top: 60px;
`;

const GenTextContainer = styled.div`
    text-align: left;
    margin-left: 20px;
`;

const GenText = styled.p`
    margin-top: 5px;
    margin-bottom: 10px;
`;

const GenImage = styled.img`
    flex: 1;
    max-width: 300px;
`;

export default function About() {
    return (
        <AboutContentDiv>
            <h1>Home</h1>
            <FlexContainer>
                <GenImage src="/1692936502607.jpeg" alt="Brendan Coyne" width="400px" height="300px"/>
                <GenTextContainer>
                    <GenText>My name is Brendan Coyne, and I am a junior at Boston University studying computer science in the
                        College of Arts & Sciences.</GenText>

                    <GenText>I have hands-on experience in Python and Java, strong problem-solving abilities, and a proven
                        track record in customer service and event management. I'm adept at coding, teamwork, and project
                        execution, with an interest in leveraging technical skills to contribute to impactful
                        projects.</GenText>

                    <GenText>In my past 2 1/2 years of coding experience, I've been able to diversify my coding portfolio across
                        several different languages, by implementing algorithms and data structures into code.</GenText>
                </GenTextContainer>
            </FlexContainer>
        </AboutContentDiv>
    );
}
