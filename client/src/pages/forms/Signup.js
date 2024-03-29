import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createUser } from '../../redux/actions/userAction';
import './form.css';
import Lottie from 'react-lottie';
import PopupGoToStore from '../404/modal/Popup';
import PropTypes from 'prop-types';
import logSuccess from '../../assets/lotties/unlock.json';

const Signup = ({ isLogged, loading, user, error }) => {
  // const [showLottie, setShowLottie] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const [logSuccessAnimation, setLogSuccessAnimation] = useState({
    isStopped: false,
    isPaused: false,
  });
  const [loadingAnimation, setLaoadingAnimation] = useState({
    isStopped: true,
    isPaused: false,
  });

  const loadingOptions = {
    loop: false,
    autoplay: false,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const logUnlock = {
    loop: false,
    autoplay: true,
    animationData: logSuccess,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const dispatch = useDispatch();

  const [togglePopUpStore, setTogglePopUpStore] = useState(false);
  const callPopupGoToStore = () => {
    setTimeout(() => setTogglePopUpStore(true), 2000);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const onSubmit = (e) => {
    const userData = {
      name: e.name,
      email: e.email,
      password: e.password,
    };
    dispatch(createUser(userData));
  };

  return (
    <>
      {isLogged ? (
        <Lottie
          style={{
            position: 'absolute',
            top: '75%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          options={logUnlock}
          height={180}
          width={180}
          isStopped={logSuccessAnimation.isStopped}
          isPaused={logSuccessAnimation.isPaused}
        />
      ) : null}
      {isLogged ? callPopupGoToStore() : null}

      <PopupGoToStore toggle={togglePopUpStore} />
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastre-se Já!</h1>
        <label>Nome: </label>
        <input type="text" {...register('name')} />
        <label> Email </label>
        <input type="text" {...register('email')} />
        <label> Senha </label>
        <input type="password" {...register('password')} />
        <button className="button button1" type="submit">
          Enviar
        </button>
        <h5>
          já é nosso cliente ? <Link to="/login"> click login</Link>
        </h5>
      </form>
    </>
  );
};
const scrollToTop = () => {
  window.scrollTo({
    top: 160,
    behavior: 'smooth',
  });
};

Signup.propTypes = {
  isLogged: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    error: state.errorReducer.message,
    isLogged: state.userReducer.isLogged,
    user: state.userReducer.user,
    loading: state.userReducer.loadingUser,
  };
};

export default connect(mapStateToProps)(Signup);
