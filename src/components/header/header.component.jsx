import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import { BrandContainer, BrandNameContainer, HeaderContainer, LogoComponent, LogoContainer, OptionLink, OptionsContainer } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
   <HeaderContainer>
      <BrandContainer>
         <LogoContainer to="/">
            <LogoComponent />
         </LogoContainer>
         <BrandNameContainer>Lara Makes</BrandNameContainer>
      </BrandContainer>
      <OptionsContainer>
         <OptionLink to="/shop">
            PRODUTOS
         </OptionLink>
         <OptionLink to="/shop">
            CONTATO
         </OptionLink>
         {
            currentUser ?
               <OptionLink as='div' onClick={ signOutStart }>SAIR</OptionLink> :
               <OptionLink to="/signin">ENTRAR</OptionLink>
         }
         <CartIcon />
      </OptionsContainer>
      {
         hidden ?
            null :
            <CartDropdown />
      }
   </HeaderContainer>
)

const mapDispatchToProps = dispatch => ({
   signOutStart: () => dispatch(signOutStart())
});

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);


// v2
// const mapStateToProps = ({ 
//    user:{ currentUser }, 
//    cart:{ hidden } 
// }) => ({ // função: pegar props a partir do root reducer
//    currentUser,
//    hidden
// });

// v1
// const mapStateToProps = state => ({ // função: pegar props a partir do root reducer
//    currentUser: state.user.currentUser, // escolher props
//    hidden: state.cart.hidden
// });

// const connector = connect(mapStateToProps);
// export default connector(Header);