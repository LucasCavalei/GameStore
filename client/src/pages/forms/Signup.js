import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createUser } from '../../redux/actions/userAction';
import Lottie from 'react-lottie';
import Popup from '../404/modal/Popup';
import PropTypes from 'prop-types';
import logSuccess from '../../assets/lotties/unlock.json';
// import loading from "../../assets/lotties/loading.json";
// import AlertForm from "./alerts/AlertForm";

import './form.css';

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
  const [toggle, setToggle] = useState(false);

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
  const callPopup = () => {
    setTimeout(() => setToggle(true), 2000);
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
          height={125}
          width={125}
          isStopped={logSuccessAnimation.isStopped}
          isPaused={logSuccessAnimation.isPaused}
        />
      ) : null}
      {isLogged ? callPopup() : null}

      <Popup toggle={toggle} />

      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastre-se Já!</h1>
        <label>Nome: </label>
        <input type="text" {...register('name')} />
        <label> Email </label>
        <input type="text" {...register('email')} />
        <label> Senha </label>
        <input type="password" {...register('password')} />
        <button class="button button1" type="submit">
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
  console.log('sou mapState', state.user);
  return {
    error: state.errorReducer.message,
    isLogged: state.userReducer.isLogged,
    user: state.userReducer.user,
    loading: state.userReducer.loadingUser,
  };
};

export default connect(mapStateToProps)(Signup);
