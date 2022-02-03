import React, { useEffect } from "react";
import Lottie from "react-lottie";
import workingman from "../../assets/lotties/working-man.json";
// import workingman from ".../assets/lotties/working-man.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: workingman,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const LottieIssue = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="lottie-container" style={lottieStyle}>
      <h2>estamos trabalhando nisso</h2>
      <Lottie options={defaultOptions} height={600} width={600} />
    </div>
  );
};

const lottieStyle = {
  backgroundColor: "grey",
};
export default LottieIssue;
