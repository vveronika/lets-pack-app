import styled from 'styled-components';

export const HomeContent = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
`;

export const TilesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        flex-direction: row;
        justify-content: center;
    }
`;

export const DestinationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    @media (min-width: 700px) {
        flex-direction: row;
        padding: 0 20px;
    }

    @media (min-width: 1024px) {
        padding: 0 100px;
    }

    @media (min-width: 1400px) {
        padding: 0 300px;
    }
`;
