/*
 ====================
 This file hosts the Appbar and loads it into the `app.js`
 ====================
 */


import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from "../actions/index";
import AppBar from './appbar'

const WAIT_INTERVAL = 1000;
let timerID;

class Search extends Component{
    constructor (props){
        super(props);

        this.state = {term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange = event => {
        this.setState({term: event.target.value});

        // clearTimeout(timerID);
        //
        // timerID = setTimeout(() => {
        //     this.props.fetchWeather(this.state.term)
        // }, WAIT_INTERVAL);
        //
        // this.setState({term: ''});
    };

    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return(
            <AppBar
                placeholder = "Search forecast for your favorite cities..."
                value={this.state.term}
                writeInput={this.onInputChange}
                onFormSubmit={this.onFormSubmit}
            />
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);