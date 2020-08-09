import React from "react";
import CardList from "./CardList/CardList";
import { robots } from "./shared/robots";
import SearchBox from "./SearchBox/SearchBox";


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});

    }

    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        
        return (
            <div className="tc">
              <h1>RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange} />
              <CardList robots={filterRobots} />
            </div>
          );
    }
}

export default App;
