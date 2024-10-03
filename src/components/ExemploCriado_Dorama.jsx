import React from 'react';
import ReactDOM from 'react-dom/client';

function Nomes(props) {
  return <li>Dorama: { props.brand }</li>;
}

function Dorama() {
  const drama = [
    {id: 1, brand: 'Sorriso Real'},
    {id: 2, brand: 'O Amor Mora Ao Lado'},
    {id: 3, brand: 'Nosso Destino'}
  ];
 
  return (
    <>
	    <h2>Nomes de Doramas</h2>
	    <ul>
        {drama.map((nomes) => <Nomes key={nomes.id} brand={nomes.brand} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Dorama />);

export default Dorama;