import { styled } from 'styled-components';

const ExperienceContentDiv = styled.div`
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

const GenTitle = styled.h3`
    margin-top: 5px;
    margin-bottom: 10px;
`;

const GenText = styled.li`
    margin-top: 5px;
    margin-bottom: 10px;
`;

const SpanLine = styled.span`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export default function Experience() {
    return (
        <ExperienceContentDiv>
            <h1>Work Experience</h1>
            <div>
                <div>
                    <GenTitle>
                        <SpanLine>
                            <span>DataAnnotation.tech</span>
                            <span>May 2024 - August 2024</span>
                        </SpanLine>
                    </GenTitle>
                    <h4>Freelance Worker</h4>
                    <ul>
                        <GenText>Aimed to train AI based on prompts wrote and given prompts by Artificial Intelligence.</GenText>
                        <GenText>Debugged 30+ code tasks weekly, enhancing AI output accuracy by refining mathematical/coding logic.</GenText>
                        <GenText>Revised and corrected mathematical errors AI made within higher level math problems.</GenText>
                    </ul>

                    <GenTitle>
                        <SpanLine>
                            <span>Dick's Sporting Goods</span>
                            <span>April 2021 - Present</span>
                        </SpanLine>
                    </GenTitle>
                    <h4>Retail Sales Associate</h4>
                    <ul>
                        <GenText>Demonstrated exceptional customer service skills, resolving complaints efficiently and courteously.</GenText>
                        <GenText>Communicated and worked with fellow employees to problem-solve with customers.</GenText>
                        <GenText>Handled customer complaints and inquiries in a courteous and efficient manner.</GenText>
                        <GenText>Provided accurate information about products, prices, and availability both in person and digitally.</GenText>
                    </ul>
                </div>
            </div>
        </ExperienceContentDiv>
    )
}