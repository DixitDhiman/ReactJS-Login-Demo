import React, { Component } from 'react'
import Header from './../Components/Common/header';
import Footer from './../Components/Common/footer';
import Login from './../Components/login';
export default class layout extends Component {
    render() {
        return (<>
            <Header />
            <Login />
            <Footer />
        </>
        )
    }
}
