import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 30px;

   @media (max-width: 770px) {
      margin-bottom: 0;
   }
`;

export const TitleContainer = styled.h1`
   font-size: 28px;
   margin-bottom: 25px;
   cursor: pointer;

   @media(max-width: 770px) {
      text-align: center;
      font-size: 2rem;
    }

   &:hover {
      color: grey;
   }
`;

export const PreviewContainer = styled.div`
   display: flex;
   justify-content: space-around;

   @media (max-width: 770px) {
      flex-wrap: wrap;
   }
`;