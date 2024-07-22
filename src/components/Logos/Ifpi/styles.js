import { styled } from 'styled-components';

const StyledIfpiLogo = styled.img`
    width: 150px;
    align-self: flex-start;
  
    @media (max-width: 768px) {
        display: none;
    }
    
`;

export default StyledIfpiLogo;