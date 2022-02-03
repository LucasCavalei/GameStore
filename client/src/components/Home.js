import React from "react";
import ListaProduto from "./produto/ListaProduto";
import Header from "./header/Header";
import Lottie from "react-lottie";
import compra from "../assets/lotties/done-black.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: compra,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Home() {
  return (
    <div className="home">
      <Lottie options={defaultOptions} height={60} width={60} />
      <Header />
      <ListaProduto />
    </div>
  );
}
export default Home;
