import React from 'react';
import './Animations.css';

export default class Animations extends React.Component {
    constructor() {
        super();
        this.state = {
            slide: false
        };
    }
    render() {
        return (
            <div className='Animations'>
                <nav className='nav'>
                    <div className='logo'>Cats for Rent</div>
                    <div className='links'>Cats About Contact</div>
                    <div onClick={() => this.setState({ slide: !this.state.slide })} 
                        className='ham'>HAM</div>
                </nav>
                <div className={this.state.slide ? 'menu slide' : 'menu'}></div>
            </div>
        );
    }
}