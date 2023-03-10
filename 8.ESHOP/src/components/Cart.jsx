import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Cart({ productInCart, totalAmount }) {
  let products = productInCart.map((prod, index) => {
    return (
      <div key={index}>
        <Card
          style={{
            height: "10rem",
            width: "12rem",
            display: "flex",
            margin: "5px",
          }}
        >
          <Card.Img
            variant="top"
            src={prod.image}
            style={{ width: "3rem", display: "inline" }}
          />
          <Card.Text style={{ display: "flex" }}>{prod.name}</Card.Text>
          <Card.Text style={{ display: "flex" }}>
            price: {prod.price} eur
          </Card.Text>
        </Card>
      </div>
    );
  });
  return (
    <div>
      {totalAmount ? <h1>Shopping Cart:</h1> : <h1>Cart List</h1>}{" "}
      <div>{products}</div>
      {totalAmount !== 0 && <div>Total: {totalAmount}</div>}
    </div>
  );
}

export default Cart;
