import React from 'react'
import { getFoods } from '../apiClient'

class Ingredients extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: ''
    }
  }

  componentDidMount() {
    getFoods()
      .then(foods => {
        console.log('Here is the thing from Ingredients: ' + foods)
        this.setState({
          foods
        })
      })
  }

  render() {
    return (
      <div>
        <div className="box">
          <form>
            <div className="field">
              <div className="control">
                <label>What's your name?</label>
                <input type="text" className="input is-small" name="name" onChange={(e) => this.handleChange(e)} />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label>What's in your fridge?</label>
                <br />
                <div className="select">
                  <select className="select" name="type" onChange={(e) => this.handleChange(e)}>

                    {this.state.foods.map((name, i) => {
                      return (
                        <option key={foods}>{foods}</option>
                      )
                    })}

                  </select>
                </div>
                <br /><hr />

                 <div className="field">
              <div className="control">
                <label>Quantity</label>
                <br />
                <div className="select">
                  <select className="select" name="type" onChange={(e) => this.handleChange(e)}>

                    {this.state.foods.map((name, i) => {
                      return (
                        <option key={foods}>{foods}</option>
                      )
                    })}

                  </select>
                </div>
                <br /><hr />
                <button className="button" type="submit" onClick={this.submitButton}>Submit</button>
              </div>
            </div>
          </form>
        </div>

      </div>


    )
  }
}

export default Ingredients

