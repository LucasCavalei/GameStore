import React, { useEffect } from 'react';
import ListaProduto from '../../components/produto/ListaProduto';
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

function Home() {
  useEffect(() => {
    pegaDado();
  });

  async function pegaDado() {
    try {
      const data = await axios.get('http://localhost:8888/user/login');
      console.log('-----===============---------', data);
      console.log('sou processssss', process.env.SERVER_URL);
    } catch (err) {
      console.log('-----===============---------', err);
    }
  }
  return (
    <div className="home">
      <ListaProduto />
    </div>
  );
}
export default Home;
