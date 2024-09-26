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
        <div
          className="size-full fixed top-0 end-0 z-[80] opacity-100 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
          role="dialog"
          aria-labelledby="hs-basic-modal-label"
        >
          <div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
              <div className="flex justify-between items-center py-3 px-4 border-b">
                <h3
                  id="hs-basic-modal-label"
                  className="font-bold text-gray-800"
                >
                  Cart
                </h3>
                <button
                  onClick={changeCartState}
                  type="button"
                  className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-4 overflow-y-auto">
                <p className="mt-1 text-gray-800 flex flex-col">
                  {cartValues.map((item) => (
                    <div key={item.id} className={Style.Item}>
                      <span>{item.title}</span>
                      <span>{`Qt: ${item.quantity}`}</span>
                    </div>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListCards;
