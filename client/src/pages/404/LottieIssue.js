import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import Popup from './modal/Popup';
// import workingman from ".../../assets/lotties/working-man.json";
import workingman from '../../assets/lotties/working-man.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: workingman,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const LottieIssue = () => {
  const [toggle, setToggle] = useState(false);

  //toggle to show popup
  const togglePopupState = () => {
    setTimeout(() => setToggle(true), 2400);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 350,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToTop();
    togglePopupState();
  }, []);

  return (
    <div className="lottie-container">
      <h2
        style={{ 'text-align': 'center', position: 'relative', top: '100px' }}
      >
        Estamos trabalhando nisso
      </h2>
      <Lottie options={defaultOptions} height={600} width={600} />
      <Popup toggle={toggle} />
    </div>
  );
};

const lottieStyle = {
  backgroundColor: 'grey',
};
export default LottieIssue;
