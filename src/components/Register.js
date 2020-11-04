import React, { Component } from 'react'
import M from 'materialize-css'
import NavBar from './NavBar';
import Footer from './Footer';

class Register extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" class="validate" />
                            <label for="icon_prefix">First Name</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons prefix">phone</i>
                            <input id="icon_telephone" type="tel" class="validate" />
                            <label for="icon_telephone">Telephone</label>
                        </div>
                    </div>
                </form>
                <Footer />
            </div>
        )
    }
}

export default Register