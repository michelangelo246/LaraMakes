import React from 'react';
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component'
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            sections.map(({ id, ...sectionsPropsTail }) => (
                <MenuItem
                    key={id}
                    { ...sectionsPropsTail }
                />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);