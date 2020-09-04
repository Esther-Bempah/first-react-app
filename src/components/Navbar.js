import React, { Component } from 'react'

import "./../css/components.css";
import "./../css/global.css";
import "./../css/layout.css";
import "./../css/sample-wallpaper.css";

export class Navbar extends Component {
    render() {
        return (
            <div>

                <nav class="navbar">
                    <div class="container">
                        <a href="#">Hulk</a>

                        <a href="#" class="logo is-active">Marvel</a>
                        <a href="#">Venom</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
