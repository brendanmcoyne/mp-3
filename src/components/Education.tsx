import { styled } from 'styled-components';

const EducationContentDiv = styled.div`
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

const SpanLine = styled.span`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export default function Education() {
    return (

        <EducationContentDiv>
            <h1>Education</h1>
            <div>
                <div>
                    <GenTitle>
                        <SpanLine>
                            <span>Boston University</span>
                            <span>Sept 2022 - May 2026</span>
                        </SpanLine>
                    </GenTitle>

                    <h4>Bachelors Degree in Computer Science</h4>
                    <GenTitle>
                        <SpanLine>
                            <span>Hudson High School</span>
                            <span>Sept 2018 - May 2022</span>
                        </SpanLine>
                    </GenTitle>
                    <h4>High School Diploma</h4>
                </div>
            </div>
            <h1>Achievements</h1>
            <div>
                <div>
                    <GenTitle>
                        <SpanLine>
                            <span>Boston University</span>
                            <span>Fall 2024</span>
                        </SpanLine>
                    </GenTitle>

                    <h4>Dean's List</h4>
                </div>
            </div>
        </EducationContentDiv>
    );
}