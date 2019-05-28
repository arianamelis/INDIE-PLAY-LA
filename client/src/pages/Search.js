import React from "react";
import API from "../utils/API";
import EventCard from "../components/EventCard/EventCard";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import List from "../components/List";
import { Col, Row, Container } from "../components/Grid";
import AuthService from "../components/AuthService";
import Util from '../utils/utilitieFunctions'

import { FormHelperText } from "@material-ui/core";
const Auth = new AuthService();

export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            artists: []
        };
        this.handleSave = this.handleSave.bind(this) 
    }

  componentDidMount() {
    API.getIndieArtistEvents().then(results => {
      const unique = Util.uniqueImg(results.data)
      console.log(unique, '!!!!!')
      this.setState({ artists: unique });
    });
  }
  handleSave(event) {
    event['email'] = Auth.getProfile().email
    axios.post("/api/events/save", event).then(results=>{console.log(results)
   })   
  }

  render() {
    console.log(this.state);
    return (
      <Wrapper>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">
              <strong>Explore Indie Events</strong>
            </h1>
            <h2 className="text-center">
              Search and save upcoming indie events
            </h2>
          </Col>
        </Row>
        <div>
          <Row>
            {/* <Col size="md-6" > */}
            {this.state.artists.length &&
              this.state.artists.map((event, i) => {
                console.log(event)
                return <EventCard event={event} key={i} handleSave={this.handleSave}/>;
              })}

            {/* </Col> */}
          </Row>
        </div>
      </Wrapper>
    );
  }
}
