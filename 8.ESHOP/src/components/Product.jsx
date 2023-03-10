import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product({productData, addToCartFunc}) {
  return (
    <Card style={{ width: '18rem', margin: '5px', display:'inline-block' }}>
      <Card.Img variant="top" src={productData.image} />
      <Card.Body>
        <Card.Title>{productData.name}</Card.Title>
        <Card.Text>{productData.price} eur</Card.Text>
        <Button variant="primary" onClick={()=>addToCartFunc(productData)}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product ;