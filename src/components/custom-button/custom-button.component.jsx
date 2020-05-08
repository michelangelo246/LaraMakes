import React from 'react';
import './custom-button.style.scss'

const CustomButton = ({ children, isGoogleSignIn, ...propsRemnants }) => (
   <button className={ `${isGoogleSignIn?'google-sign-in':null} custom-button` } { ...propsRemnants }>
      { children }
   </button>
)

export default CustomButton;