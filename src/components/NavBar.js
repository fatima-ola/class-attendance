import React, { useEffect } from 'react'
import M from 'materialize-css'

function NavBar() {
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }, [])
    return (
        <div>
            <div>
                <nav className="blue darken-2">
                    <div class="nav-wrapper container">
                        <a href="#!" class="brand-logo">PearlsTech</a>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="sass.html">Home</a></li>
                            <li><a href="badges.html">Login</a></li>
                            <li><a href="collapsible.html">Dashboard</a></li>
                            <li><a href="mobile.html">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">Home</a></li>
                <li><a href="badges.html">Login</a></li>
                <li><a href="collapsible.html">Dashboard</a></li>
                <li><a href="mobile.html">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar