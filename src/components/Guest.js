import React, { Component } from 'react';
import { MyContext } from '../App'

class Guest extends Component {
    render() {
        return (
            <div>
                <h1>Guest Component</h1>
                <MyContext.Consumer>
                    {({ data, handleClick }) => (
                        <div>
                            <h4>
                                Name :{data.name} Value : {data.age}
                            </h4>
                            <button onClick={handleClick}>ChangeValues</button>
                        </div>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}

export default Guest;