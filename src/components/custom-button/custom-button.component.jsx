import React from 'react';
import './custom-button.style.scss'

const CustomButton = ({ children, isGoogleSignIn, inverted, neutral, ...propsRemnants }) => (
   <button className={ `${neutral?'neutral':null} ${inverted?'inverted':null} ${isGoogleSignIn?'google-sign-in':null} custom-button` } { ...propsRemnants }>
      { children }
   </button>
)

export default CustomButton;