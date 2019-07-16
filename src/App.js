import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchBox: "",
      monster: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => this.setState({ monster: response }));
  }

  render() {
    const { monster, searchBox } = this.state;
    const filteredMonster = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchBox.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={e => this.setState({ searchBox: e.target.value })}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
