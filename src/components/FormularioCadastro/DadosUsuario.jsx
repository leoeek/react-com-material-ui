import { Button, TextField } from '@material-ui/core';
import React from 'react';

const DadosUsuario = ({aoEnviar}) => {

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar();
            }}
        >
            <TextField
                id="email"
                label="email"
                type="email"
                margin="normal" 
                variante="outlined" 
                fullWidth    
                required
            />
            <TextField
                id="senha"
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
            >Cadastrar</Button>
        </form>
    )

}

export default DadosUsuario;