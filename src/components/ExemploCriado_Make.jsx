import React from 'react';
import ReactDOM from 'react-dom/client';

function Produtos(props) {
  return <li>Produto: { props.brand }</li>;
}

function Maquiagem() {
  const makeup = [
    {id: 1, brand: 'Base'},
    {id: 2, brand: 'Blush'},
    {id: 3, brand: 'Batom'}
  ];
  return (
    <>
	    <h2>Produtos de Maquiagem</h2>
	    <ul>
        {makeup.map((produtos) => <Produtos key={produtos.id} brand={produtos.brand} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Maquiagem/>);

export default Maquiagem;