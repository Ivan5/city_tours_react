import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";

export default class TourList extends Component {
  render() {
    return (
      <div>
        <section className="tourlist">
          <Tour />
        </section>
      </div>
    );
  }
}
