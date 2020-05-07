import React from 'react';
import './menu-item.style.scss';
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    <div className={ `${(size? size: null)} menu-item` } onClick={ () => history.push(`${match.url}${linkUrl}`) }>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}/>
        <div className="content">
            <h1 className="title">{ title.toUpperCase() }</h1>
            <span className="subtitle">COMPRE AGORA</span>
        </div>
    </div>
);
export default withRouter(MenuItem);