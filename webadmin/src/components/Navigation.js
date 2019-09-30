import React from 'react'
import { NavLink } from 'react-router-dom'
// import { AuthButton } from '../services'

export const Navigation = function (props) {

    return (
        <>
            <ul id="navigation">
                <li><NavLink to="/recom">recomment</NavLink></li>
                <li><NavLink to="/product">product</NavLink></li>
                <li><NavLink to="/blog">blog</NavLink></li>
            </ul>
        </>
    )
}
