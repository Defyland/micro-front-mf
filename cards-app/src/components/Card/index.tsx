import { Style } from "./Cards.style";
import { CardsProps } from "../../../../global/entities";

const Card = ({ thumbnail, price, title, addOnCart }: CardsProps) => {
  return (
    <div
      data-testid={title}
      className={Style.Container}
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={Style.InnerContainer}>
        <div className={Style.ButtonContainer}>
          <span className={Style.PriceText}>{`R$: ${price}`}</span>
          <button className={Style.Button} onClick={addOnCart}>
            <span className={Style.ButtonText}>COMPRAR</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
