import React, { Component } from "react"; 

import {Card,Button} from 'react-bootstrap/'


 class CohocoCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.choco.imageUrl} />
          <Card.Body>
            <Card.Title>    {this.props.choco.title}     </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary"  onclick={ ()=>  this.props.addChoco(this.props.choco) }  >  Add </Button>
          </Card.Body>  
        </Card>
      </div>
    );
  }
}

export default CohocoCard;
