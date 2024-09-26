"use client";
import "tailwindcss/tailwind.css";
import Card from "../Card";
import { Style } from "./ListCards.styles";
import { ProductState, ProductOptions } from "../../../../global/entities";

interface ListCardsProps {
  productsStore: ProductState;
}

const ListCards = ({
  productsStore: { products, selectedProducts },
}: ListCardsProps) => {
  return (
    <div className={Style.Container}>
      <div className={Style.List}>
        {products.map((product: ProductOptions, index: number) => (
          <Card
            key={index}
            {...product}
            addOnCart={() => selectedProducts(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListCards;
