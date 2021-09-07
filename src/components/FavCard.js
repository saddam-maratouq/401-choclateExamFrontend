import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/'

export class FavCard extends Component {
    render() {
        return (
            <div>
                
                <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.kinder.imageUrl} />
          <Card.Body>
            <Card.Title>    {this.props.kinder.title}     </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary"  onclick={ ()=>  this.props.DeletChoco(this.props.index) } >  delet </Button>
            <Button variant="primary"  onclick={ ()=>  this.props.UbdateChoco(this.props.kinder._id) }  >  Add </Button>
          </Card.Body>  
        </Card>


            </div>
        )
    }
}

export default FavCard
