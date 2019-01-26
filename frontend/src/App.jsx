import React, { Component } from 'react';
import axios from 'axios';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


class App extends Component {


// *** need to use axios to send data to database ***


  render() {
    return (
      <div className="main-container">
        <Grid>
          <Row className="show-grid">
            <Col>
            <nav className="nav-bar">
              <h1>bikesafeTO</h1>

            </nav>
            </Col>
          </Row>

          <Row className="show-grid">
            <div className="landing-media"></div>
          </Row>

          <Row className="show-grid">
            <div className="map-container">
            </div>
          </Row>

          <Row className="show-grid">
            <div className="filter-bar">

            </div>
          </Row>

          <Row className="show-grid">
            <div className="graphs-container"></div>
          </Row>

          <Row className="show-grid">
            <footer className="footer"></footer>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
