"use client";
import "tailwindcss/tailwind.css";
import Card from "../Card";
import { Style } from "./ListCards.styles";

const ListCards = (props) => {
  return (
    <div className={Style.Container}>
      <div className={Style.List}>
        {props.products.map((product: any, index: number) => (
          <Card key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ListCards;
