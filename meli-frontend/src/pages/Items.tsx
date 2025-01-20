import "@styles/Items.scss";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { getProducts } from "../resources/getProducts";
import { SearchProduct } from "../types/SearchProduct";
import { formatMoney } from "../utils/money.utils";

export const Items = () => {
  const navegate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");

  const [products, setProducts] = useState<SearchProduct[] | null>(null);
  const [categories, setCategories] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleGoToProduct = (productId: string) => {
    navegate(`/items/${productId}`);
  };

  useEffect(() => {
    (async () => {
      if (query) {
        try {
          setIsLoading(true);
          const response = await getProducts(query);

          setProducts(response.data.items.slice(0, 4));
          setCategories(response.data.categories);
          console.log(response.data.categories);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }, [query]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="items">
      <div className="items-categories">
        {categories?.map((category, index) => (
          <span key={index}>{category}</span>
        ))}
      </div>

      <div className="items-container">
        {products?.map((product, i) => (
          <>
            <div
              key={product.id}
              className="items-list-item"
              onClick={() => handleGoToProduct(product.id)}
            >
              <img
                className="items-list-item-image"
                src={product.picture}
                alt={product.title}
              />
              <div className="items-list-item-info">
                <div className="items-list-item-price-container">
                  <span className="items-list-item-price">
                    {formatMoney(product.price.amount, {
                      currency: product.price.currency,
                      locale: "es-AR",
                      decimalScale: 0,
                      inputDecimalScale: 0,
                    })}
                  </span>
                  {product.free_shipping && (
                    <img
                      className="items-list-item-free-shipping"
                      src="/assets/ic_shipping.png"
                      alt="Free shipping"
                    />
                  )}
                </div>
                <span className="items-list-item-title">{product.title}</span>
              </div>
              <div className="items-list-item-location-container">
                <span className="items-list-item-location">
                  {product.location}
                </span>
              </div>
            </div>
            {i < products.length - 1 && <div className="divider" />}
          </>
        ))}
      </div>
    </div>
  );
};
