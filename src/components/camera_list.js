import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCameras } from '../actions/cameras';
import { addToCart } from '../actions/cameras';

import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardHeader } from 'reactstrap';

class CameraList extends Component {

  componentDidMount(){
    this.props.getCameras();
  }

  handleSelection = (camera) => {
    this.props.addToCart(camera.id);
  }


  render(){
    const imageSize = {
      width: '300px',
      height: '250px'
    };
    const camera = this.props.cameras.map((camera, i) =>{
      return(
        <Card key={i}>
          <CardHeader>{camera.title}</CardHeader>
        <CardImg top width="100%" style={imageSize} src={camera.image} alt={camera.title} />
        <CardBody>
          <CardTitle>${camera.price}</CardTitle>
          <CardSubtitle>{camera.on_sale ? "Sale" : ""}</CardSubtitle>
          <input type="button" value="Add to cart" className="button btn-secondary"
            onClick={()=>this.handleSelection(camera)}
          />
        </CardBody>
      </Card>
      )
    });
    return(
      <div>
        {camera}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log("State: ", state);
  return {
    cameras: state.cameras
  }
}

function mapDispatchToProps(dispatch){
  return {
    getCameras: bindActionCreators(getCameras, dispatch),
    addToCart: bindActionCreators(addToCart, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraList);
