import React, { Component } from 'react';
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component'

class Directory extends Component{
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'PÓS',
                    imageUrl: 'https://www.makeupandbeautyblog.com/wp-content/uploads/2018/02/mac-studio-waterweight-powder-pressed-2.jpg',
                    id: 1,
                    linkUrl: ''
                },
                {
                    title: 'BLUSHS',
                    imageUrl: 'https://4.bp.blogspot.com/-iNDsxgSkOoA/V3fh4DlYYYI/AAAAAAAAAB8/IMQXKGhELRcDy1UkkkByk2Lu4l3mbBBxwCLcB/s1600/Top%2B10%2BMAC%2BBlushes%2Bfor%2BIndian%2BSkin%2BTone%2BAnd%2BTheir%2BDupes.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'CORRETIVOS',
                    imageUrl: 'https://www.ourbeststyle.com/wp-content/uploads/2018/06/86f46dd4d0064fbe80b318dbfce90fd9.jpeg',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'BATONS',
                    imageUrl: 'https://cdn.awsli.com.br/600x700/532/532594/produto/20695312/184a8083e3.jpg',
                    id: 4,
                    size: "large",
                    linkUrl: 'batons'
                },
                {
                    title: 'BASES',
                    imageUrl: 'https://media.beaut.ie/uploads/2013/01/New-MAC-Studio-Shade-Extensions.jpg',
                    id: 5,
                    size: "large",
                    linkUrl: ''
                }
            ]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...sectionsPropsTail }) => (
                        <MenuItem
                            key={id}
                            { ...sectionsPropsTail }
                        />
                    ))
                }
            </div>
        )
    }    
}

export default Directory;