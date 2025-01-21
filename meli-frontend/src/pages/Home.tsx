import { Helmet } from "react-helmet";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Buscador de productos de MELI</title>
        <meta
          name="description"
          content="Usá el buscador para encontrar el producto que más te guste en Mercado Libre."
        />
        <meta
          name="keywords"
          content="Mercado Libre, buscador de productos, compras online"
        />
      </Helmet>
      <h1>Buscador de productos de MELI</h1>
      <p>Usá el buscador para encontrar el producto que más te guste</p>
    </div>
  );
};
