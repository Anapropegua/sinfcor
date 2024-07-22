import { styled } from 'styled-components';
import background from '../../assets/wave.png';

const Wave = styled.div`

    width: 100%;
    height: 90%;
    
    align-self: flex-start;

    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    gap: 2.5rem;

    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    opacity: 0;
    animation: fadeIn 2s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }


`;

export default Wave;