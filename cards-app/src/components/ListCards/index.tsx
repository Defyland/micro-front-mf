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
  // Calcular quantidade de produtos no carrinho
  const cartValues: ProductOptions[] = cart.reduce<ProductOptions[]>(
    (acc, item) => {
      const found = acc.find((i) => i.id === item.id);

      if (found) {
        found.quantity++;
      } else {
        acc.push({ ...item, quantity: 1 });
      }

      return acc;
    },
    []
  );

  // Calcular o total de itens e o valor total
  const totalItems = cartValues.reduce((acc, item) => acc + item.quantity, 0);
  const totalValue = cartValues.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <>
      {/* Listagem de produtos */}
      <div className={Style.Container}>
        <div className={Style.List}>
          {products.map((product: ProductOptions, index: number) => {
            // Encontrar a quantidade do produto no carrinho, se houver
            const cartProduct = cartValues.find((p) => p.id === product.id);
            const quantity = cartProduct ? cartProduct.quantity : 0;

            return (
              <Card
                key={index}
                {...product}
                quantity={quantity} // Passar a quantidade como uma prop
                addOnCart={() => selectedProducts(product)}
              />
            );
          })}
        </div>
      </div>

      {/* Modal do carrinho */}
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
                          <span className={Style.CartItemPrice}>{`R$ ${item.price}`}</span> {/* Exibe o preço do produto */}
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

                  {/* Exibe o total de itens e valor */}
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