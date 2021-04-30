import React, { Component } from 'react';
import { Consumer } from './Context'

class Guest extends Component {
    render() {
        return (
            <div>
                <h1>Guest Component</h1>
                <Consumer>
                    {({ data, handleClick }) => (
                        <div>
                            <h4>
                                Name :{data.name} Value : {data.age}
                            </h4>
                            <button onClick={handleClick}>ChangeValues</button>
                        </div>
                    )}
                </Consumer>
            </div>
        );
    }
}

export default Guest;