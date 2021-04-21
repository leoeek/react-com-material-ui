import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

const DadosUsuario = ({ aoEnviar }) => {

    const validacoes = useContext(ValidacoesCadastro)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [erros, validarCampos] = useErros(validacoes)

    const possoEnviar = () => {
        for (let campo in erros) {
             if (!erros[campo].valido) {
                 return false
             }
        }
        return true;
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ email, senha });
                }
            }}
        >
            <TextField
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email"
                label="email"
                type="email"
                margin="normal" 
                variante="outlined" 
                fullWidth    
                required
            />
            <TextField
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                margin="normal" 
                variante="outlined" 
                fullWidth    
                required
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >Próximo</Button>
        </form>
    )

}

export default DadosUsuario;