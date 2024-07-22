import {styled} from 'styled-components';

// #ED4690, #5522CC
const StyledButton = styled.button`

    background-color: #ED4690;
    color: #FFFFFF;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #5522CC;
    }

`;

const ButtonsContainer = styled.div`

    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 2.5rem 0 0 0;
    padding: 0 2.5rem;
    
`;


export {StyledButton, ButtonsContainer};
