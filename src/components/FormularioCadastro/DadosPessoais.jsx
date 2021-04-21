import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

const DadosPessoais = ({ aoEnviar }) => {

    const validacoes = useContext(ValidacoesCadastro)
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(false)

    const [erros, validarCampos] = useErros(validacoes)

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
            }}
        >
            <TextField 
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome" 
                name="nome"
                label="Nome" 
                margin="normal" 
                variante="outlined" 
                fullWidth                 
            />
            <TextField 
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
            id="sobrenome" label="SobreNome" margin="normal" variante="outlined" fullWidth />
            <TextField 
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value)
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={validarCampos}
                id="CPF"
                name="cpf" 
                label="cpf" margin="normal" variante="outlined" fullWidth />

            <FormControlLabel
            
                label="Promoções"
                control={<Switch 
                            onChange={(event) => {
                                setPromocoes(event.target.checked)
                            }}
                            name="promocoes" checked={promocoes} color="primary" />}
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch 
                            onChange={(event) => {
                                setNovidades(event.target.checked)
                            }}
                            name="novidades" checked={novidades} color="primary" />}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
            >Próximo</Button>

            
        </form>
    )
}

export default DadosPessoais;