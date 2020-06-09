import styled from 'styled-components';
import { ReactComponent as ShoppingIconSVG } from '../../assets/cart.svg';

export const CartContainer = styled.div`
   width: 45px;
   height: 45px;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
   width: 24px;
   height: 24px;
   filter: invert(39%) sepia(62%) saturate(2880%) hue-rotate(686deg) brightness(104%) contrast(97%);
`;

export const ItemCountContainer = styled.span`
  position: absolute;
   font-size: 10px;
   font-weight: bold;
   bottom: 12px;
   color: pink;
`;