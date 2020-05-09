import React, { Component } from 'react';
import './sign-up.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'


class SignUp extends Component{
   constructor(props){
      super(props);

      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: ''
      }
   }

   handleSubmit = async (e) => {
      const { displayName, email, password, confirmPassword } = this.state;
      
      e.preventDefault();
      if(password !== confirmPassword){
         alert("As senhas não são iguais");
         return;
      }
      try{
         // retorna um objeto igual ao usado com o google login
         const { user } = await auth.createUserWithEmailAndPassword(email, password);

         await createUserProfileDocument(user, { displayName });

         this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
         })
      }
      catch(err){
         console.error(err);
      }
      
   }

   handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
         [name]: value
      })
   }

   render(){
      const { displayName, email, password, confirmPassword } = this.state;
      return(
         <div className="sign-up">
            <h2 className="title">Cadastre-se</h2>
            <span>Cadastre-se com seu email e senha</span>
            <form className="sign-up-form" onSubmit={ this.handleSubmit }>
               <FormInput
                  type="text"
                  name="displayName"
                  value={ displayName }
                  onChange={ this.handleChange }
                  label="Nome"
                  required
               />
               <FormInput
                  type="email"
                  name="email"
                  value={ email }
                  onChange={ this.handleChange }
                  label="Email"
                  required
               />
               <FormInput
                  type="password"
                  name="password"
                  value={ password }
                  onChange={ this.handleChange }
                  label="Senha"
                  required
               />
               <FormInput
                  type="password"
                  name="confirmPassword"
                  value={ confirmPassword }
                  onChange={ this.handleChange }
                  label="Repita a senha"
                  required
               />
               <CustomButton type="submit">Cadastrar</CustomButton>
            </form>
         </div>
      )
   }
}

export default SignUp;