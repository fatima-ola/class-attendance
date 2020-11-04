import React from 'react'
import './Home.css'
import illustration2 from '../images/illustration2.png'


export default function Home() {
    return (
        <div >
            <div class="row container">
                <div class="col s6 m6 l6 container">
                    <h3>
                        Welcome to PearlsTech Attendance Management System
                    </h3>
                    <h5>Click on the link below to register</h5>
                    <h5><a class="waves-effect blue darken-2 btn-small">Register</a></h5>

                </div>
                <div class="col s6 m6 l6 illustrate" ><img src={illustration2} alt="illustration" class="responsive-img" style={{ height: '700px' }} /></div>
            </div>
        </div>
    )
}
//  <a href="undefined">Icons 8</a> from <a href="https://icons8.com/">Icons8</a>
//  <a href="undefined">Natasha Remarchuk</a> from <a href="https://icons8.com/">Icons8</a>