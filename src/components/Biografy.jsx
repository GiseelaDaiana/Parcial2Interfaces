import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card , ListGroup} from 'react-bootstrap';


const Biografy = ({ biografy }) => {
  
  return (
    <Card style= {{ width: '18rem', height: '230px',width: '250px' }}>
      <Card.Header className= "titleCard"  >Biography</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item> <b>Full Name: </b>{biografy['full-name']}</ListGroup.Item>
        <ListGroup.Item> <b>Alignment:</b> {biografy.alignment}</ListGroup.Item>
        <ListGroup.Item> <b>Publisher:</b> {biografy.publisher}</ListGroup.Item>
      </ListGroup>
    </Card>
        
     );
}

export default Biografy;

