"use client";

import { Suspense } from "react";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("remoteHeader/Header"), {
  ssr: false,
});
const Footer = dynamic(() => import("remoteFooter/Footer"), {
  ssr: false,
});

const CardList = dynamic(() => import("remoteCards/ListCards"), {
  ssr: false,
});

const user = {
  name: "Renan",
};

const Home = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <Suspense>
        <CardList />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
};
export default Home;
