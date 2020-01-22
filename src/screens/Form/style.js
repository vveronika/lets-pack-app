import styled from 'styled-components';

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        padding: 0 100px;
    }

    @media (min-width: 1024px) {
        padding: 0 300px;
    }

    @media (min-width: 1400px) {
        padding: 0 450px;
    }
`;

export const SelectsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;