/*
 ====================
 This file hosts the Table and loads it into the `app.js`
 ====================
 */


import React, {Component} from 'react'
import {connect} from 'react-redux'
import WeatherTable from './material_table'


class Table extends Component{
    // renderWeather(cityData){
    //     const name = cityData.city.name;
    //
    //     return({name})
    // }


    render(){
        // console.log(this.props.weather);
        return(
            <WeatherTable
                // renderWeather={this.renderWeather}
                weatherlist={this.props.weather}
            />
        );
    }
}

/*
 ================================
 ES6 syntax
 @mapStateToProps({weather}): it means we are extracting weather from the state that
 is passed to mapStateToProps. It is basically the following:

 const weather = state.weather

 @return {weather:weather}: if key and value is same, then in the ES6 syntax we
 can write only one, either the key or the value.
 ================================
 */
function mapStateToProps({weather}) {
    return {weather}
}

/*
 ==================================
 Old syntax
 ==================================
function mapStateToProps(state) {
    return {weather: state.weather}
}
*/


export default connect(mapStateToProps)(Table)