import { styled } from 'styled-components';

const LogoContainer = styled.div`

    height: 10%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    color: #ffffff;
    padding: 1rem;
    
    @media (max-width: 768px) {
        align-items: center;
        padding: 2rem;
    }
`;

const Logo = styled.h1`
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    font-family: "Rajdhani", sans-serif;
`;

export { LogoContainer, Logo };