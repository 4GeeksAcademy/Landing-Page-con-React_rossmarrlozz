import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../../styles/index.css';


const InfoCartas = [
  {
    imgSrc: "https://img.freepik.com/foto-gratis/fondo-castillo-costero_1409-6779.jpg?t=st=1722555686~exp=1722559286~hmac=7948849e8dcdde343b1b7d83b0a26c9a8e574c9686fffc157f284c6d7cd873ec&w=1060",
    title: "Card title",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    updated: "Last updated 3 mins ago"
  },
  {
    imgSrc: "https://img.freepik.com/foto-gratis/fondo-castillo-costero_1409-6779.jpg?t=st=1722555686~exp=1722559286~hmac=7948849e8dcdde343b1b7d83b0a26c9a8e574c9686fffc157f284c6d7cd873ec&w=1060",
    title: "Card title",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    updated: "Last updated 3 mins ago"
  },

  {
    imgSrc: "https://img.freepik.com/foto-gratis/fondo-castillo-costero_1409-6779.jpg?t=st=1722555686~exp=1722559286~hmac=7948849e8dcdde343b1b7d83b0a26c9a8e574c9686fffc157f284c6d7cd873ec&w=1060",
    title: "Card title",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    updated: "Last updated 3 mins ago"
  },
  {
    imgSrc: "https://img.freepik.com/foto-gratis/fondo-castillo-costero_1409-6779.jpg?t=st=1722555686~exp=1722559286~hmac=7948849e8dcdde343b1b7d83b0a26c9a8e574c9686fffc157f284c6d7cd873ec&w=1060",
    title: "Card title",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    updated: "Last updated 3 mins ago"
  }

];
const Cartas = () => {
  return (
      <CardGroup className="card-group">
          {InfoCartas.map((card, index) => (
              <Card key={index}>
                  <Card.Img variant="top" src={card.imgSrc} alt="..." />
                  <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <Button bsStyle="primary">Call to acction</Button>
                  </Card.Footer>
              </Card>
          ))}
      </CardGroup>
  );
}

export default Cartas;