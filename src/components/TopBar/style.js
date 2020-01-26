import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BarWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 40px;
    text-decoration: none;

    @media (min-width: 700px) {
        flex-direction: row;
        justify-content: space-between;
    }

    @media (min-width: 1024px) {
        padding: 0 100px;
    }

    @media (min-width: 1400px) {
        padding: 0 300px;
    }
`;

export const PageLogo = styled.img`
    width: 200px;
    margin-top: -20px;

    @media (min-width: 700px) {
        width: 300px;
    }
`;

export const PageTitle = styled.h1`
    font-family: 'Bangers', cursive;
    color: #FF9939;
    margin-bottom: 0;
    font-size: 75px;

    @media (min-width: 700px) {
        font-size: 90px;
    }
`;

export const PageSubTitle = styled.div`
    font-family: 'Caveat', cursive;
    color: #3A3A3A;   
    font-size: 27px;
    margin-top: -30px;
    margin-bottom: 0;
`;

export const TextWrapper = styled.div`
    display: block;
`;
