"use client";
import "tailwindcss/tailwind.css";
import Card from "../Card";
import { Style } from "./ListCards.styles";
import { ProductOptions, ListCardsProps } from "../../../../global/entities";

const ListCards = ({
  productsStore: {
    products,
    selectedProducts,
    cart,
    showCart,
    changeCartState,
  },
}: ListCardsProps) => {
  const cartValues: ProductOptions[] = cart.reduce<ProductOptions[]>(
    (acc, item) => {
      const found = acc.find((i) => i.id === item.id);

      if (found) {
        found.quantity = (found.quantity ?? 0) + 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }

      return acc;
    },
    []
  );

  const totalItems = cartValues.reduce((acc, item) => acc + (item.quantity ?? 0), 0);
  const totalValue = cartValues.reduce((acc, item) => acc + item.price * (item.quantity ?? 0), 0).toFixed(2);

  return (
    <>
      <div className={Style.Container}>
        <div className={Style.List}>
          {products.map((product: ProductOptions, index: number) => {
            const cartProduct = cartValues.find((p) => p.id === product.id);
            const quantity = cartProduct ? cartProduct.quantity : 0;

            return (
              <Card
                key={index}
                {...product}
                quantity={quantity}
                addOnCart={() => selectedProducts(product)}
              />
            );
          })}
        </div>
      </div>

      {showCart && (
        <div className={Style.Modal} role="dialog" aria-labelledby="hs-basic-modal-label">
          <div className={Style.ModalContent}>
            <div className={Style.ModalCard}>
              <div className={Style.ModalHeader}>
                <h3 id="hs-basic-modal-label" className={Style.ModalTitle}>
                  Cart
                </h3>
                <button
                  onClick={changeCartState}
                  type="button"
                  className={Style.CloseButton}
                  aria-label="Close"
                  data-hs-overlay="#hs-basic-modal"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>

              <div className={Style.ModalBody}>
                <div className={Style.CartItems}>
                  {cartValues.length > 0 ? (
                    cartValues.map((item) => (
                      <div key={item.id} className={Style.Item}>
                        <img src={item.thumbnail} alt={item.title} className={Style.CartItemImage} />
                        <div className={Style.CartItemInfo}>
                          <span className={Style.CartItemTitle}>{item.title}</span>
                          <span className={Style.CartItemPrice}>{`R$ ${item.price}`}</span>
                          <span className={Style.CartItemQuantity}>{`Qt: ${item.quantity}`}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className={Style.EmptyCart}>
                      <img
                        src="https://us.123rf.com/450wm/mifolga/mifolga1811/mifolga181100053/127711581-emo%C3%A7%C3%A3o-engra%C3%A7ada-chorando-rosto-emoji-rosto-triste-no-fundo-verde-emoticons-simples-pictogramas.jpg"
                        alt="Empty cart"
                        className={Style.EmptyCartImage}
                      />
                      <span className={Style.EmptyCartMessage}>Você ainda não tem produtos :( </span>
                    </div>
                  )}

                  {cartValues.length > 0 && (
                    <div className={Style.TotalContainer}>
                      <span className={Style.TotalText}>{`Total de itens: ${totalItems}`}</span>
                      <span className={Style.TotalText}>{`Valor total: R$ ${totalValue}`}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListCards;