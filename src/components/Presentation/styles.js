import { styled } from 'styled-components';

const StyledMain = styled.main`
    
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    padding: 1rem;
    
    @media (max-width: 768px) {
        height: 50%;
        width: 100%;
        padding: 0;
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
        width: 70%;
    }
    
`;

export default StyledMain;