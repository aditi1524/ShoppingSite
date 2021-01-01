import React from "react";
import Card from "./Card";

export default function Structure({ array }) {
  const value = array.map((user, index) => {
    return (
      <div className="col-md">
        <Card
          Key={index}
          image={array[index].image}
          money={array[index].money}
          name={array[index].name}
          rating={array[index].rating}
        />
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="row">{value}</div>
    </React.Fragment>
  );
}
