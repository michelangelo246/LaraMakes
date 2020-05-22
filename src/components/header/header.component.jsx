import React from 'react';
import './header.style.scss'
import { ReactComponent as Logo } from './../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => (
   <div className="header">
      <div className="brand">
         <Link className="logo-placeholder" to="/">
            <Logo className="logo"/>
         </Link>
         <div className="brand-name">Lara Makes</div>
      </div>
      <div className="options">
         <Link className="option" to="/shop">
            PRODUTOS
         </Link>
         <Link className="option" to="/shop">
            CONTATO
         </Link>
         {
            currentUser?
            <div className="option" onClick={ () => auth.signOut() }>SAIR</div>:
            <Link className="option" to="/signin">ENTRAR</Link>
         }
         <CartIcon/>
      </div>
      {
         hidden?
         null:
         <CartDropdown/>
      }
   </div>
)

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);


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