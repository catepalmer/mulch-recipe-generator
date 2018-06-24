import React from 'react'

class Ingredients extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className='ingredients'>
        <h2>What have you got in your fridge?????????</h2>
        <form>
          <label for="food">Food</label>
          <input type="text" name="name" />
          <br/>
          <label for="quantity">Quantity</label>
          <input type="text" name="name" />
          <br/>
          <br/>
          <input type="submit" value="Go to Ingredients Selection" />
        </form>
      </div>
    )
  }
}

  export default Ingredients