import React from 'react';
import Link from 'next/link';

export default function Form(props) {
  const [quantity, setQuantity] = React.useState(0);
  const { movie } = props;

  return (
    <form>
      <h3>{movie.name}</h3>

      <button
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 0}>
        -
      </button>

      {quantity}

      <button
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        disabled={quantity >= movie.available}>
        +
      </button>

      <Link href={{ pathname: 'pay', query: { name: movie.name, quantity } }}>
        <a>Pagar</a>
      </Link>
    </form>
  );
}
