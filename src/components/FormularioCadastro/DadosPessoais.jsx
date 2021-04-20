import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

const DadosPessoais = ({ aoEnviar, validaCPF }) => {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(false)
    const [erros, setErros] = useState({
        cpf: {
            valido: true, 
            texto: ''
        }
    })

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
                    let tmpNome = event.target.value;
                    if (tmpNome.length >= 3) {
                        tmpNome = tmpNome.substr(0, 3);
                    }                    
                    setNome(tmpNome)
                }}
                id="nome" 
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
                onBlur={(event) => {
                    const ehValido = validaCPF(cpf)
                    setErros({ cpf: ehValido })
                }}
            id="CPF" label="cpf" margin="normal" variante="outlined" fullWidth />

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
            >Cadastrar</Button>

            
        </form>
    )
}

export default DadosPessoais;