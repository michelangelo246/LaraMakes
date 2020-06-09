import React, { useState } from 'react';
import { connect } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { ButtonsBarContainer, SignInContainer, SignInTitle } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

   const [userCredentials, setCredentials] = useState({ email: '', password: '' });
   const { email, password } = userCredentials;

   const handleSubmit = async e => {
      e.preventDefault();

      emailSignInStart(email, password);
   }

   const handleChange = e => {
      const { value, name } = e.target;

      setCredentials({ ...userCredentials, [name]: value });
   }

   return (
      <SignInContainer>
         <SignInTitle>Já possui uma conta?</SignInTitle>
         <span>Entre com seu email e senha</span>

         <form onSubmit={handleSubmit}>
            <FormInput
               type="email"
               name="email"
               value={email}
               required
               label="Email"
               handleChange={handleChange}
            />
            <FormInput
               type="password"
               name="password"
               value={password}
               required
               label="Senha"
               handleChange={handleChange}
               pattern=".{6,}"
               title="ao menos 6 caracteres"
            />
            <ButtonsBarContainer>
               <CustomButton type="submit">Entrar</CustomButton>
               <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>Entrar com Google</CustomButton>
            </ButtonsBarContainer>
         </form>
      </SignInContainer>
   )
};

const mapDispatchToProps = dispatch => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);