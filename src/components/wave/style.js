import { styled } from 'styled-components';
import background from '../../assets/wave.png';

const Wave = styled.div`

    width: 50%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
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