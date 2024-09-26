import React, { Suspense, useEffect } from "react";
import { useProducts } from "@/data/services";

import dynamic from "next/dynamic";
import useStore from "@/store/useStore";

const Header = dynamic(() => import("remoteHeader/Header"), {
  ssr: false,
});

const Footer = dynamic(() => import("remoteFooter/Footer"), {
  ssr: false,
});

const ListCards = dynamic(() => import("remoteCards/ListCards"), {
  ssr: false,
});

export const App: React.FC = () => {
  const { getProducts } = useProducts();

  const productsStore = useStore((state) => state);

  useEffect(() => {
    const init = async () => {
      const data = await getProducts();
      productsStore.addProducts(data.products);
    };

    if (productsStore.products.length === 0) {
      init();
    }
  }, [getProducts, productsStore]);

  return (
    <div>
      <Suspense>
        <Header cartCount={productsStore.cart.length} />
      </Suspense>
      <Suspense>
        <ListCards productsStore={productsStore} />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
};
