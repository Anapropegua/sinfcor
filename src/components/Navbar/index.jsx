import { Navbar, NavItem } from './styles';


export const NavBarComponent = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar>
            <NavItem onClick={() => scrollToSection('section1')}>Home</NavItem>
            <NavItem onClick={() => scrollToSection('section2')}>Notícias</NavItem>
            <NavItem onClick={() => scrollToSection('section3')}>Atividades</NavItem>
        </Navbar>
    );

};

export default NavBarComponent;