import "@styles/Item.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { getItem } from "../resources/getItem";
import { Item as ItemType } from "../types/Item";
import { formatMoney } from "../utils/money.utils";

export const Item = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [item, setItem] = useState<ItemType | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await getItem(id!);
        setItem(response.data.item);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <LoadingSpinner />
      </div>
    );
  }

  if (!item) {
    return (
      <div>
        <Helmet>
          <title>Producto no encontrado - Mercado Libre</title>
          <meta name="description" content="Producto no encontrado" />
        </Helmet>
        <h1>Producto no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="item-container">
      <Helmet>
        <title>{item.title} - Mercado Libre</title>
        <meta name="description" content={item.description} />
      </Helmet>
      <div className="item-main-container">
        <div className="item-image-container">
          <img src={item.picture} alt={item.title} />
        </div>
        <div className="item-info-container">
          <p>
            {getConditionTranslation(item.condition)}{" "}
            {item.sold_quantity ? ` - ${item.sold_quantity} vendidos` : ""}
          </p>
          <h1>{item.title}</h1>
          <h2>
            {formatMoney(item.price.amount, {
              currency: item.price.currency,
              locale: "es-AR",
              decimalScale: 0,
              inputDecimalScale: 0,
            })}
          </h2>
          <button>Comprar</button>
        </div>
      </div>
      <section className="item-description-container">
        <h2>Descripción del producto</h2>
        <p>{item.description}</p>
      </section>
    </div>
  );
};

const getConditionTranslation = (condition: string) => {
  switch (condition) {
    case "new":
      return "Nuevo";
    case "used":
      return "Usado";
    default:
      return "";
  }
};
