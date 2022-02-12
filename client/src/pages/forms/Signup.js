import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { createUser } from "../../redux/actions/userAction";
import loading from "../../assets/lotties/loading.json";
import logSuccess from "../../assets/lotties/unlock.json";

import FormMessage from "./AlertForm";
import Lottie from "react-lottie";
import "./form.css";

const Signup = ({ isLogged, loading, user, error }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [booleano, setBooleano] = useState(true);
  const [showLottie, setShowLottie] = useState(false);
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(createUser({ userInfo }));
    setName("");
    setEmail("");
    setPassword("");
  };

  // {
  //   isLogged ? handlePush() : history.push("/signup");
  // }

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
      {/* <h3
        onClick={() =>
          setLogSuccessAnimation({
            ...logSuccessAnimation,
            isStopped: !logSuccessAnimation.isStopped,
          })
        }
      >
        click me
      </h3> */}
      {isLogged ? myfunction() : null}
      <form className="signup-form" onSubmit={handleSubmit}>
        {console.log(name)}
        <h1>Cadastre-se Já!</h1>
        <label>Nome</label>
        <input
          type="text"
          value={name}
          placeholder="nome do usuario"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="Email do usuario"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>senha</label>
        <input
          type="text"
          value={password}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button class="button button1" type="submit">
          Cadastrar
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
  // acompanha o estadoatual do redux
  console.log("sou mapState", state);
  return {
    error: state.errorReducer.message,
    isLogged: state.userReducer.isLogged,
    user: state.userReducer.user,
    loading: state.userReducer.loadingUser,
  };
};

export default connect(mapStateToProps)(Signup);
