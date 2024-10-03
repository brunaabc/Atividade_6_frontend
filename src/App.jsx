import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Garage from './components/Exemplo_lista'
import Maquiagem from './components/ExemploCriado_Make'
import Dorama from './components/ExemploCriado_Dorama'
import MyForm from './components/ExemploForms1'
import MyForm2 from './components/ExemploForms2'
import MyForm4 from './components/ExemploForms4'
import MyForm3 from './components/ExemploForms3'
import MyForm5 from './components/ExemploForms5'
import MyForm6 from './components/ExemploForms6'
import FormsCriado from './components/ExemploCriadoForms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='partone'>
      <h3>Exemplo Lista</h3>
      <Garage/>
      <h3>Meu Exemplo - Maquiagem</h3>
      <Maquiagem/>
      <h3>Meu exemplo - Dorama</h3>
      <Dorama/>
    </div>

    <div className='parttwo'>
      <h2>Exemplo Forms 1</h2>
      <h3>Adding Forms in React</h3>
      <MyForm/>
      <h2>Exemplo Forms 2</h2>
      <h3>Handling Forms</h3>
      <MyForm2/>
      <h2>Exemplo Forms 3</h2>
      <h3>Submitting Forms</h3>
      <MyForm3/>
      <h2>Exemplo Forms 4</h2>
      <h3>Multiple Input Fields</h3>
      <MyForm4/>
      <h2>Exemplo Forms 5</h2>
      <h3>Textarea</h3>
      <MyForm5/>
      <h2>Exemplo Forms 6</h2>
      <h3>Select</h3>
      <MyForm6/>
      <h2>Meu exemplo Forms</h2>
      <FormsCriado/>
    </div>

    </>
  )
}

export default App;
