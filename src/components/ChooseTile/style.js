import styled from 'styled-components';

export const TileWrapper = styled.div`
    position: relative;
    padding: 10px;
    z-index: 1;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: ${props => props.active ? '100%' : '4px'};
        width: 100%;
        background: ${props => props.decorationColor};
        z-index: -1;
        transition: height .4s ease;
    }

    &:hover:before {
        height: 100%;
    }
`;

export const TileTitle = styled.div`
    font-family: 'Caveat', cursive;
    color: ${props => props.active ? '#FFF' : '#3A3A3A'};
    font-size: 20px;
    transition: color .4s ease;
`;
