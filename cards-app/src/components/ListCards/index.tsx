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
        found.quantity++;
      } else {
        acc.push({ ...item, quantity: 1 });
      }

      return acc;
    },
    []
  );

  return (
    <>
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
                        <span>{item.title}</span>
                        <span>{`Qt: ${item.quantity}`}</span>
                      </div>
                    ))
                  ) : (
                    <div>
                      <span>No items in the cart</span>
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
