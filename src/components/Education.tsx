import { styled } from 'styled-components';

const EducationContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgray;
    color: black;
    padding: 40px 20px;
    text-align: left;
    width: 100%;
    font-size: calc(0.4rem + 1vw);
`;

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
        <EducationContentDiv>
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
        </EducationContentDiv>
    );
}
