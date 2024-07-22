import { styled } from 'styled-components';

const StyledText = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: #000;
    
    @media (max-width: 768px) {
        text-align: center;
    }
`;

const TextContainer = styled.div`
   
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 0 2.5rem;
    
    @media (max-width: 768px) {
        padding: 0 1rem;
    }
    
`;

export { StyledText, TextContainer };