import styled, { css } from 'styled-components';

const buttonStyles = css`
   background-color: #e75480;
   color: white;
   border: none;

   &:hover {
      background-color: white;
      color: #e75480;
      border: 1px solid #e75480;
   }
`;

const invertedButtonStyles = css`
   background-color: white;
   color: #e75480;
   border: 1px solid #e75480;

   &:hover {
      background-color: #e75480;
      color: white;
      border: none;
   }
`;

const googleSignInStyles = css`
   background-color: #4285f4;
   color: white;
   border: none;
   &:hover {
      background-color: #357ae8;
      border: none;
   }
`;

const neutralStyles = css`
   background-color: white;
   color: black;
   border: 1px solid black;

   &:hover {
      background-color: black;
      color: white;
      border: none;;
   }
`;

const getButtonStyles = props => {
   if(props.isGoogleSignIn){
      return googleSignInStyles;
   }
   else if (props.neutral){
      return neutralStyles;
   }
   else if(props.inverted){
      return invertedButtonStyles;
   }
   else{
      return buttonStyles;
   }
};

export const CustomButtonContainer = styled.button`
   min-width: 165px;
   width: auto;
   height: 50px;
   letter-spacing: 0.5px;
   line-height: 50px;
   padding: 0 35px 0 35px;
   font-size: 15px;
   text-transform: uppercase;
   font-family: 'Open Sans Condensed';
   font-weight: bolder;
   cursor: pointer;
   display: flex;
   justify-content: center;
   ${getButtonStyles}
`;