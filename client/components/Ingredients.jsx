import React from 'react'
import { getFoods } from '../apiClient'
import { Route, Redirect } from 'react-router-dom'

class Ingredients extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listOfFoods: [],
      userName: '',
      foodsSelected: [],
      toRecipe: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitButton = this.submitButton.bind(this)
    this.getCategories = this.getCategories.bind(this)
    this.getFoodsInCategory = this.getFoodsInCategory.bind(this)
    this.renderFoods = this.renderFoods.bind(this)
    this.handleChangeArray = this.handleChangeArray.bind(this)
  }

  componentDidMount() {
    getFoods()
      .then(res => {
        this.setState({
          listOfFoods: res.foods
        })
      })
  }

  handleChange(e) {
    const state = this.state
    state[e.target.name] = e.target.value
  }

  handleChangeArray(e) {
   
    const state = this.state
    state[e.target.name] = state[e.target.name].concat(e.target.value)
  }


  submitButton(e) {
    e.preventDefault()
    this.setState ({
      toRecipe: true
    })
  }

  getCategories(listOfFoods) {
    let allCategories = []
    listOfFoods.map((food) => {
      return allCategories.push(food.category)
    })
    let categories = Array.from(new Set(allCategories))
    return categories
  }

  getFoodsInCategory(category) {
    let foods = this.state.listOfFoods
    let foodsInCategory = foods.filter(food => {
      return food.category == category
    })
    return foodsInCategory
  }

  renderFoods (category) {
    return this.getFoodsInCategory(category).map((food) => {
      return (
        <div key={food.name}>
          <input type="checkbox" id={food.name} key={food.name} name="foodsSelected" value={food.name} onChange={(e) => this.handleChangeArray(e)} />
          <label htmlFor={food.name}>{food.name}</label>
        </div>
      )
    })
  }


  render() {
    return (
          <div className="box">
          {this.state.toRecipe && <Redirect to="/recipe" />}
          <form onSubmit={this.submitButton}>
            <div>
            
              <div className="field">
                <div className="control">
                  <label>My name is:
                  <input type="text" className="input is-small" name="userName" onChange={(e) => this.handleChange(e)} />
                  </label>
                </div>
              </div>
  
              <div className="field">
                <div className="control">
                  <h2>Choose Your Poison</h2>
                  <h3>(What ingredients do you have on hand?)</h3>
  
                  <fieldset>
                    {this.getCategories(this.state.listOfFoods).map((category) => {
                      return (
                        <div>
                          <legend key={category}>{category}</legend>
                          {this.renderFoods(category)}
                          <br/>
                        </div>
                      )
                    })}
                  </fieldset>
                </div>
              </div>
              <button className="button" type="submit" onClick={this.submitButton}>Mulch Me!</button>
           
            </div>

          </form>
          </div>
      )
    
  }
}

export default Ingredients

