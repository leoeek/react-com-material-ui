import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

import { Container, Typography } from '@material-ui/core';
import { validaCPF, validaSenha } from './models/cadastro'

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{ cpf: validaCPF, senha: validaSenha, nome: validaSenha }} />
      </Container>
    );
  }
}

const aoEnviarForm = (dados) => {
  console.log('Dados', dados)
}


export default App;
