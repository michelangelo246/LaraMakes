import React from 'react';
import './header.style.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/logo.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
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
      </div>
   </div>
)

const mapStateToProps = state => ({ // função: pegar props a partir do root reducer
   currentUser: state.user.currentUser // escolher props
})

export default connect(mapStateToProps)(Header);


// pode ser?
// const connector = connect(mapStateToProps);
// export default connector(Header);