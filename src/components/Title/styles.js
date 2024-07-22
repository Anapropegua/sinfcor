import { styled } from 'styled-components';

const StyledText = styled.h1`
    font-size: 2rem;
    text-align: justify;
    background: linear-gradient(to right, #ED4690, #5522CC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const TextContainer = styled.div`
   
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 2.5rem;
    
`;

export { StyledText, TextContainer };