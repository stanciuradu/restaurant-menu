import React, { Component } from "react";
import Header from "../components/Header";
import foods from "../utils/foods.json";
import FoodList from "../components/FoodList";
import '../components/Navbar.css';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      foods: [],
    };
  }
//   request catre back-edn
  componentDidMount() {
    this.setState({ foods: foods });
  }

  // filtrari
  handleAllFoods(event) {
    this.setState({ foods: foods });
  }

  handleFilterByBreakfast(event) {
    const filterFoodsByBreakfast = this.state.foods.filter(
      (food) => food.name === "American Pancakes" || food.name === "Breakfast"
    );
    this.setState({ foods: filterFoodsByBreakfast });
  }
  
  handleFilterByLunch(event) {
    const filterFoodsByLunch = this.state.foods.filter(
      (food) => food.name === "American Burger" || food.name === "Max Burger" || food.name==="Bacon Burger"
    );
    this.setState({ foods: filterFoodsByLunch });
  }
  handleFilterByDinner(event) {
    const filterFoodsByDinner = this.state.foods.filter(
      (food) => food.name === "American dinner" || food.name === "Oreo dream cake" 
    );
    this.setState({ foods: filterFoodsByDinner });
  }
  
  render() {
    return (
      <div>
        <Header />
        <div className="container-navbar">
          <button type="button" onClick={(event)=>this.handleAllFoods(event)}>All</button>
          <button type="button" onClick={(event)=>this.handleFilterByBreakfast(event)}>Breakfast</button>
          <button type="button" onClick={(event)=>this.handleFilterByLunch(event)}>Lunch</button>
          <button type="button" onClick={(event)=>this.handleFilterByDinner(event)}>Dinner</button>
        </div>
        <FoodList foods={this.state.foods} />
      </div>
    );
  }
}

export default Home;
