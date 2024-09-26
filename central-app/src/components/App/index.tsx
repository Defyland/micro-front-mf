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
  const products = useStore((state) => state.products);
  const addProducts = useStore((state) => state.addProducts);

  useEffect(() => {
    const init = async () => {
      const data = await getProducts();
      console.log({ products });
      addProducts(data.products);
    };

    if (products.length === 0) {
      init();
    }
  }, []);

  return (
    <div>
      <Suspense>
        <Header />
      </Suspense>
      <Suspense>
        <ListCards products={products} />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
};
