import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cat from './assets/catcat.jpg';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Cat} />
      <Card.Body>
        <Card.Title>Cats are amazing!</Card.Title>
        <Card.Text>
          Do you agree or not that cats are amazing?
          If you do so - you are amazing!
        </Card.Text>
        <Button variant="primary">I Agree!</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;