/*
 ====================
 This file hosts the Appbar and loads it into the `app.js`
 ====================
 */


import React, {Component} from 'react'
import AppBar from './appbar'


export default class Search extends Component{
    constructor (props){
        super(props);

        this.state = {term: '' };
    }

    onInputChange(event){
        console.log(event.target.value)
    }

    render(){
        return(
            <AppBar
                placeholder = "Search forecast for your favorite cities..."
                value={this.state.term}
                onChange={this.onInputChange}
            />
        );
    }
}