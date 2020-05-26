import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/logo.svg';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
   height: 56px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin-bottom: 25px;
   padding: 0 15px;
   box-sizing: border-box;
   background-color: rgb(41, 48, 59);
`;

export const LogoContainer = styled(Link)`
   width: 56px;
   height: 56px;
`;

export const OptionsContainer = styled.div`
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
   padding: 10px 15px;
   color: pink;
   font-weight: bold;
   font-size: 1.3em;
   cursor: pointer;
   &:hover {
      color: #e75480;
   }
`;

export const BrandNameContainer = styled.div`
   margin-left: 15px;
   font-size: 2em;
   color: lightpink;
   font-weight: bolder;
   font-family: 'Great Vibes';
   margin-top: 5px;

   &::first-letter {
      color: #e75480;
   }
`;

export const BrandContainer = styled.div`
   display: flex;
   align-items: center;
   transform: scale(0.9);
`

export const LogoComponent = styled(Logo)`
   width: 100%;
   height: 100%;
   filter: invert(1);
`