import {styled} from 'styled-components';

const Navbar = styled.nav`

    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    gap: 2.5rem;
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
`;

export {Navbar, NavItem};