import React from 'react';
import ListaProduto from '../../components/produto/ListaProduto';

function Home() {
  const meuObjeto = {
    name: 'eh do frontednf',
    email: '00@35g.com',
    password: '121212',
  };

  const test = async () => {
    // const mydata = await fetch('http://localhost:8888/user/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(nickname),
    // });
    // const result = await mydata.json();
    // console.log(result);
    axios
      .post('http://localhost:8888/user/signup', meuObjeto)
      .then((res) => console.log('post enviado', res))
      .catch((err) => console.log('MY Error: ', err));
  };
  useEffect(() => {
    test();
    console.log('IM USER EFFECT IN HOME COMPONENT');
  });
  return (
    <div className="home">
      <ListaProduto />
    </div>
  );
}
export default Home;
