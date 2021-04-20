import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

const FormularioCadastro = ({ aoEnviar, validaCPF }) => {

    const [etapaAtual, setEtapaAtual] = useState(0);

    const proximo = () => {
        setEtapaAtual(etapaAtual + 1);
    }

    const formularioAtual = (etapa) => {
        switch(etapa) {
            case 0:
                return <DadosUsuario aoEnviar={proximo} />;
            case 1:
                return <DadosPessoais aoEnviar={proximo} validaCPF={validaCPF} />;
            case 2:
                return <DadosEntrega aoEnviar={aoEnviar} />;
            default:
                return <Typography>Erro ao selecionar formulário</Typography>;
        }
    }

    return (
        <>
        {formularioAtual(etapaAtual)}
        </>
    )

}



export default FormularioCadastro;