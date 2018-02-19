import React, { Component } from 'react';
import CameraList from './camera_list';
import Cart from './cart';
import { Container, Row, Col } from 'reactstrap';

class MainContainer extends Component {
  render() {
    return (
      <div>
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

export default MainContainer;
