import React, { Component } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import foods from '../utils/foods.json';
import FoodList from '../components/FoodList';

export class Home extends Component {
    constructor(){
        super();
        this.state={
            foods:[]
        };
    }
    componentDidMount(){
        this.setState({foods:foods})
    }
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <FoodList foods={this.state.foods}/>
            </div>
        );
    }
}

export default Home;
