import React from 'react';
import ListaProduto from './produto/ListaProduto';
import Header from './header/Header';

function Home(){
    return(
      <div className="home">
        <Header  />
        <ListaProduto  />
      </div>
    )
  }
export default Home;
