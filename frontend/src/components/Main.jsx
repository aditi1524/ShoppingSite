import React from "react";
import { Details, New } from "./Array";
import Structure from "./Structure";
import Card from "./Card";

export default function Main() {
  return (
    <React.Fragment>
      <div className="container">
        <h2>Popular Products</h2>
        <Structure array={Details} />
        <a
          className="btn text-primary float-right bordered border-primary"
          href="ww"
        >
          {" "}
          See all{" "}
        </a>
        <h2>New Arrived</h2>
        <Structure array={New} />
        <h2>Recommended</h2>

        <div className="row">
          <div className="col-md">
            <Card
              image={Details[0].image}
              money={Details[0].money}
              name={Details[0].name}
              rating={0}
            />
          </div>
          <div className="col-md">
            <Card
              image={Details[1].image}
              money={Details[1].money}
              name={Details[1].name}
              rating={0}
            />
          </div>
          <div className="col-md">
            <Card
              image={Details[2].image}
              money={Details[2].money}
              name={Details[2].name}
              rating={0}
            />
          </div>
          <div className="col-md">
            <Card
              image={Details[3].image}
              money={Details[3].money}
              name={Details[3].name}
              rating={0}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
