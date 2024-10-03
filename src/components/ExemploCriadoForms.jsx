import { useState } from "react";
import ReactDOM from "react-dom/client";

function FormsCriado() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputs);
    alert(`O nome informado foi: ${inputs.username}`);
    alert(`A idade informada foi: ${inputs.idade}`);
    alert(`O CPF informado foi: ${inputs.cpf}`);
    alert(`O telefone informado foi: ${inputs.telefone}`);
    alert(`O e-mail informado foi: ${inputs.email}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Coloque seu nome:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </p>
      <p>Coloque sua idade:
        <input 
          type="number" 
          name="idade" 
          value={inputs.idade || ""} 
          onChange={handleChange}
        />
        </p>
        <p>Coloque seu CPF:
        <input 
          type="number" 
          name="cpf" 
          value={inputs.cpf || ""} 
          onChange={handleChange}
        />
        </p>
        <p>Coloque seu telefone:
        <input 
          type="number" 
          name="telefone" 
          value={inputs.telefone || ""} 
          onChange={handleChange}
        />
        </p>
        <p>Coloque seu e-mail:
        <input 
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </p>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FormsCriado />);

export default FormsCriado;