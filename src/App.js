import React from 'react';
import './App.css';
import {CardList} from "./component/card-list/card-list.component";

class App extends React.Component{


    constructor() {
        super();
        this.state = {
            monsters : [],
            searchField:''
        };

    }


    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(i => this.setState({monsters:i}));
    }

    render() {
        return (
                <div className="App">
                    <input type="search" placeholder="Type to search from box"
                           onChange={e => {
                               this.setState({searchField:e.target.value}, () =>{
                                   console.log(this.state);
                               });

                           }}/>
                    <CardList monsters={this.state.monsters} />
                </div>
        );
    }
}

export default App;
