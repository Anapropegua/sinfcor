import {styled} from 'styled-components';

const StyledContainer = styled.div`

    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};

    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};

    background-color: ${props => props.bg || 'transparent'};
    color: ${props => props.color || 'black'};

    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};

    border-radius: ${props => props.radius || '0'};
    box-shadow: ${props => props.shadow || 'none'};

    @media (max-width: 768px) {
        width: ${props => props.mobile?.width || props.width || '100%'};
        height: ${props => props.mobile?.height || props.height || '100%'};
        flex-direction: ${props => props.mobile?.direction || 'column'};
        justify-content: ${props => props.mobile?.justify || props.justify || 'center'};
        align-items: ${props => props.mobile?.align || props.align || 'center'};
        padding: ${props => props.mobile?.padding || props.padding || '0'};
        margin: ${props => props.mobile?.margin || props.margin || '0'};
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: ${props => props.tablet?.width || props.width || '100%'};
        height: ${props => props.tablet?.height || props.height || '100%'};
        flex-direction: ${props => props.tablet?.direction || props.direction || 'row'};
        justify-content: ${props => props.tablet?.justify || props.justify || 'center'};
        align-items: ${props => props.tablet?.align || props.align || 'center'};
        padding: ${props => props.tablet?.padding || props.padding || '0'};
        margin: ${props => props.tablet?.margin || props.margin || '0'};
    }

`;

export default StyledContainer;