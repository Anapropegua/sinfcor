import {styled} from 'styled-components';

const Navbar = styled.nav`

    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    gap: 2.5rem;

    @media (max-width: 768px) {
        height: 15%;
        gap: 1rem;
        padding: 2rem;
        justify-content: space-around;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        height: 10%;
        gap: 2rem;
    }
`;

const NavItem = styled.a`

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
    
    @media (max-width: 768px) {
        font-size: 1rem;
        background: linear-gradient(to right, #ED4690, #5522CC);
        padding: 0.5rem;
        border-radius: 0.5rem;
        
        &:hover {
            background: linear-gradient(to right, #ED4690, #5522CC);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 2rem;
    }
    
`;

export {Navbar, NavItem};