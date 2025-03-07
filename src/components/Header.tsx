import { styled } from 'styled-components';

// Styled-components for Header
const StyledHeader = styled.header`
  position: relative;
  background-color: darkblue;
  color: lightgray;
  text-align: left;
  display: flex;
  flex-direction: column;
  font-family: "Georgia", "Times New Roman", serif;
  justify-content: center;
  padding: 10px;

  @media screen and (max-width: 750px) {
    text-align: center;
  }
`;

const Title = styled.h1`
    margin-top: 20px;
    color: lightgray;
    font-size: 40px;
    margin-left: 10px;
`;

const Subtitle = styled.p`
    color: lightgray;
    font-size: 20px;
    margin-bottom: 5px;
    margin-left: 10px;
`;


export default function Header() {
    return (
        <StyledHeader>
            <Title> Resume</Title>
            <Subtitle>Created By: Brendan Coyne</Subtitle>
        </StyledHeader>
    );
};
