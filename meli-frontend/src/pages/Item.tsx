import "@styles/Item.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { getItem } from "../resources/getItem";
import { Item as ItemType } from "../types/Item";
import { formatMoney } from "../utils/money.utils";
import Breadcrumb from "../components/Breadcrumb";
import { SEO } from "../components/SEO";

export const Item = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [item, setItem] = useState<ItemType | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await getItem(id!);
        setItem(response.data.item);
        setCategories(response.data.categories);
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
        <SEO
          title="Producto no encontrado - Mercado Libre"
          description="El producto que buscas no existe en Mercado Libre"
          keywords="meli, producto, no, encontrado"
        />
        <h1>Producto no encontrado</h1>
      </div>
    );
  }

  return (
    <main>
      <Breadcrumb paths={categories} />
      <div className="item-container">
        <SEO
          title={item.title}
          description={item.description}
          keywords={item.title}
        />
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
            <button aria-label="Comprar">Comprar</button>
          </div>
        </div>
        <section className="item-description-container">
          <h2>Descripción del producto</h2>
          <p>{item.description}</p>
        </section>
      </div>
    </main>
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
