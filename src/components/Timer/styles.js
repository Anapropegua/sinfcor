import {styled} from 'styled-components';

const TimerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    border-radius: 20px;

    padding: 1.5rem;

    background-color: #242565;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;

const TimerItem = styled.div`
    
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #fff;
    
    border-bottom: 1px solid #fff;
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem 0;
    }
    
`;

const TimerItemTitle = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
`;

const TimerItemValue = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`;

export {TimerContainer, TimerItem, TimerItemTitle, TimerItemValue};