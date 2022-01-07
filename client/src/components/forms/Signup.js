import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { createUser } from '../../redux/actions/userAction';
import Header from '../header/Header';
import AlertForm from "./AlertForm";
import "./form.css";

const Signup= ({error,isLogged})=> {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const dispatch = useDispatch();

  const userInfo ={
    name: name,
    email: email,
    password: password
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser(userInfo));
    setName("")
    setEmail("")
    setPassword("")
  }
    return (
  <> 
  <Header /> 
    <form className="form" onSubmit={handleSubmit}>
    { !error ? null : <AlertForm error={error} /> }
    <h1>Cadastre-se Já!</h1>
    <label>Nome</label>
    <input type="text" value={name} placeholder="nome do usuario" onChange={e => setName(e.target.value)} /> 
    <label>Email</label>
    <input type="email" value={email} placeholder="Email do usuario" onChange={e => setEmail(e.target.value)} /> 
    <label>senha</label>
    <input type="text" value={password} placeholder="Senha" onChange={e => setPassword(e.target.value)} />         
      <button class="button button1" type="submit">Cadastrar</button>
  <h5>já é nosso cliente ? <Link to='/login'> click login</Link></h5>
    </form>
  </ >
 )
}

  const mapStateToProps = (state)=>{
    return{
    error : state.errorReducer.message,
  }
}
    
export default connect(mapStateToProps)(Signup);
