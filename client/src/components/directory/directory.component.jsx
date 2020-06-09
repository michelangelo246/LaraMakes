import React from 'react';
import { DirectoryMenuContainer } from './directory.styles';
import MenuItem from '../menu-item/menu-item.component'
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const Directory = ({ sections }) => (
    <DirectoryMenuContainer>
        {
            sections.map(({ id, ...sectionsPropsTail }) => (
                <MenuItem
                    key={id}
                    { ...sectionsPropsTail }
                />
            ))
        }
    </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);