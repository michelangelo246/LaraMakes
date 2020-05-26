import React, { Component } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { ButtonsBarContainer, SignInContainer, SignInTitle } from './sign-in.styles';

class SignIn extends Component {
   constructor(props) {
      super(props);

      this.state = {
         email: '',
         password: ''
      }
   }

   handleSubmit = async e => {
      e.preventDefault();

      const { email, password } = this.state;
      try {
         await auth.signInWithEmailAndPassword(email, password);
         this.setState({ email: '', password: '' });
      }
      catch (err) {
         console.error(err);
      }
   }

   onChangeHandle = e => {
      const { value, name } = e.target;
      this.setState({ [name]: value });
   }

   render() {
      const {email, password} = this.state;
      return(
         <SignInContainer>
            <SignInTitle>Já possui uma conta?</SignInTitle>
            <span>Entre com seu email e senha</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput 
                  type="email"
                  name="email"
                  value={ email }
                  required
                  label="Email"
                  handleChange={this.onChangeHandle}
               />
               <FormInput
                  type="password"
                  name="password"
                  value={ password }
                  required
                  label="Senha"
                  handleChange={this.onChangeHandle}
                  pattern=".{6,}"
                  title="ao menos 6 caracteres"
               />
               <ButtonsBarContainer>
                  <CustomButton type="submit">Entrar</CustomButton>
                  <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>Entrar com Google</CustomButton>
               </ButtonsBarContainer>
            </form>
         </SignInContainer>
      )
   }
}

export default SignIn;