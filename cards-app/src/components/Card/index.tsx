import { Style } from "./Cards.style";
import { ProductOptions } from "../utils";

const Card = ({ thumbnail, addOnCart }: ProductOptions) => {
  return (
    <div
      className={Style.Container}
      style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={Style.InnerContainer}>
        <div className={Style.ButtonContainer}>
          <button className={Style.Button} onClick={addOnCart}>
            <span className={Style.ButtonText}>Adicionar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
