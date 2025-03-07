import { styled } from 'styled-components';
import { ContentDiv } from "./TextComponents.tsx";

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
`;

export default function Activities() {
    return (
        <ContentDiv>
            <h1>Extracurricular Activities</h1>
            <div className="content">
                <div id="text">
                    <GenTitle>
                        <SpanLine>
                        <span>Boston University Astronomical Society</span>
                        <span>April 2023 - Present</span>
                        </SpanLine>
                    </GenTitle>
                    <h3>Secretary/Treasurer </h3>

                    <ul>
                        <GenText>Planned and hosted events for 50+ students and faculty interested in space exploration.</GenText>
                        <GenText>Sent out emails to participants for events, from general meetings to using telescopes.</GenText>
                        <GenText>Marketed to other clubs and groups to collaborate on space events.</GenText>
                        <GenText>Conveyed information to members about astronomical events and led members on stargazing nights.</GenText>
                    </ul>

                    <GenTitle>
                        <SpanLine>
                            <span>HackHardware BU</span>
                            <span>December 2023 - Present</span>
                        </SpanLine>
                    </GenTitle>
                    <h3>Treasurer </h3>

                    <ul>
                        <GenText>Aimed to help create hackathons to combine software and hardware engineering.</GenText>
                        <GenText>Guided 80+ hackathon participants with coding and engineering questions for their projects.</GenText>
                        <GenText>Coordinated with other e-board members about budgeting and hosting medium scale events.</GenText>
                        <GenText>Reached out to dozens of businesses about sponsorship packages for hackathons each semester.</GenText>
                    </ul>
                </div>
            </div>
        </ContentDiv>
    )
}