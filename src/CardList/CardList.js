import React from "react";
import Card from "./Card/Card";

const CardList = ({ robots }) => {
    const cardsArray = robots.map((robot) => (
        <Card name={robot.name} email={robot.email} username={robot.username} />
      ));
  return (
    <>
      {cardsArray}
    </>
  );
};

export default CardList;
