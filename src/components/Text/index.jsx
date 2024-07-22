import {StyledText, TextContainer } from './styles'

const Paragraph = ({children}) => {
    return (
        <TextContainer>
            <StyledText>
                {children}
            </StyledText>
        </TextContainer>
    )
}

export default Paragraph;