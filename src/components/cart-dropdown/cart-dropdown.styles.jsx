import CustomButton from '../custom-button/custom-button.component';
import styled from 'styled-components';

export const CartDropDownContainer = styled.div`
   position: absolute;
   width: 240px;
   height: 340px;
   display: flex;
   flex-direction: column;
   padding: 20px;
   border: 1px solid black;
   background-color: white;
   top: 56px;
   right: 40px;
   z-index: 5;

   @media (max-width: 770px) {
      right: 0;
      width: 100%;
   }
`;

export const CartItemsContainer = styled.div`
   height: 240px;
   display: flex;
   flex-direction: column;
   overflow-y: auto;
`;

export const EmptyMessageContainer = styled.span`
   font-size: 18px;
   margin: 50px auto;
`;

export const CartDropdownButton = styled(CustomButton)`
   margin-top: auto;
`;