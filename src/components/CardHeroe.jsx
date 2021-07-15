import { Card, Button} from 'react-bootstrap';
import React from 'react';

const CardHeroe = ({ data, onClick }) => {
    return (
        <Card style={{ width: '18rem',height: '190px',width: '190px'}}>
            <Card.Img variant="top" src={data?.image?.url}/>
            <Card.Body>
               <Card.Title className= "titleCard"> {
               data.biography.alignment == 'bad'? 'villano': 'superhero'
               }</Card.Title>
                <Card.Text>
                { data?.name }
                </Card.Text >
                <Button variant="warning" onClick={onClick}><b> More data </b></Button>
            </Card.Body>
        </Card>

    );
}

export default CardHeroe;