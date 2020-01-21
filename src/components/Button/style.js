import styled from 'styled-components';

export const ButtonWrapper = styled.button`
    background-color: #3a3a3a;
    border: none;
    margin-top: 20px;
    transition: all .2s;

    &:hover {
        background-color: #272727;
    }
`;

export const ButtonLabel = styled.div`
    color: #fff;
    font-family: 'Caveat', cursive;
    padding: 10px 20px;
    font-size: 20px;
`;