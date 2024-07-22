import StyledMain from './styles';
import {IfpiLogo} from "../Logos";
import Title from "../Title";
import Paragraph from "../Text";
import Button from "../Button";
import {ButtonsContainer} from "../Button/styles";

const Presentation = () => {

    return (
        <StyledMain>
            <IfpiLogo/>
            <Title/>
            <Paragraph>
                O Simpósio de Informática de Corrente é um evento que tem como objetivo promover a integração entre os
                discentes do IFPI - Campus Corrente, bem como a comunidade em geral, através da realização de palestras,
                minicursos, oficinas e apresentação de trabalhos científicos.
            </Paragraph>
            <ButtonsContainer>
                <Button>Inscreva-se</Button>
                <Button>Saiba mais</Button>
            </ButtonsContainer>
        </StyledMain>
    )
}

export default Presentation;