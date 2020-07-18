import React from 'react';
import './App.css';
import {CardList} from "./component/card-list/card-list.component";

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
                    <CardList monsters={this.state.monsters} />
                </div>
        );
    }
}

export default App;
