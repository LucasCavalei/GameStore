import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 350,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="lottie-container">
      <h2
        style={{ 'text-align': 'center', position: 'relative', top: '100px' }}
      >
        Em construção. Estamos trabalhando nisso
      </h2>

      <Lottie options={defaultOptions} height={600} width={600} />
    </div>
  );
};

export default LottieIssue;
