import React, { Component } from "react";
import { object } from "./FooterData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  heading = "nav-header font-weight-bold text-muted";
  loop = (value, head) => {
    return (
      <div>
        <h3 className={this.heading}>{head}</h3>
        <ul className="list-unstyled">
          {typeof value[0] === "object"
            ? value.map((item, index) => {
                return (
                  <li key={item.symbol + index}>
                    <FontAwesomeIcon icon={item.symbol} color={item.color} />
                    &nbsp; {item.name}
                  </li>
                );
              })
            : value.map((item, index) => <li key={value + index}>{item}</li>)}
        </ul>
      </div>
    );
  };

  render() {
    const val = "col-md col-6";

    return (
      <React.Fragment>
        <div className="bg-light">
          <div className="container">
            <div className="row">
              {" "}
              {/** External row */}
              <div className={val}>{this.loop(object.brand, "Brands")}</div>
              <div className={val}>{this.loop(object.company, "Company")}</div>
              <div className={val}>{this.loop(object.help, "Help")}</div>
              <div className={val}>{this.loop(object.account, "Account")}</div>
              {this.loop(object.status, "Status")}
            </div>
          </div>

          <div className="text-center mt-5">
            <p>&copy; 2020 Your Company Name</p>
            <p className="m-2">
              info@pixsellz.io +25454665785 Street name 123, Avanue abc
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
