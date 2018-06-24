import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className='login'>
        <h2>Please enter your name:</h2>
        <form action="/ingredients">
          <input placeholder="Name" type="text" name="name" />
          <br/>
          <br/>
          <input type="submit" value="Go to Ingredients Selection" />
        </form>
      </div>
    )
  }
}

  export default Login