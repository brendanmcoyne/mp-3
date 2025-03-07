import { styled } from 'styled-components';
import { ContentDiv } from "./TextComponents.tsx";

const Section = styled.section`
    width: 100%;
    margin-bottom: 30px; 
`;

const GenTitle = styled.h3`
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: bold;
`;

const SpanLine = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
    width: 100%;
`;

const Title = styled.h1`
    margin-bottom: 20px; 
    text-align: center;
`;

const SubTitle = styled.h4`
    margin-bottom: 15px; 
`;

export default function Education() {
    return (
        <ContentDiv>
            <Section>
                <Title>Education</Title>
                <GenTitle>
                    <SpanLine>
                        <span>Boston University</span>
                        <span>Sept 2022 - May 2026</span>
                    </SpanLine>
                </GenTitle>
                <SubTitle>Bachelor's Degree in Computer Science</SubTitle>

                <GenTitle>
                    <SpanLine>
                        <span>Hudson High School</span>
                        <span>Sept 2018 - May 2022</span>
                    </SpanLine>
                </GenTitle>
                <SubTitle>High School Diploma</SubTitle>
            </Section>

            <Section>
                <Title>Achievements</Title>
                <GenTitle>
                    <SpanLine>
                        <span>Boston University</span>
                        <span>Fall 2024</span>
                    </SpanLine>
                </GenTitle>
                <SubTitle>Dean's List</SubTitle>
            </Section>
        </ContentDiv>
    );
}
