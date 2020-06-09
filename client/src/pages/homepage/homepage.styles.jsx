import styled from 'styled-components';

export const HomePageContainer = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;

    @media (max-width: 770px) {
        padding-left: 0;
        padding-right: 0;
    }
`;