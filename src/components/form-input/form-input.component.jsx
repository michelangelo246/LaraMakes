import React from 'react';
import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...propsRemnants }) => (
   <div className="group">
      <input className="form-input" onChange={ handleChange } { ...propsRemnants }/>
      {
         label ? 
         <label className={`${propsRemnants.value.lenght?"shrink":null} form-input-label`}>
            { label }
         </label>
         : null
      }
   </div>
)

export default FormInput;