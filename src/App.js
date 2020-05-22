import React, { Component } from 'react';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import checkoutPage from './pages/checkout/checkout.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect'
import './App.css';

class App extends Component{

  unsubscribeFromAuth = null;

  componentDidMount(){ // cria listener para alterações no estado (e.g. google login)
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { // retorna função para cancelar o listener
      if(userAuth){ // se a alteração retornou um login (e não um logout) com um usuário autenticado
        const userRef = await createUserProfileDocument(userAuth); // cria no BD se não estiver

        userRef.onSnapshot(snapshot => { // cria listener para snapshots do usuário que fez login
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      else{ // se foi um logout, o usuário está vazio >> se der problema, tirar do else
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header/>
        <div className="body-template">
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={checkoutPage}/>
            <Route exact path='/signin' render={ () => this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/> }/>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
