import React from 'react'
import '../../css/NavbarOption.css'

function NavbarOption({text, Icon}) {
    return (
        <div className='navbarOption'>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default NavbarOption