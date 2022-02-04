import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { createUser } from "../../redux/actions/userAction";
import loading from "../../assets/lotties/loading.json";
import FormMessage from "./AlertForm";
import Lottie from "react-lottie";
import "./form.css";

const Signup = ({ user, isLogged, error }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLottie, setShowLottie] = useState(undefined);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = {
    name: name,
    email: email,
    password: password,
  };

  const lottiePush = (user) => {
    setShowLottie(false);
    setShowLottie(true);
    setTimeout(() => {
      console.log("aquela funcao pra ver o user", user);

      // {
      //   isLogged ? history.push("/") : history.push("/login");
      // }
      // setShowLottie(false);
    }, 2000);
  };

  const handleSubmit = (event, user) => {
    event.preventDefault();
    dispatch(createUser(userInfo));
    lottiePush(user);
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Lottie options={defaultOptions} height={200} width={200} />
      <form className="signup-form" onSubmit={handleSubmit}>
        {!error ? null : <FormMessage error={error} user={user} />}
        <h1>Cadastre-se Já!</h1>
        {isLogged ? history.push("/") : null}
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

const mapStateToProps = (state) => {
  // acompanha o estadoatual do redux
  console.log("sou mapState", state);
  return {
    error: state.errorReducer.message,
    user: state.userReducer,
    isLogged: state.userReducer.isLogged,
  };
};

export default connect(mapStateToProps)(Signup);
