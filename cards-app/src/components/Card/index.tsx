import { Style } from "./Cards.style";
import { CardsProps } from "../../../../global/entities";

const Card = ({ thumbnail, price, title, addOnCart, quantity }: CardsProps) => {
  return (
    <div data-testid={title} className={Style.Container}>
      <div className={Style.ThumbnailContainer}>
        <img src={thumbnail} alt={title} className={Style.Thumbnail} />
        {!!quantity ? (
          <div className={Style.QuantityBadge}>
            <span>{quantity}</span>
          </div>
        ): null}
      </div>
      <div className={Style.InfoContainer}>
        <span className={Style.Title}>{title}</span>
        <div className={Style.PriceContainer}>
          <span className={Style.PriceText}>{`R$: ${price}`}</span>
        </div>
        <button className={Style.AddToCartButton} onClick={addOnCart}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default Card;