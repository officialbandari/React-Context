import React, { Component } from 'react';
import User from './components/User'
import './App.css';
import { Provider } from './components/Context'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Krishna",
      age: 29
    }
  }

  handleChangeContext = () => {
    this.setState({
      name: "Bandari",
      age: 30
    })
  }

  render() {
    const contextValue = {
      data: this.state,
      handleClick: this.handleChangeContext

    }
    return (
      <div className="App">
        <Provider value={contextValue} >
          <User />
        </Provider>
      </div>
    );
  }
}

export default App;