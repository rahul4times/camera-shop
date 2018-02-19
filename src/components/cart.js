import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody, Table } from 'reactstrap';

class Cart extends Component {

  render(){
    const sortedInCart = this.props.inCart.sort((a,b) => a.id - b.id);
    const inCart = sortedInCart.map((item, i) => {
      return(
        <tr key={i}>
          <td>{item.title}</td>
          <td>$ {item.price}</td>
          <td>Remove</td>
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
              {inCart}
            </tbody>
          </Table>
       </CardBody>
     </Card>
    );
  }
}

function mapStateToProps(state){
  return {
    inCart: state.inCart
  }
}
export default connect(mapStateToProps, null) (Cart);
