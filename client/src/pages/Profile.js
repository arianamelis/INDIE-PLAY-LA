import React, { Component } from "react";
import withAuth from "./../components/withAuth";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import { Col, Row, Container } from "../components/Grid";

import FavCard from "../components/FavCard";
class Profile extends Component {
  state = {
    username: "",
    email: "",
    events: []
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState({
        username: res.data.username,
        email: res.data.email
      });
      API.getProfileEvents(res.data.email).then(res2 => {
        console.log(res2);
        this.setState({
          events: res2.data
        });
      });
    });
  }

  render() {
    return (
      <div>
        
        <Header>
          <h1>
            {this.state.username} profile page
            <br />
    
          </h1>
          <h2>Username: {this.state.username}</h2>
          <h2>Email: {this.state.email}</h2>
          <button
              type="button"
              className="btn btn-danger"
              onClick={this.handleLogout}
            >
              Logout
            </button>
        </Header>
        <Row>
 \
        </Row>
       <Container>
        <div>
        <Row>
              {this.state.events.map((event, i) => {
                return <FavCard event={event} key={i} />;
              })}
            </Row>
          
          </div>
          <Row>
          <Link to="/">Go home</Link>
          </Row>
          </Container>
        
        
      </div>
    );
  }
}

export default withAuth(Profile);
