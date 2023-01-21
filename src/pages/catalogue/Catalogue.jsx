import React, { useState } from 'react';
import Card from '../../components/cards/Card';
import "./catalogue.css"
import maracuya from '../../assets/maracuya.jpeg';
import Mora from '../../assets/Mora.jpeg'
import docenas from '../../assets/moraless.jpeg'
import surtido from '../../assets/surtido.jpeg'

function Catalogue() {
  const [products, setProducts] = useState([
      {
    id: 1,
    name: 'Pulpa de maracuya',
    description: 'deliciosa pulpa agridulce natural y refrescante',
    image: maracuya,
    price: '$3.000'
  },
    {
      id: 2,
      name: 'Pulpa de mora',
      description: 'sabor intenso y suave con matices acidos',
      image: Mora,
      price: '$3.000'
    },
    {
      id: 3,
      name: 'docenas',
      description: 'compra pulpa natural de calidad',
      image: docenas,
      price: '$36.000'
    },
    {
      id: 4,
      name: 'surtido',
      description: 'escribenos y seremos tus provedores de pulpa',
      image: surtido,
      price: '$100.000'
    },
  ]);

  function handleAddToCart(product) {
    // logic to add product to cart
  }

  return (
    <>
    <div className="grid-container">
        {products.map((product) => (
          <Card className="card"
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
    </div></>
  );
}

export default Catalogue;
