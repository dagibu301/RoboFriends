import React from "react";
import CardList from "./CardList/CardList";
import { robots } from "./shared/robots";
import SearchBox from "./SearchBox/SearchBox";

const App = () => {
  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
