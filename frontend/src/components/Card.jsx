import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default class Card extends Component {
  rate = (rating) => {
    let array = [];
    for (let i = 0; i < 5; i++) {
      array.push(
        <li key={i} className="list-inline-item">
          <FontAwesomeIcon
            icon={faStar}
            color={i < rating ? "orange" : "grey"}
          />
        </li>
      );
    }
    return array;
  };

  inside = (rating) => {
    let array = this.rate(rating);
    return (
      <ul
        className="list-unstyled list-inline"
        style={{ marginTop: -0.8 + "rem" }}
      >
        {array.map((item) => item)}
      </ul>
    );
  };

  render() {
    const { name, money, rating, image } = this.props;

    return (
      <React.Fragment>
        <div className="card bordered">
          <a href="n" style={{ textAlign: "center" }}>
            {" "}
            <img src={image} alt="Tshirt" className="card-img-top" />
          </a>
          <div className="card-body">
            <p className="card-text text-wrap">{name}</p>
            {rating === 0 ? "" : this.inside(rating)}
            <h5 style={{ marginTop: -0.8 + "rem" }}>{money}</h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
