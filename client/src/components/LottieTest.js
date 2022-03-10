import React, { useRef } from "react";
import Lottie from "react-lottie";
import animalog from "../assets/lotties/unlock.json";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { connect } from "react-redux";

const logOptions = {
  loop: false,
  autoplay: true,
  animationData: animalog,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const LottieTest = ({ isLogged }) => {
  const myRef = useRef();

  return (
    <div>
      <Player
        ref={myRef}
        autoplay
        loop
        src={animalog}
        style={{ height: "300px", width: "300px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
      <buttom onClick={() => myRef.current.play()}>Play</buttom>
      <buttom onClick={() => myRef.current.stop()}>frame</buttom>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isLogged: state.userReducer.isLogged,
  };
};
export default connect(mapStateToProps)(LottieTest);
// export default LottieTest;
