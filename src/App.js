import React, { Component } from 'react';
import User from './components/User'
import './App.css';
export const MyContext = React.createContext();
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
        <MyContext.Provider value={contextValue} >
          <User />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;