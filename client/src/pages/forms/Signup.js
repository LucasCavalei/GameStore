import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { createUser } from "../../redux/actions/userAction";
import loading from "../../assets/lotties/loading.json";
import logSuccess from "../../assets/lotties/unlock.json";

import FormMessage from "./AlertForm";
import Lottie from "react-lottie";
import "./form.css";

const Signup = ({ isLogged, loading, user, error }) => {
  const [showLottie, setShowLottie] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const [logSuccessAnimation, setLogSuccessAnimation] = useState({
    isStopped: true,
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
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const logOptions = {
    loop: false,
    autoplay: false,
    animationData: logSuccess,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const dispatch = useDispatch();
  const history = useHistory();

  const myfunction = () => {
    setLogSuccessAnimation({
      ...logSuccessAnimation,
      isStopped: !logSuccessAnimation.isStopped,
    });
  };

  const onSubmit = (e) => {
    const userInfo = {
      name: e.name,
      email: e.email,
      password: e.password,
    };
    dispatch(createUser({ userInfo }));
  };

  return (
    <>
      {/* <Lottie
          options={loadingOptions}
          height={200}
          width={200}
          isStopped={loadingAnimation.isStopped}
          isPaused={loadingAnimation.isPaused} 
        /> */}

      <Lottie
        style={{
          position: "absolute",
          top: "75%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        options={logOptions}
        height={200}
        width={200}
        isStopped={logSuccessAnimation.isStopped}
        isPaused={logSuccessAnimation.isPaused}
      />

      {/* {isLogged ? myfunction() : null} */}
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastre-se Já!</h1>
        <label>Nome: </label>
        <input type="text" {...register("name")} />
        <label> Email </label>
        <input type="text" {...register("email")} />
        <label> Senha </label>
        <input type="text" {...register("password")} />
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
Signup.propTypes = {
  isLogged: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  console.log("sou mapState", state);
  return {
    error: state.errorReducer.message,
    isLogged: state.userReducer.isLogged,
    user: state.userReducer.user,
    loading: state.userReducer.loadingUser,
  };
};

export default connect(mapStateToProps)(Signup);
