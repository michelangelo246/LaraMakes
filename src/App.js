import React, { Component } from 'react';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import checkoutPage from './pages/checkout/checkout.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect'
import './App.css';

class App extends Component{

  unsubscribeFromAuth = null;

  componentDidMount(){

    const { checkUserSession } = this.props;
    
    checkUserSession();
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

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
