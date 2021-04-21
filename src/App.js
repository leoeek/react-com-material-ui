import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

import { Container, Typography } from '@material-ui/core';
import { validaCPF, validaSenha } from './models/cadastro';

import ValidacoesCadastro from './contexts/ValidacoesCadastro';
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
        
        <ValidacoesCadastro.Provider value={{ cpf: validaCPF, senha: validaSenha, nome: validaSenha }}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

const aoEnviarForm = (dados) => {
  console.log('Dados', dados)
}


export default App;
