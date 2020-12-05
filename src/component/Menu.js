import React, { Component } from 'react'

export class Menu extends Component {
    render() {
        const { changeCategory, category } = this.props
        return (
            <div>
                <div className=" menu-web relative">
                    <ul>
                        <li><a href="#" onClick={changeCategory} > <p>men clothing</p></a></li>
                        <li><a href="#"> <p>jewelery</p></a></li>
                        <li><a href="#"> <p>electronics</p></a></li>
                        <li><a href="#"> <p>women clothing</p></a></li>
                        <li><a href="#"> <p></p></a></li>
                        <li><a href="#"> <p></p></a></li>
                        <li><a href="#"> <p></p></a></li>
                        <li><a href="#"> <p></p></a></li>
                        <li><a href="#"> <p></p></a></li>
                        <li><a href="#"> <p></p></a></li>
                        <li><a href="#"> <p></p></a></li>
                        <li><a href="#"> <p></p></a></li>
                        <li><a href="#"> <p></p></a></li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Menu
