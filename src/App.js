import React from 'react';
import './App.css';
import {CardList} from "./component/card-list/card-list.component";
import {SearchBox} from "./component/serach-box/searchBoxComponent";

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
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
                <div className="App">
                    <SearchBox
                        placeholder="Search monsters"
                        handleChange={e =>
                            this.setState({searchField:e.target.value})}
                    />
                    <CardList monsters={filteredMonsters} />
                </div>
        );
    }
}

export default App;
