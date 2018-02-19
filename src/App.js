import React, { Component } from 'react';
import Header from './components/header';
import CameraList from './components/camera_list';
import Cart from './components/cart';

import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col xs="12" sm="6">
              <br/>
              <CameraList />
            </Col>
            <Col xs="12" sm="6">
              <br/>
              <Cart />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
