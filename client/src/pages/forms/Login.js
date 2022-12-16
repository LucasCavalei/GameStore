import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../redux/actions/userAction';
import logSuccess from '../../assets/lotties/unlock.json';
import PopupGoToStore from '../404/modal/Popup';
import AlertForm from './alerts/AlertForm';
import './form.css';

const Login = ({ user, isLogged, error }) => {
  const { register, handleSubmit } = useForm();
  const [logSuccessAnimation, setLogSuccessAnimation] = useState({
    isStopped: false,
    isPaused: false,
  });
  const dispatch = useDispatch();
  const logUnlock = {
    loop: false,
    autoplay: true,
    animationData: logSuccess,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [togglePopUpStore, setTogglePopUpStore] = useState(false);
  const callPopupGoToStore = () => {
    setTimeout(() => setTogglePopUpStore(true), 2000);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const onSubmit = (e) => {
    const userInfo = {
      email: e.email,
      password: e.password,
    };
    dispatch(loginUser(userInfo));
  };

  return (
    <>
      {/* <Header /> */}
      {isLogged ? (
        <Lottie
          style={{
            position: 'absolute',
            top: '75%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          options={logUnlock}
          height={200}
          width={200}
          isStopped={logSuccessAnimation.isStopped}
          isPaused={logSuccessAnimation.isPaused}
        />
      ) : null}
      {isLogged ? callPopupGoToStore() : null}
      <PopupGoToStore toggle={togglePopUpStore} />

      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        {!error ? null : <AlertForm error={error} />}
        {user ? (
          <h4>
            {user.name} {user.message}
          </h4>
        ) : null}

        <h1>Faça seu login</h1>
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
          Não é nosso cliente ? <Link to="/signup"> Cadastre-se Já</Link>
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

const mapStateToProps = (state) => {
  return {
    error: state.errorReducer.message,
    user: state.userReducer.user,
    isLogged: state.userReducer.isLogged,
  };
};

export default connect(mapStateToProps)(Login);
