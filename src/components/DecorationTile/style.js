import styled from 'styled-components';

export const TileWrapper = styled.div`
    height: 180px;
    width: 180px;
    border: 3px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-color: ${props => props.borderStyle};
    padding: 10px;
`;

export const Title = styled.div`
    margin-bottom: 10px;
    font-family: 'Caveat', cursive;
    color: #3A3A3A;
    font-size: 28px;
    text-align: center;
`;

export const Content = styled.div`
    font-family: 'Lato', sans-serif;
    color: #3A3A3A;
    font-size: 15px;
    text-align: center;
`;
