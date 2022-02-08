import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { createUser } from "../../redux/actions/userAction";
import loading from "../../assets/lotties/loading.json";
import FormMessage from "./AlertForm";
import Lottie from "react-lottie";
import "./form.css";

const Signup = (isLogged, user, error) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
  });

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

  const handlePush = (user) => {
    //   // {animationState || animationState.lenght < 0 && setAnimationState.isStopped: false;
    //   console.log("sou type of is logged", typeof isLogged);
    //   {
    //     setAnimationState({ ...animationState, isStopped: false });
    //   }

    setTimeout(() => {
      // --------------------------------------
      if (!isLogged) {
        history.push("/");
      }
    }, 2000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(createUser({ userInfo }));
    handlePush();
    setName("");
    setEmail("");
    setPassword("");
  };
  // {
  //   isLogged ? handlePush() : history.push("/signup");
  // }

  return (
    <>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
      <form className="signup-form" onSubmit={handleSubmit}>
        {/* <button onClick={() => setAnimationState({ isStopped: true })}>
                        stop
                      </button>
                      <button onClick={() => setAnimationState({ isStopped: false })}>
                        play
                      </button> */}
        {/* <button
          onClick={() =>
            this.setAnimationState({ isPaused: !this.state.isPaused })
          }
        >
          pause
        </button> */}
        {/* {!error ? null : <FormMessage error={error} user={user} />} */}
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

const mapStateToProps = (state) => {
  // acompanha o estadoatual do redux
  console.log("sou mapState", state);
  return {
    error: state.errorReducer.message,
    isLogged: state.userReducer.isLogged,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(Signup);
