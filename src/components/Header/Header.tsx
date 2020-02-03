import React from 'react'

import './style/style.scss'

export const Header: React.FC<{}> = () => {
    return (
        <div className="main-header w-1239">
            <div className="up-banner">
                <div className="lang-menu">
                    <ul className="ul-lang-menu">
                        <li>ENG</li>
                    </ul>
                </div>
                <div className="logo">
                    <img src="" />
                </div>
                <div className="right-icons">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </div>
            <div className="main-menu">
                <ul>
                    <li>BUILD MY SHADE</li>
                    <li>FABRICS</li>
                    <li>ROLLER SHADES</li>
                </ul>
            </div>
        </div>
    )
}


