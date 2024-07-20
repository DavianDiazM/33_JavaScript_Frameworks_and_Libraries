import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <p>Este es un sitio para comprar boletos de tus películas favoritas</p>
      <Link href="movies">
        <a>Ir a comprar pelis</a>
      </Link>
    </div>
  );
}
