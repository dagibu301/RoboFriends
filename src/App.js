import React from "react";
import CardList from "./components/CardList/CardList";
import { robots } from "./shared/robots";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import Scroll from "./components/Scroll/Scroll";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }))
      .catch(() => this.setState({ robots: robots }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <h1 className="tl">Loading...</h1>
      </div>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
