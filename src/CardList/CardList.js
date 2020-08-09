import React from "react";
import Card from "./Card/Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          name={robot.name}
          email={robot.email}
          username={robot.username}
        />
      ))}
    </div>
  );
};

export default CardList;
