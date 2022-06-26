import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Lottie from "react-lottie";

import { Link } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { createUser } from "../../redux/actions/userAction";
// import loading from "../../assets/lotties/loading.json";
import logSuccess from "../../assets/lotties/unlock.json";
// import AlertForm from "./alerts/AlertForm";

import "./form.css";

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
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const logUnlock = {
    loop: false,
    autoplay: true,
    animationData: logSuccess,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    const userInfo = {
      name: e.name,
      email: e.email,
      password: e.password,
    };
    dispatch(createUser({ userInfo }));
  };
  console.log("sou user ultimo", user);
  // const teste = ({ user }) => {
  //   const { userToken } = user;
  //   console.log("sou o que eu estva esprado", userToken);
  // };
  // {
  // }
  return (
    <>
      {isLogged ? (
        <Lottie
          style={{
            position: "absolute",
            top: "75%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          options={logUnlock}
          height={200}
          width={200}
          isStopped={logSuccessAnimation.isStopped}
          isPaused={logSuccessAnimation.isPaused}
        />
      ) : null}
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastre-se Já!</h1>
        {/* <h2>{user}</h2> */}
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
  console.log("sou mapState", state.user);
  return {
    error: state.errorReducer.message,
    isLogged: state.userReducer.isLogged,
    user: state.userReducer.user,
    loading: state.userReducer.loadingUser,
  };
};

export default connect(mapStateToProps)(Signup);
