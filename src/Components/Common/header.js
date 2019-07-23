import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <>
                <div className="header">
                <a href="#default" className="logo">Login Demo</a>
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
                </div>
            </>
        )
    }
}
