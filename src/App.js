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
        this.handleChange = this.handleChange.bind(this);
    }


    // When you call new method of class then you should write down here
    // and declare in construct this method class
    handleChange(e){
        this.setState({searchField:e.target.value})
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
                        handleChange={this.handleChange}
                    />
                    <CardList monsters={filteredMonsters} />
                </div>
        );
    }
}

export default App;
