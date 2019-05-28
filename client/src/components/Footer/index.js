import "./style.css";
import React, { Component } from "react";
import Modal from "../Modal";
import { Col, Row, Container } from "../Grid";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="bottom">
            <hr />

            <p className="center-align">
              <Modal />
            </p>

            <p className="center-align">copyrights {`IndiePlay 2019    `}</p>

            <hr />
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
