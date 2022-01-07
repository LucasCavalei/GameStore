import React,{useState} from 'react';
import { connect,useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/userAction';
import Header from '../header/Header';
import AlertForm from './AlertForm';
import "./form.css";

const Login = ({isLogged,error})=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userInfo ={
    email: email,
    password: password
  };
const handleSubmit = (event) => {
   event.preventDefault();
   dispatch(loginUser(userInfo))
   setEmail("")
   setPassword("")
 }
  return (
   <> 
   <Header /> 
    <form className="form" onSubmit={handleSubmit}>

     {!error ? null: <AlertForm error={error} />}
      <h2>entre Já</h2>
      <label>Email</label>
      <input type="text" value={email} placeholder="Email do usuario" onChange={e => setEmail(e.target.value)} /> 
      <label>senha</label>
      <input type="text" value={password} placeholder="Senha" onChange={e => setPassword(e.target.value)} />         
      <button class="button button1" type="submit">Entrar</button>
   </form>
 </ >
 )

}
const mapStateToProps = (state)=>{
  return{
  error : state.errorReducer.message,
 }
}

export default connect(mapStateToProps)(Login);
