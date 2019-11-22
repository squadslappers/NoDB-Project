import React from 'react';

const Header = props => {

        return(
            <header id="header">
                <button className="buttons">☰</button>
                <h1 id='progress'>progress</h1>
                <button className="buttons" onClick = {props.togglePopup}>+</button>
            </header>
        )
}

export default Header;