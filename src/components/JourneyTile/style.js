import styled from 'styled-components';

export const TileWrapper = styled.div`
    position: relative;
    padding: 10px;
    z-index: 1;
    cursor: pointer;

    @media (min-width: 700px) {
        margin-right: 20px;
    }

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        width: 100%;
        background: #ff9939;
        z-index: -1;
        transition: height .4s ease;
    }

    &:hover:before {
        height: 100%;
    }
`;

export const Title = styled.div`
    font-family: 'Caveat', cursive;
    color: #3A3A3A;
    font-size: 20px;
    transition: color .4s ease;
`;