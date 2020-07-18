import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{


    constructor() {
        super();
        this.state = {
          monsters : []
        };
        this.state.other = [];
    }


    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(i => this.setState({monsters:i}));
    }

    render() {
        return (
                <div className="App">
                    {this.state.monsters.map(i =>(
                        <h1 key={i.id}>{i.name}</h1>
                    ))}
                </div>
        );
    }
}

export default App;
