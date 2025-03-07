import { styled } from "styled-components";
import { useCalculator } from "./Calc.tsx";

const ProjectContentDiv = styled.div`
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
    font-size: 25px;
    margin-top: 5px;
    margin-bottom: 10px;
`;

const GenText = styled.p`
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 10px;
`;

const CalculatorWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`;

const CalculatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 30vw; 
`;

const InputsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
`;

const NumberInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NumberCircle = styled.input`
    width: 100px;
    height: 100px;
    font-size: 24px;
    text-align: center;
    border: 3px solid black;
    border-radius: 50%;
    background: lightgray;
    padding: 0;
    margin: 0 auto;
    display: block;
    line-height: normal; 
    
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: center;
    flex-wrap: wrap; 
    gap: 10px; 
    width: 100%; 
    margin-top: 10px;
`;

const StyledButton = styled.button`
    width: 60px; 
    height: 60px;
    font-size: calc(0.4rem + 1vw);
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50px; 
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ResultCircle = styled.div`
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 3px solid black;
    background: lightgray;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    line-height: 120px;
`;


const ResultDisplay = styled.h4`
    font-size: calc(0.5rem + 1vw);
    font-weight: bold;
    margin-top: 20px;
`;

export default function Projects() {
    const { num1, setNum1, num2, setNum2, result, add, sub, mul, div, pow, clear } = useCalculator();

    return (
        <ProjectContentDiv>
            <h1>Projects</h1>
            <div>
                <GenTitle>College Football Season in Python</GenTitle>
                <ul>
                    <GenText>Currently developing a Python-based simulation of a College football season.</GenText>
                    <GenText>Designing algorithms to simulate game results such as team strength to create realistic simulation experiences.</GenText>
                    <GenText>Building databases in Python to store game stats and team records.</GenText>
                </ul>

                <GenTitle>The Calculator</GenTitle>
            </div>

            <CalculatorWrapper>
                <CalculatorContainer>
                    <InputsContainer>
                        <NumberInputWrapper>
                            <label htmlFor="number-1">1st Number:</label>
                            <NumberCircle
                                type="number"
                                value={num1 ?? ""}
                                onChange={(e) => setNum1(e.target.value ? Number(e.target.value) : null)}
                            />
                        </NumberInputWrapper>

                        <NumberInputWrapper>
                            <label htmlFor="number-2">2nd Number:</label>
                            <NumberCircle
                                type="number"
                                value={num2 ?? ""}
                                onChange={(e) => setNum2(e.target.value ? Number(e.target.value) : null)}
                            />
                        </NumberInputWrapper>
                    </InputsContainer>


                    <ButtonsContainer>
                        <StyledButton onClick={add}>+</StyledButton>
                        <StyledButton onClick={sub}>-</StyledButton>
                        <StyledButton onClick={mul}>*</StyledButton>
                        <StyledButton onClick={div}>/</StyledButton>
                        <StyledButton onClick={pow}>**</StyledButton>
                        <StyledButton onClick={clear}>Clear</StyledButton>
                    </ButtonsContainer>

                    <ResultCircle>
                        {result !== null && (
                            <ResultDisplay style={{ color: result < 0 ? "red" : "black" }}>{result}</ResultDisplay>
                        )}
                    </ResultCircle>
                </CalculatorContainer>
            </CalculatorWrapper>
        </ProjectContentDiv>
    );
}
