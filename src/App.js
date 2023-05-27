import React,{Fragment} from 'react'
import Formulario from './Components/Formulario';

function App() {
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className='row'>
          <div className='one-half column'>
            {/* Madar a llamar al Formulario */}
            <Formulario></Formulario>
          </div>
          <div className='one-half column'>
            2
          </div>
        </div>
    </div>
    </Fragment>
  );
}

export default App;


// Implementación de Fragment para poder retornar 2 elementos