import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteFromCart } from '../actions/cameras';
import { Card, CardHeader, CardBody, Table, CardText, Button } from 'reactstrap';
import { Link } from "react-router-dom";

class Cart extends Component {

  handleDelete = (item) => {
    this.props.deleteFromCart(item.id);
  }

  render(){

    const inCart = this.props.inCart.filter(camera => camera.in_cart === true)
    const subTotal = inCart.reduce((accum, camera) => {
      return accum + camera.price
    }, 0);

    const tax = +(subTotal * .086).toFixed(2);
    const total = (subTotal + tax).toFixed(2);

    const cameras = inCart.map((item, i) => {
      return(
        <tr key={i}>
          <td>{item.title}</td>
          <td>$ {item.price}</td>
          <td>
            <input type="button" value="Delete" onClick={()=>this.handleDelete(item)}/>
          </td>
        </tr>
      )
    });

    return(
      <Card>
       <CardHeader>Shopping Cart</CardHeader>
       <CardBody>
          <Table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cameras}
            </tbody>
          </Table>
          <hr/>
          <CardText>Sub-total: $ {subTotal}</CardText>
          <CardText>Tax: $ {tax}</CardText>
          <CardText>Total: $ {total}</CardText>
          <hr/>
          <Button><Link to="/checkout">Checkout</Link></Button>
       </CardBody>
     </Card>
    );
  }
}

function mapStateToProps(state){
  return {
    inCart: state.cameras
  }
}
function mapDispatchToProps(dispatch){
  return {
    deleteFromCart: bindActionCreators(deleteFromCart, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Cart);
