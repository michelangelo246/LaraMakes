import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
   width: 22vw;
   display: flex;
   flex-direction: column;
   height: 350px;
   align-items: center;
   padding-bottom: 5px;
   border-radius: 6px;
   position: relative;
   padding: 5px;

   @media (min-width: 771px) and (max-width: 1144px) {
      width: 45%;
   }

   @media (max-width: 770px) {
      width: 100%;
      height: 80vh;
      margin-bottom: 15px;
      
      &:last-of-type {
         margin-bottom: 0;
      }
   }

   &:hover {
      div:first-child {
         opacity: 0.8;
      }
      button {
         opacity: 0.85;
         display: flex;
      }
   }
`;

export const AddButton = styled(CustomButton)`
   position: absolute;
   top: 66%;
   opacity: 0.7;
   padding: 0 5% 0 5%;
   width: 80%;
   display: none;

   @media (max-width: 770px) {
      display: block;
   }
`;

export const BackgroundImage = styled.div`
   width: 100%;
   height: 95%;
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   margin-bottom: 1%;
   background-color: white;
   border: 1px solid black;
   background-image: ${({ imageUrl }) => `url(${imageUrl})`};

   @media (max-width: 770px) {
      background-size: cover;
   }
`;

export const CollectionFooterContainer = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   font-size: 18px;
   padding: 0 15px;
   box-sizing: border-box;
   margin-bottom: 10px;
   height: 8%;

   @media (max-width: 770px) {
      height: auto;
   }
`;

export const NameContainer = styled.span`
   width: 90%;
   margin-bottom: 15px;

   @media (max-width: 770px) {
      width: 100%;
   }
`;

export const PriceContainer = styled.span`
   width: 10%;
   text-align: right;

   @media (max-width: 770px) {
      width: 100%;
      height: auto;
   }

   &:before {
      content: "R$";
   }
`;