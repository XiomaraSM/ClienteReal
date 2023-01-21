import "./card.css";
import Cart from "../../assets/cart.png";

const Card = ({ product, onAddToCart }) => {
  return (
    <>
      <div className="product-card">
        <img className="imgcard" src={product.image} alt={product.name} />
        <h3 className="titlecard">{product.name}</h3>
        <p className="textcard">{product.description}</p>
        <p className="textcard">Precio: {product.price}</p>
        <button className="buttoncard" onClick={() => onAddToCart(product)}>
          <img src={Cart} alt="" />
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default Card;
