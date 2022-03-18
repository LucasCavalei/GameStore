import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "../../redux/actions/userAction";
import AlertForm from "./AlertForm";
import "./form.css";

const Login = ({ user, isLogged, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setEmail("");
  //   setPassword("");
  // };
  const onSubmit = (e) => {
    const userInfo = {
      email: e.email,
      password: e.password,
    };
    dispatch(loginUser(e));
    console.log(e);
  };

  return (
    <>
      {/* <Header /> */}

      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        {!error ? null : <AlertForm error={error} />}
        {user ? (
          <h4>
            {user.name} {user.message}
          </h4>
        ) : null}

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
const mapStateToProps = (state) => {
  return {
    error: state.errorReducer.message,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(Login);
